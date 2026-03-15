import { execSync } from "node:child_process"
import { readFileSync, writeFileSync } from "node:fs"

const INDEX_PATH = new URL("../content/index.md", import.meta.url).pathname
const MAX_ITEMS = 5

const rawLog = execSync("git log --date=short --pretty=format:%ad|%s --since='30 days ago'", {
  encoding: "utf8",
}).trim()

const fallbackLog = () => {
  const fallback = execSync("git log --date=short --pretty=format:%ad|%s -n 10", {
    encoding: "utf8",
  }).trim()
  return fallback
}

const log = rawLog.length === 0 ? fallbackLog() : rawLog

const entries = log
  .split("\n")
  .map((line) => line.split("|"))
  .filter((parts) => parts.length >= 2)
  .map(([date, subject]) => ({ date, subject: subject.trim() }))
  .slice(0, MAX_ITEMS)

const classify = (subject) => {
  const lower = subject.toLowerCase()
  if (lower.includes("breaking") || subject.includes("!")) return "⚠️"
  if (lower.startsWith("feat")) return "🆕"
  if (lower.startsWith("fix")) return "🐛"
  if (lower.startsWith("refactor")) return "🔄"
  if (lower.startsWith("docs")) return "📝"
  if (lower.startsWith("chore") || lower.startsWith("ci") || lower.startsWith("build")) return "🔧"
  if (lower.includes("deps") || lower.includes("dependency")) return "📦"
  return "📝"
}

const formatItem = (entry) => {
  const emoji = classify(entry.subject)
  const clean = entry.subject
    .replace(/^feat:\s*/i, "")
    .replace(/^fix:\s*/i, "")
    .replace(/^docs:\s*/i, "")
    .replace(/^refactor:\s*/i, "")
    .replace(/^chore:\s*/i, "")
    .replace(/^ci:\s*/i, "")
    .replace(/^build:\s*/i, "")
    .trim()
  return `- ${entry.date} (${emoji}) ${clean}.`
}

const newsLines = entries.map(formatItem).join("\n")
const newsBlock = `## 📰 Haberler\n\n${newsLines}`

const content = readFileSync(INDEX_PATH, "utf8")
const sectionRegex = /## 📰 Haberler[\s\S]*?(?=\n## |\n$)/

let updated
if (sectionRegex.test(content)) {
  updated = content.replace(sectionRegex, newsBlock)
} else {
  const insertAfter = content.indexOf("\n\n", content.indexOf("---", 3))
  if (insertAfter === -1) {
    updated = `${content.trim()}\n\n${newsBlock}\n`
  } else {
    const before = content.slice(0, insertAfter + 2)
    const after = content.slice(insertAfter + 2)
    updated = `${before}${newsBlock}\n\n${after}`
  }
}

writeFileSync(INDEX_PATH, updated, "utf8")
