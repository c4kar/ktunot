#!/usr/bin/env node
import fs from "fs"
import path from "path"

const SEMESTER_TITLES = {
  1: "1. Yarıyıl (1. Sınıf Güz)",
  2: "2. Yarıyıl (1. Sınıf Bahar)",
  3: "3. Yarıyıl (2. Sınıf Güz)",
  4: "4. Yarıyıl (2. Sınıf Bahar)",
  5: "5. Yarıyıl (3. Sınıf Güz)",
  6: "6. Yarıyıl (3. Sınıf Bahar)",
  7: "7. Yarıyıl (4. Sınıf Güz)",
  8: "8. Yarıyıl (4. Sınıf Bahar)",
}

let createdCount = 0

for (let i = 1; i <= 8; i++) {
  const sem = `EEM-${i}`
  const semFile = `./content/EEM/${sem}/index.md`
  if (!fs.existsSync(semFile)) continue

  const content = fs.readFileSync(semFile, "utf8")
  const regex = /<a href="\.\/([^"]+)\/" class="donem-card">[\s\S]*?<span class="donem-title">([^<]+)<\/span>/g
  let match

  while ((match = regex.exec(content)) !== null) {
    const slug = match[1].replace(/^\.\//, "").replace(/\/$/, "")
    const title = match[2].trim()
    const courseDir = `./content/EEM/${sem}/${slug}`
    const courseIndex = path.join(courseDir, "index.md")

    if (!fs.existsSync(courseIndex)) {
      if (!fs.existsSync(courseDir)) {
        fs.mkdirSync(courseDir, { recursive: true })
      }

      const mdContent = `---
title: "${title}"
course_id: "${slug}"
tags:
  - eem
  - eem-${i}
---

Konya Teknik Üniversitesi Elektrik-Elektronik Mühendisliği ${SEMESTER_TITLES[i]} ${title} dersidir.

> [!info] Ders Bilgilendirmesi
> Bu derse ait dökümanlar ve çıkmış sınavlar sisteme eklendikçe aşağıdaki materyal kataloğunda listelenecektir.
`
      fs.writeFileSync(courseIndex, mdContent, "utf8")
      console.log(`Created: ${courseIndex} (${title})`)
      createdCount++
    }
  }
}

console.log(`\nSuccessfully scaffolded ${createdCount} missing course pages!`)
