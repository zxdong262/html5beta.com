import React, { useState } from 'react'
import {
  Button,
  TextArea,
  Toast
} from 'antd-mobile'

import Footer from '../../react/footer'
import Header from '../../react/header'
import { copyTextToClipboard } from '../../react/copy'

function App () {
  const [text, setText] = useState('')
  const [stylus, setStylus] = useState('')

  const convert = async () => {
    try {
      const converter = new window.Css2Stylus.Converter(text)
      converter.processCss()
      // output
      const out = converter.getStylus()
      setStylus(out)
    } catch (err) {
      console.log(err)
      Toast.show({
        content: err.message
      })
    }
  }

  const handleTextChange = (value) => {
    setText(value)
  }

  function copy () {
    copyTextToClipboard(stylus, 'stylus')
  }

  return (
    <div className='main pd2'>
      <Header />
      <h1>Css to Stylus</h1>
      <div className='pd1y'>
        <div className='pd1y'>Css:</div>
        <TextArea
          placeholder='Enter html'
          value={text}
          size='large'
          rows={10}
          onChange={handleTextChange}
        />
      </div>
      <div className='pd1y'>
        <Button
          color='primary'
          onClick={convert}
          className='mg1r mg1b'
          disabled={!text}
        >
          Convert to stylus
        </Button>
      </div>
      <div className='pd1y'>
        <div className='pd1y fix'>
          <b className='fleft'>Stylus:</b>
          <Button
            color='default'
            size='small'
            className={stylus ? 'fright' : 'hide'}
            onClick={copy}
          >
            Copy To Clipboard
          </Button>
        </div>
        <TextArea
          placeholder=''
          id='stylus'
          value={stylus}
          size='large'
          rows={10}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
