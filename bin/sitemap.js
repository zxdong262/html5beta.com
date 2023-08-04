// create sitemap
import fs from 'fs/promises'
import { createSitemap } from 'sitemaps'
import { targets, cwd } from './common.js'
import { resolve } from 'path'
import dayjs from 'dayjs'
import data from './data/index.js'

const fmt = 'YYYY-MM-DD'

async function build (conf) {
  const from = resolve(cwd, conf.to)
  const list = await fs.readdir(from)
  const arr = []
  const p1 = conf.to.replace('public/', '')
  for (const f of list) {
    const ff = resolve(from, f)
    const s = await fs.stat(ff)
    arr.push({
      loc: data.host + '/' + p1 + '/' + f + '/',
      lastmod: dayjs(s.mtime).format(fmt),
      changefreq: 'daily',
      priority: 0.6
    })
  }
  return arr
}

async function buildPages () {
  const to = 'public/page'
  const from = resolve(cwd, to)
  const list = await fs.readdir(from)
  const arr = []
  const p1 = to.replace('public/', '')
  for (const f of list) {
    const ff = resolve(from, f)
    const s = await fs.stat(ff)
    arr.push({
      loc: data.host + '/' + p1 + '/' + f,
      lastmod: dayjs(s.mtime).format(fmt),
      changefreq: 'daily',
      priority: 0.6
    })
  }
  return arr
}

async function buildSiteMap (targets) {
  const urls = []
  const index = resolve(
    cwd, 'public/index.html'
  )
  const state = await fs.stat(index)
  urls.push({
    loc: data.host,
    lastmod: dayjs(state.mtime).format(fmt),
    changefreq: 'daily',
    priority: 1
  })
  const arr = await buildPages()
  urls.push(...arr)
  for (const tar of targets) {
    const list = await build(tar)
    urls.push(...list)
  }

  createSitemap({
    filePath: resolve(cwd, 'public/sitemap.xml'),
    urls
  })
}

buildSiteMap(targets)
