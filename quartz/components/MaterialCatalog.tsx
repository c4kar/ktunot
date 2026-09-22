import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/materialCatalog.scss"
// @ts-ignore
import script from "./scripts/materialcatalog.inline"
import fs from "fs"
import path from "path"
import { execSync } from "child_process"

interface ManifestFile {
  id?: string
  path: string
  name: string
  semester?: string
  course?: string
  ext?: string
  type?: string
  size_kb?: number
  added_at?: string
  download_url?: string
}

interface Manifest {
  generated_at?: string
  file_count?: number
  files: ManifestFile[]
}

export interface CatalogItem {
  id: string
  name: string
  path: string
  folder: string
  folder_label: string
  size: string
  ext: string
  thumb_url: string
  download_url: string
  preview_url: string
  date: string
}

// Module-level cached manifest (loaded once across all pages in build)
let cachedManifest: Manifest | null = null

function loadManifest(): Manifest {
  if (cachedManifest) return cachedManifest

  const candidatePaths = [
    path.resolve(process.cwd(), "./manifest.json"),
    path.resolve(process.cwd(), "../ktunDepo/manifest.json"),
  ]

  for (const p of candidatePaths) {
    try {
      if (fs.existsSync(p)) {
        const content = fs.readFileSync(p, "utf-8")
        cachedManifest = JSON.parse(content) as Manifest
        console.log(`[MaterialCatalog] Loaded manifest (${cachedManifest.files.length} files) from ${p}`)
        return cachedManifest
      }
    } catch {
      // Continue searching
    }
  }

  // Fallback: If manifest.json does not exist locally (e.g. CI without bundle), try fetching it via curl
  try {
    const targetPath = path.resolve(process.cwd(), "./manifest.json")
    console.log(`[MaterialCatalog] manifest.json not found locally. Attempting remote fallback download...`)
    execSync(`curl -sL https://raw.githubusercontent.com/c4kar/ktunDepo/main/manifest.json -o "${targetPath}"`, {
      timeout: 15000,
    })
    if (fs.existsSync(targetPath)) {
      const content = fs.readFileSync(targetPath, "utf-8")
      cachedManifest = JSON.parse(content) as Manifest
      console.log(`[MaterialCatalog] Successfully downloaded and loaded remote manifest (${cachedManifest.files.length} files)`)
      return cachedManifest
    }
  } catch (err) {
    console.error(`[MaterialCatalog] Remote fallback failed:`, err)
  }

  console.warn(`[MaterialCatalog] Warning: manifest.json could not be loaded. Catalog will be empty!`)
  return { files: [] }
}

function formatSize(sizeKb: number): string {
  if (!sizeKb || sizeKb <= 0) return "0 KB"
  if (sizeKb < 1024) return `${sizeKb.toFixed(1)} KB`
  return `${(sizeKb / 1024).toFixed(1)} MB`
}

function extractFolder(filePath: string, courseSlug: string): string {
  const parts = filePath.split("/")
  const slugLower = courseSlug.toLowerCase()
  let courseIdx = -1
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].toLowerCase() === slugLower) {
      courseIdx = i
      break
    }
  }
  if (courseIdx !== -1 && courseIdx < parts.length - 1) {
    const subparts = parts.slice(courseIdx + 1, parts.length - 1)
    if (subparts.length > 0) {
      return subparts.join("/")
    }
  }
  return ""
}

