import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ktünot",
    pageTitleSuffix: " | ktünot",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "goatcounter",
      websiteId: "c4kar"
    },
    locale: "tr-TR",
    baseUrl: "ktunot.net.tr",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Geist",
        body: "Inter",
        code: "Geist Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf6e3",       // Sıcak fildişi arka plan
          lightgray: "#f0ead2",   // Kenar çubukları ve hafif vurgular için krem
          gray: "#939f91",        // Pasif metinler ve yorum satırları için soluk yeşil-gri
          darkgray: "#5c6a72",    // İkincil metinler
          dark: "#3a413c",        // Ana metinler
          secondary: "#b52525",   // KTÜN Bordo ana vurgu rengi
          tertiary: "#8f1d1d",    // İkincil Bordo vurgusu
          highlight: "rgba(181, 37, 37, 0.12)", // Seçim arka planı (Bordo şeffaf)
          textHighlight: "#dfa00088",           // Metin arama/işaretleme için sıcak sarı
        },
        darkMode: {
          light: "#1a1d20",       // Koyu Gri arka plan
          lightgray: "#22262a",   // Kartlar ve paneller için bir ton açığı
          gray: "#9099a2",        // Pasif metinler ve yorum satırları
          darkgray: "#b0bac4",    // İkincil metinler
          dark: "#e3e7eb",        // Ana okuma metinleri
          secondary: "#e05a5a",   // KTÜN Bordo koyu tema vurgusu
          tertiary: "#f07575",    // Alternatif açık bordo
          highlight: "rgba(224, 90, 90, 0.15)", // Seçim arka planı (Bordo şeffaf)
          textHighlight: "#dbbc7f88",           // Metin arama/işaretleme için sıcak sarı
        },
      }
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
