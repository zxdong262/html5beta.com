/**
 * request router for the worker
 * static files are served by the assets binding, this only handles
 * the dynamic endpoints and the html fallbacks
 */
import { handleHtml2Pug } from './html2pug.js'
// bundled at build time from public/404.html (generated from src/views/404.pug).
// embedded rather than fetched via ASSETS because assets html_handling rewrites
// /404.html to /404, which would resolve to nothing for a flat file.
import notFoundHtml from '../../public/404.html'

const notFound = () =>
  new Response(notFoundHtml, {
    status: 404,
    headers: { 'content-type': 'text/html; charset=utf-8' }
  })

export async function route (request, env) {
  const url = new URL(request.url)

  if (url.pathname === '/api/html2pug') {
    return handleHtml2Pug(request)
  }

  // bare /tools or /apps style paths should resolve to the home page listing
  if (/^\/(tools|apps)\/?$/.test(url.pathname)) {
    return env.ASSETS.fetch(
      new Request(new URL('/index.html', url.origin), request)
    )
  }

  return notFound()
}
