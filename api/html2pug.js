import html2pug from '@roudanio/html2pug'

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
    return res.status(400).send(e.messgage)
  }
  res.send({
    pug
  })
}
