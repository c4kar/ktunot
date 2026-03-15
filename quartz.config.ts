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
          dark: "#3a413c",        // Ana metinler için çok koyu orman yeşili/füme
          secondary: "#8da101",   // Everforest ana vurgu yeşili
          tertiary: "#3a94c5",    // Alternatif vurgu için Everforest mavisi
          highlight: "rgba(141, 161, 1, 0.15)", // Seçim arka planı (Yeşilin şeffaf hali)
          textHighlight: "#dfa00088",           // Metin arama/işaretleme için sıcak sarı
        },
        darkMode: {
          light: "#1e2326",       // Derin çam yeşili arka plan (Hard Dark)
          lightgray: "#272e33",   // Kartlar ve kenar çubukları için bir ton açığı
          gray: "#859289",        // Pasif metinler ve yorum satırları
          darkgray: "#9da9a0",    // İkincil metinler
          dark: "#d3c6aa",        // Ana metinler için sıcak fildişi
          secondary: "#a7c080",   // Everforest koyu tema vurgu yeşili
          tertiary: "#7fbbb3",    // Alternatif vurgu için Everforest su yeşili/mavisi
          highlight: "rgba(167, 192, 128, 0.15)", // Seçim arka planı (Yeşilin şeffaf hali)
          textHighlight: "#dbbc7f88",             // Metin arama/işaretleme için sıcak sarı
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
