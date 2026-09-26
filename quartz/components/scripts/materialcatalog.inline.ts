interface CatalogMaterial {
  name: string
  stem?: string
  path: string
  folder?: string
  folder_label?: string
  size: string
  ext: string
  thumb_url: string
  download_url: string
  preview_url: string
  date?: string
}

document.addEventListener("nav", () => {
  const root = document.querySelector(".material-catalog") as HTMLElement
  if (!root) return

  const dataAttr = root.dataset.materials
  if (!dataAttr) return

  let materials: CatalogMaterial[] = []
  try {
    materials = JSON.parse(dataAttr)
  } catch (e) {
    console.error("Failed to parse material catalog data:", e)
    return
  }

  if (materials.length === 0) return

  let searchQuery = ""

  // Elements
  const splitImg = root.querySelector("#catalog-split-img") as HTMLImageElement
  const splitLoader = root.querySelector("#catalog-split-loader") as HTMLElement
  const splitTitle = root.querySelector("#catalog-split-title") as HTMLElement
  const splitFormat = root.querySelector("#catalog-split-format") as HTMLElement
  const splitSize = root.querySelector("#catalog-split-size") as HTMLElement
  const splitFolder = root.querySelector("#catalog-split-folder") as HTMLElement
  const splitDownload = root.querySelector("#catalog-split-download") as HTMLAnchorElement
  const splitIndex = root.querySelector("#catalog-split-index") as HTMLElement
  const searchInput = root.querySelector("#catalog-search-input") as HTMLInputElement
  const expandAllBtn = root.querySelector("#catalog-expand-all")
  const collapseAllBtn = root.querySelector("#catalog-collapse-all")
  const accordionHeaders = root.querySelectorAll(".group-header")

  function updateInspector(mat: CatalogMaterial, idx: number) {
    if (!mat) return
    if (splitTitle) splitTitle.textContent = mat.name
    if (splitSize) splitSize.textContent = mat.size
    if (splitFormat) splitFormat.textContent = mat.ext.toLowerCase()
    if (splitFolder) splitFolder.textContent = `📁 ${mat.folder_label || "Genel"}`
    if (splitDownload) splitDownload.href = mat.download_url
    if (splitIndex) splitIndex.textContent = `Belge ${idx + 1} / ${materials.length}`

    if (splitImg) {
      if (splitLoader) splitLoader.style.display = "flex"
      splitImg.style.opacity = "0.4"
      splitImg.src = mat.thumb_url
      splitImg.onload = () => {
        if (splitLoader) splitLoader.style.display = "none"
        splitImg.style.opacity = "1"
      }
      splitImg.onerror = () => {
        if (splitLoader) splitLoader.style.display = "none"
        splitImg.style.opacity = "1"
      }
    }
  }

  function filterItems() {
    const query = searchQuery.trim().toLowerCase()
    const groups = root.querySelectorAll(".accordion-group")

    groups.forEach((groupEl) => {
      const rows = groupEl.querySelectorAll(".mat-item")
      let visibleCount = 0

      rows.forEach((rowEl) => {
        const item = rowEl as HTMLElement
        const title = item.dataset.title?.toLowerCase() ?? ""
        const folder = item.dataset.folder?.toLowerCase() ?? ""

        const matchesSearch = !query || title.includes(query) || folder.includes(query)

        if (matchesSearch) {
          item.style.display = "flex"
          visibleCount++
        } else {
          item.style.display = "none"
        }
      })

      const countBadge = groupEl.querySelector(".group-count")
      if (countBadge) countBadge.textContent = `${visibleCount}`

      const listEl = groupEl.querySelector(".group-list") as HTMLElement
      const chevron = groupEl.querySelector(".chevron")
      if (listEl) {
        if (visibleCount === 0 && query) {
          ;(groupEl as HTMLElement).style.display = "none"
        } else {
          ;(groupEl as HTMLElement).style.display = "block"
          // If query is active and there are matches, expand the folder!
          if (query && visibleCount > 0) {
            listEl.classList.remove("hidden")
            if (chevron) chevron.textContent = "▾"
          }
        }
      }
    })
  }

  // Row selection handler
  const rows = root.querySelectorAll(".mat-item")
  rows.forEach((rowEl) => {
    const handleSelect = () => {
      rows.forEach((r) => r.classList.remove("active"))
      rowEl.classList.add("active")
      const idx = parseInt((rowEl as HTMLElement).dataset.index ?? "0", 10)
      if (materials[idx]) {
        updateInspector(materials[idx], idx)
      }
    }

    rowEl.addEventListener("mouseenter", handleSelect)
    rowEl.addEventListener("click", handleSelect)
    window.addCleanup(() => {
      rowEl.removeEventListener("mouseenter", handleSelect)
      rowEl.removeEventListener("click", handleSelect)
    })
  })

  // Accordion Toggle handlers
  accordionHeaders.forEach((btn) => {
    const toggle = () => {
      const parent = btn.closest(".accordion-group")
      if (!parent) return
      const list = parent.querySelector(".group-list")
      const chevron = parent.querySelector(".chevron")
      if (list) {
        const isHidden = list.classList.toggle("hidden")
        if (chevron) chevron.textContent = isHidden ? "▸" : "▾"
      }
    }
    btn.addEventListener("click", toggle)
    window.addCleanup(() => btn.removeEventListener("click", toggle))
  })

  // Expand All / Collapse All handlers
  if (expandAllBtn) {
    const handleExpandAll = () => {
      const groups = root.querySelectorAll(".accordion-group")
      groups.forEach((g) => {
        const list = g.querySelector(".group-list")
        const chevron = g.querySelector(".chevron")
        if (list) list.classList.remove("hidden")
        if (chevron) chevron.textContent = "▾"
      })
    }
    expandAllBtn.addEventListener("click", handleExpandAll)
    window.addCleanup(() => expandAllBtn.removeEventListener("click", handleExpandAll))
  }

  if (collapseAllBtn) {
    const handleCollapseAll = () => {
      const groups = root.querySelectorAll(".accordion-group")
      groups.forEach((g) => {
        const list = g.querySelector(".group-list")
        const chevron = g.querySelector(".chevron")
        if (list) list.classList.add("hidden")
        if (chevron) chevron.textContent = "▸"
      })
    }
    collapseAllBtn.addEventListener("click", handleCollapseAll)
    window.addCleanup(() => collapseAllBtn.removeEventListener("click", handleCollapseAll))
  }

  // Search input handler
  if (searchInput) {
    const handleInput = (e: Event) => {
      searchQuery = (e.target as HTMLInputElement).value
      filterItems()
    }
    searchInput.addEventListener("input", handleInput)
    window.addCleanup(() => searchInput.removeEventListener("input", handleInput))
  }

  // Initial update
  if (materials.length > 0) {
    updateInspector(materials[0], 0)
  }
})
