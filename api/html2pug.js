function html2pug (html) {
  // Remove newlines and extra spaces
  html = html.replace(/\n/g, '').trim()

  // Match tags like <div class="foo" id="bar">content</div>
  const tagRegex = /<(\w+)([^>]*)>(.*?)<\/\1>/g
  let match
  const pugLines = []

  while ((match = tagRegex.exec(html)) !== null) {
    const tag = match[1]
    const attrs = match[2].trim()
    const content = match[3].trim()

    let pugLine = tag

    // Parse attributes
    if (attrs) {
      // Match class and id
      const classMatch = attrs.match(/class="([^"]+)"/)
      if (classMatch) {
        pugLine += '.' + classMatch[1].split(' ').join('.')
      }
      const idMatch = attrs.match(/id="([^"]+)"/)
      if (idMatch) {
        pugLine += '#' + idMatch[1]
      }
      // Other attributes
      const otherAttrs = []
      attrs.replace(/(\w+)="([^"]+)"/g, (m, key, value) => {
        if (key !== 'class' && key !== 'id') {
          otherAttrs.push(`${key}="${value}"`)
        }
      })
      if (otherAttrs.length) {
        pugLine += `(${otherAttrs.join(', ')})`
      }
    }

    if (content) {
      pugLine += ` ${content}`
    }

    pugLines.push(pugLine)
  }

  return pugLines.join('\n')
}

export default async function handler (req, res) {
  const {
    method = ''
  } = req
  const arr = ['POST']
  if (!arr.includes(method)) {
    return res.status(404).send('404 not found')
  }
  let pug = ''
  try {
    pug = html2pug(req.body.html)
  } catch (e) {
    console.log(e)
    return res.status(400).send(e.message)
  }
  res.send({
    pug
  })
}
