#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

const repoRoot = process.cwd()
const picturesDir = path.join(repoRoot, 'pictures')
const publicImagesDir = path.join(repoRoot, 'public', 'images')

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function copyImages() {
  ensureDir(publicImagesDir)
  const files = fs.existsSync(picturesDir) ? fs.readdirSync(picturesDir) : []
  const allowed = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp'])
  const index = []

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (!allowed.has(ext)) continue
    const src = path.join(picturesDir, file)
    const dest = path.join(publicImagesDir, file)
    fs.copyFileSync(src, dest)
    index.push({ src: `/images/${file}`, alt: file.replace(/[-_]/g, ' ').replace(ext, '') })
  }

  fs.writeFileSync(path.join(publicImagesDir, 'index.json'), JSON.stringify(index, null, 2))
}

copyImages()
console.log(`Synced images: ${publicImagesDir}`)


