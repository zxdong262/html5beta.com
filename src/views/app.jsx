import Footer from './react/footer'
import { host } from './react/common'

function App () {
  const links = [
    {
      href: 'http://github.com/zxdong262',
      target: '_blank',
      rel: 'noreferrer',
      className: 'mg3r',
      text: 'GitHub'
    },
    {
      href: host + '/page/timeline.html',
      target: '_blank',
      rel: 'noreferrer',
      text: 'Resume'
    }
  ]
  return (
    <div className='pd2'>
      <Footer
        links={links}
      />
    </div>
  )
}

export default App