function formatFolderLabel(folderKey: string): string {
  if (!folderKey || folderKey === "" || folderKey === ".") {
    return "Genel & Temel Kaynaklar"
  }

  const segments = folderKey.split("/").map((seg) => {
    const s = seg.toLowerCase().trim()
    if (s === "lms") return "LMS Ders Notları"
    if (s === "cikmis" || s === "cikmis-sorular") return "Çıkmış Sorular"
    if (s === "vize") return "Vize Sınavları"
    if (s === "final") return "Final Sınavları"
    if (s === "sorular" || s === "ornek-soru" || s === "ornekler") return "Örnek Sorular"
    if (s === "serway") return "Serway Kitaplığı"
    if (s === "kaynakca") return "Kaynakça & Ek Notlar"
    if (s === "video" || s === "videolar") return "Ders Videoları"
    if (s === "lab" || s === "laboratuvar") return "Laboratuvar"
    if (s.startsWith("ozet-pdf")) return "Özet Notlar"
    if (s.startsWith("not-")) return `Bölüm ${s.replace("not-", "")}`

    return seg
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((w) => (w.length > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
      .join(" ")
  })

  return segments.join(" / ")
}

export default (() => {
  const MaterialCatalog: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const courseId = fileData.frontmatter?.course_id as string | undefined
    if (!courseId) return null

    const manifest = loadManifest()
    if (!manifest.files || manifest.files.length === 0) return null

    // Normalize search slug
    const normalizedCourseSlug = courseId.toLowerCase().trim()
    const courseNameFuzzy = normalizedCourseSlug.replace(/-/g, " ")

    // Find thumbnail map
    const thumbMap = new Map<string, string>()
    for (const f of manifest.files) {
      if (f.type === "image" && f.path.includes("thumbs")) {
        thumbMap.set(f.name.trim(), f.path)
      }
    }

    // Filter relevant non-image files
    const matchingFiles = manifest.files.filter((f) => {
      if (f.type === "image" && f.path.includes("thumbs")) return false
      const p = f.path.toLowerCase()
      const c = (f.course ?? "").toLowerCase()
      return (
        p.includes(normalizedCourseSlug) ||
        c.includes(courseNameFuzzy) ||
        p.includes(courseNameFuzzy)
      )
    })

    if (matchingFiles.length === 0) {
      return (
        <section class="material-catalog empty-catalog">
          {/* Top Notice / Explanation Banner */}
          <div class="catalog-empty-notice">
            <div class="notice-icon">📂</div>
            <div class="notice-content">
              <h3 class="notice-title">Bu Ders İçin Henüz Arşivlenmiş Materyal Bulunmamaktadır</h3>
              <p class="notice-text">
                Bu derse ait ders notları, çıkmış sınav soruları veya laboratuvar dokümanları henüz arşivimize eklenmemiştir.
                Elinizdeki dokümanları toplulukla paylaşarak arşivin gelişmesine katkıda bulunabilirsiniz.
              </p>
            </div>
            <a
              href="https://forms.gle/EK7BruSNk6yYxL8A8"
              target="_blank"
              rel="noopener noreferrer"
              class="notice-action-btn"
            >
              Not Yükle / Katkı Sağla ↗
            </a>
          </div>

          {/* Header with Title & Filter Controls */}
          <div class="catalog-header">
            <div>
              <h2>
                Ders Materyalleri
                <span class="catalog-count">(0 adet • 0 klasör)</span>
              </h2>
            </div>
            <div class="catalog-controls">
              <input
                type="text"
                placeholder="belgelerde ara..."
                class="search-input"
                disabled
              />
              <div class="toggle-chips">
                <button class="chip-btn" type="button" disabled>tümünü aç</button>
                <span>/</span>
                <button class="chip-btn" type="button" disabled>kapat</button>
              </div>
            </div>
          </div>

          {/* Two-Column Split Pane matching populated layout */}
          <div class="catalog-grid">
            {/* Left Column: Empty Accordion Pane */}
            <div class="accordion-pane empty-pane">
              <div class="empty-state-box">
                <span class="empty-state-icon">📑</span>
                <span class="empty-state-title">Henüz Doküman Yüklenmedi</span>
                <p class="empty-state-desc">
                  Bu ders için materyaller sisteme yüklendiğinde klasörler ve belgeler burada listelenecektir.
                </p>
              </div>
            </div>

            {/* Right Column: Sticky Inspector Pane */}
            <div class="inspector-pane empty-inspector">
              <div class="inspector-header">
                <span class="inspector-label">Canlı Önizleme</span>
                <span class="inspector-index">0 / 0</span>
              </div>

              <div class="thumb-wrapper empty-thumb-wrapper">
                <div class="empty-thumb-placeholder">
                  <span class="placeholder-icon">📄</span>
                  <span class="placeholder-text">Önizleme Yok</span>
                </div>
              </div>

              <div class="inspector-details">
                <div class="inspector-title empty-title">Belge Seçilmedi</div>
                <div class="inspector-meta">
                  <span class="meta-format">—</span>
                  <span>•</span>
                  <span>0 KB</span>
                </div>
                <div class="inspector-folder">📁 Henüz kategori yok</div>
              </div>

              <div class="inspector-action">
                <a
                  href="https://forms.gle/EK7BruSNk6yYxL8A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="download-btn contribution-btn"
                >
                  Not Yükle / Katkı Sağla ↗
                </a>
              </div>

              <div class="inspector-hint">
                Ders notlarınızı Not Yükleme Formu ile arşivimize kazandırabilirsiniz.
              </div>
            </div>
          </div>
        </section>
      )
    }

    const items: CatalogItem[] = matchingFiles.map((f, idx) => {
      const ext = (f.ext ?? f.path.split(".").pop() ?? "pdf").toUpperCase()
      const folder = extractFolder(f.path, normalizedCourseSlug)
      const folderLabel = formatFolderLabel(folder)
      const sizeStr = formatSize(f.size_kb ?? 0)
      const thumbPath = thumbMap.get(f.name.trim())
      const thumbUrl = thumbPath
        ? `https://cdn.jsdelivr.net/gh/c4kar/ktunDepo@main/${encodeURI(thumbPath)}`
        : `https://cdn.jsdelivr.net/gh/c4kar/ktunDepo@main/${encodeURI(f.path)}`
      const downloadUrl = `https://raw.githubusercontent.com/c4kar/ktunDepo/main/${encodeURI(f.path)}`
      const previewUrl = `https://cdn.jsdelivr.net/gh/c4kar/ktunDepo@main/${encodeURI(f.path)}`
      const dateStr = f.added_at ? f.added_at.slice(0, 10) : "Mart 2026"

      return {
        id: f.id ?? `mat-${idx}`,
        name: f.name,
        path: f.path,
        folder,
        folder_label: folderLabel,
        size: sizeStr,
        ext,
        thumb_url: thumbUrl,
        download_url: downloadUrl,
        preview_url: previewUrl,
        date: dateStr,
      }
    })

    // Group items by their real folder
    const folderGroupsMap = new Map<string, { id: string; folder: string; label: string; items: CatalogItem[] }>()

    for (const item of items) {
      const fKey = item.folder
      if (!folderGroupsMap.has(fKey)) {
        folderGroupsMap.set(fKey, {
          id: fKey === "" ? "root" : fKey.replace(/[^a-zA-Z0-9_-]/g, "_"),
          folder: fKey,
          label: item.folder_label,
          items: [],
        })
      }
      folderGroupsMap.get(fKey)!.items.push(item)
    }

    const groups = Array.from(folderGroupsMap.values()).sort((a, b) => {
      if (a.id === "root") return -1
      if (b.id === "root") return 1
      return a.label.localeCompare(b.label, "tr")
    })

    const initialItem = items[0]

    return (
      <section class="material-catalog" data-materials={JSON.stringify(items)}>
        {/* Header with Title & Filter Controls */}
        <div class="catalog-header">
          <div>
            <h2>
              Ders Materyalleri
              <span class="catalog-count">({items.length} adet &bull; {groups.length} klasör)</span>
            </h2>
          </div>

          <div class="catalog-controls">
            <input
              id="catalog-search-input"
              type="text"
              placeholder="belgelerde ara..."
              class="search-input"
            />
            <div class="toggle-chips">
              <button id="catalog-expand-all" class="chip-btn" type="button">tümünü aç</button>
              <span>/</span>
              <button id="catalog-collapse-all" class="chip-btn" type="button">kapat</button>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left Accordion, Right Live Sticky Inspector */}
        <div class="catalog-grid">
          {/* Left Column: Accordion Groups */}
          <div class="accordion-pane">
            {groups.map((g) => {
              if (g.items.length === 0) return null
              return (
                <div class="accordion-group" data-group={g.id}>
                  <button class="group-header" type="button">
                    <span class="group-title">
                      <span class="chevron">▾</span>
                      <span class="folder-icon">📁</span>
                      <span class="folder-name">{g.label}</span>
                    </span>
                    <span class="group-meta">
                      <span class="group-count">{g.items.length}</span> belge
                    </span>
                  </button>

                  <ul class="group-list">
                    {g.items.map((m) => {
                      const globalIdx = items.findIndex((x) => x.name === m.name)
                      const isFirst = globalIdx === 0
                      return (
                        <li
                          class={`mat-item ${isFirst ? "active" : ""}`}
                          data-index={globalIdx}
                          data-title={m.name}
                          data-folder={m.folder}
                        >
                          <div class="mat-info">
                            <span class="format-tag">[{m.ext.toLowerCase()}]</span>
                            <a
                              href={m.preview_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="mat-title"
                            >
                              {m.name}
                            </a>
                          </div>
                          <div class="mat-meta">
                            <span>{m.size}</span>
                            <span class="arrow">&rarr;</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Right Column: Sticky Inspector */}
          <div class="inspector-pane">
            <div class="inspector-header">
              <span class="inspector-label">Canlı Önizleme</span>
              <span id="catalog-split-index" class="inspector-index">
                1 / {items.length}
              </span>
            </div>

            <div class="thumb-wrapper">
              <img
                id="catalog-split-img"
                src={initialItem?.thumb_url ?? ""}
                alt={initialItem?.name ?? ""}
                loading="lazy"
              />
              <div id="catalog-split-loader" class="thumb-loader" style={{ display: "none" }}>
                yükleniyor...
              </div>
            </div>

            <div class="inspector-details">
              <div id="catalog-split-title" class="inspector-title">
                {initialItem?.name ?? ""}
              </div>
              <div class="inspector-meta">
                <span id="catalog-split-format" class="meta-format">
                  {initialItem?.ext.toLowerCase() ?? "pdf"}
                </span>
                <span>&bull;</span>
                <span id="catalog-split-size">{initialItem?.size ?? ""}</span>
              </div>
              <div id="catalog-split-folder" class="inspector-folder">
                📁 {initialItem?.folder_label ?? ""}
              </div>
            </div>

            <div class="inspector-action">
              <a
                id="catalog-split-download"
                href={initialItem?.download_url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                class="download-btn"
              >
                Belgeyi İndir
              </a>
            </div>

            <div class="inspector-hint">
              İncelemek için sol listedeki belgelere tıklayın veya üzerine gelin.
            </div>
          </div>
        </div>
      </section>
    )
  }

  MaterialCatalog.css = style
  MaterialCatalog.afterDOMLoaded = script
  return MaterialCatalog
}) satisfies QuartzComponentConstructor
