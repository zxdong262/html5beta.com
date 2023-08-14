import { useEffect } from 'react'

import Footer from '../../react/footer'
import Header from '../../react/header'
import UniverseBg from 'universe-bg'
import './cs.styl'

function App () {
  function init () {
    window.x = new UniverseBg({
      className: 'animate',
      // shootingStarCount: 150,
      // starCount: 1000,
      // starSize: 30,
      shootingStarSize: 0.4,
      shootingStarColor: 0x666666,
      starColor: 0x666666,
      bgColor: 0xffffff
      // starDistance: 80,
      // shootingStarDistance: 40
    })
  }
  useEffect(() => {
    init()
  }, [])
  const code1 = `import UniverseBg from 'universe-bg'

const inst = new UniverseBg({
  id: ''
  className:  '',
  starSize: 0.1,
  shootingStarSize: 0.2,
  starCount: 10000,
  shootingStarCount: 30,
  starDistance: 100,
  shootingStarDistance: 50,
  starColor: 0xffffff,
  shootingStarColor: 0xffffff,
  bgColor: 0x000000
})
  `
  const code2 = `<script src='//www.unpkg.com/three@0.155.0/build/three.min.js'></script>
<script src='//unpkg.com/universe-bg/dist/universe-bg.min.js'></script>
  `
  return (
    <div className='pd2'>
      <Header />
      <h1 className='pd3y'>Universe background</h1>
      <p>a simple universe bg plugin build with three.js</p>
      <p>
        <a
          href='https://github.com/zxdong262/universe'
          rel='noreferrer'
          target='_blank'
        >
          https://github.com/zxdong262/universe
        </a>
      </p>
      <h2>Install</h2>
      <pre>
        <code>npm i universe-bg</code>
      </pre>
      <h2>Use</h2>
      <pre>
        <code>
          {code1}
        </code>
      </pre>
      <h2>use cdn</h2>
      <pre>
        <code>
          {code2}
        </code>
      </pre>
      <h2>LICENCE</h2>
      <p>MIT</p>

      <Footer noAnimate />
    </div>
  )
}

export default App
