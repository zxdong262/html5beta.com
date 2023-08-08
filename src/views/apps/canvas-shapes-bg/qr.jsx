import { useEffect, useState } from 'react'
import {
  Input,
  Button
} from 'antd-mobile'

import Footer from '../../react/footer'
import Header from '../../react/header'
import CanvasShapesBg from 'canvas-shapes-bg'
import './cs.styl'

function App () {
  const [on, setOn] = useState(true)
  const [shape, setShape] = useState('bubble')
  const [text, setText] = useState('')
  const pool = ['star', 'bubble', 'heart', 'light', 'balloon']
  const len = pool.length
  function toggle () {
    if (on) {
      window.shapesInst.stop()
    } else {
      window.shapesInst.start()
    }
    setOn(!on)
  }
  function init () {
    const options = {
      shapeCount: 20, // how many shapes to draw, optional
      timer: 100, // render animation frame for every {timer} ms, optional
      step: 3, // animation step px, optional
      minSize: 50, // shape size min, optional
      maxSize: 150, // shape size max, optional
      shapesPool: [shape] // what shape you want draw, inside there are 'star', 'bubble', 'heart', 'light', 'balloon', optional, default is ['star']
    }
    const shapesInst = new CanvasShapesBg(
      document.getElementById('ca'),
      options
    )
    shapesInst.start()
    window.shapesInst = shapesInst
  }
  function change () {
    const index = pool.findIndex(d => d === shape)
    const next = (index + 1) % len
    const nextShape = pool[next]
    setShape(nextShape)
    const { shapesInst } = window
    shapesInst.shapesPool = [nextShape]
    shapesInst.stop()
    shapesInst.start()
  }
  function randomShapes () {
    const { shapesInst } = window
    shapesInst.shapesPool = pool
    shapesInst.stop()
    shapesInst.start()
  }
  function render () {
    const { shapesInst } = window
    shapesInst.stop()
    const arr = shapesInst.buildPosArrayFromText(text)
    shapesInst.moveTo(arr)

    shapesInst.stop()
    clearTimeout(shapesInst.timerHandle0)

    const tarArr = shapesInst.buildPosArrayFromText(text, {
      fontSize: 100,
      top: 300
    })
    shapesInst.shapeCount = tarArr.length
    shapesInst.minSize = 5
    shapesInst.maxSize = 5
    shapesInst.shapes = []
    shapesInst.start()

    setTimeout(startText, 1000)

    function startText () {
      clearTimeout(shapesInst.timerHandle)
      loop()
      function loop () {
        shapesInst.moveTo(tarArr)
        shapesInst.renderShapes()
        shapesInst.timerHandle0 = setTimeout(function () {
          if (shapesInst.arriveTarget) {
            return clearTimeout(shapesInst.timerHandle0)
          }
          loop()
        }, shapesInst.timer)
      }
    }
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <div className='pd2'>
      <Header />
      <h1 className='pd3y'>Canvas Shapes Background for webpage</h1>
      <p>
        <a
          href='https://github.com/zxdong262/canvas-shapes-bg'
          rel='noreferrer'
          target='_blank'
        >
          https://github.com/zxdong262/canvas-shapes-bg
        </a>
      </p>
      <div className='pd1y'>
        <span
          className='mg2r pointer mg2b'
          onClick={toggle}
        >
          {on ? 'Stop animation' : 'Start animation'}
        </span>
        <span
          onClick={change}
          className='pointer mg2b mg2r'
        >
          Change animation shapes
        </span>
        <span
          onClick={randomShapes}
          className='pointer mg2b mg2r'
        >
          Use random animation shapes
        </span>
      </div>
      <div className='pd1y'>
        <div className='pd1y pd3t'>
          <Input
            className='mg2r pointer borderb'
            onChange={setText}
            value={text}
            size='large'
            placeholder='Input text'
          />
        </div>
        <Button
          onClick={render}
          color='primary'
          disabled={!text}
        >
          Render
        </Button>
      </div>
      <Footer noAnimate />
    </div>
  )
}

export default App
