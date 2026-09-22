#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { execSync } from "child_process"

const localDepoPath = path.resolve(process.cwd(), "../ktunDepo/manifest.json")
const targetPath = path.resolve(process.cwd(), "./manifest.json")
const remoteUrl = "https://raw.githubusercontent.com/c4kar/ktunDepo/main/manifest.json"

console.log("[sync-manifest] Checking for local ktunDepo manifest...")
if (fs.existsSync(localDepoPath)) {
  fs.copyFileSync(localDepoPath, targetPath)
  const data = JSON.parse(fs.readFileSync(targetPath, "utf-8"))
  console.log(`[sync-manifest] Synced ${data.files?.length || 0} items from local ../ktunDepo/manifest.json`)
} else {
  console.log(`[sync-manifest] Local ktunDepo not found, fetching from remote: ${remoteUrl}`)
  try {
    execSync(`curl -sL "${remoteUrl}" -o "${targetPath}"`, { stdio: "inherit" })
    const data = JSON.parse(fs.readFileSync(targetPath, "utf-8"))
    console.log(`[sync-manifest] Successfully downloaded remote manifest (${data.files?.length || 0} items)`)
  } catch (err) {
    console.error("[sync-manifest] Error downloading manifest:", err)
    process.exit(1)
  }
}
