/**
 * html -> pug converter, ported from the old vercel api/html2pug.js
 * kept dependency free so it runs on the workers runtime
 */

const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr'
])

function parseAttrs (attrs) {
  const result = {
    classes: [],
    id: '',
    others: []
  }
  if (!attrs) {
    return result
  }
  attrs.replace(/([\w-]+)\s*=\s*"([^"]*)"/g, (m, key, value) => {
    if (key === 'class') {
      value.split(/\s+/).filter(Boolean).forEach(c => result.classes.push(c))
    } else if (key === 'id') {
      result.id = value
    } else {
      result.others.push({ key, value })
    }
  })
  return result
}

export function html2pug (html) {
  if (typeof html !== 'string') {
    throw new Error('html is required')
  }
  html = html.replace(/\n/g, '').trim()
  if (!html) {
    return ''
  }

  const tagRegex = /<(\w+)([^>]*)>(.*?)<\/\1>/g
  const pugLines = []
  let match

  while ((match = tagRegex.exec(html)) !== null) {
    const tag = match[1]
    const attrs = match[2].trim()
    const content = match[3].trim()

    let pugLine = tag
    const parsed = parseAttrs(attrs)

    parsed.classes.forEach(c => {
      pugLine += '.' + c
    })
    if (parsed.id) {
      pugLine += '#' + parsed.id
    }
    if (parsed.others.length) {
      pugLine += `(${parsed.others.map(o => `${o.key}="${o.value}"`).join(', ')})`
    }
    if (content) {
      pugLine += ` ${content}`
    }

    pugLines.push(pugLine)

    // self closing tags never match the pair regex, keep them as plain tags
    if (VOID_TAGS.has(tag)) {
      continue
    }
  }

  return pugLines.join('\n')
}

/**
 * POST /api/html2pug
 */
export async function handleHtml2Pug (request) {
  if (request.method !== 'POST') {
    return new Response('404 not found', {
      status: 404,
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    })
  }

  let pug = ''
  try {
    const body = await request.json()
    pug = html2pug(body.html)
  } catch (e) {
    return new Response(e.message, {
      status: 400,
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    })
  }

  return new Response(JSON.stringify({ pug }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'access-control-allow-origin': '*'
    }
  })
}
