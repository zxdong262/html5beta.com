/**
 * html5beta.com cloudflare worker entry
 * static files come from the ASSETS binding, dynamic routes go through router
 */
import { route } from './router.js'

export default {
  async fetch (request, env) {
    try {
      return await route(request, env)
    } catch (e) {
      console.error(e)
      return new Response('internal server error', {
        status: 500,
        headers: { 'content-type': 'text/plain; charset=utf-8' }
      })
    }
  }
}
