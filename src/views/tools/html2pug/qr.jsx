import React, { useState } from 'react'
import {
  Button,
  TextArea,
  Toast
} from 'antd-mobile'
import './qr.styl'
import Footer from '../../react/footer'
import axios from 'axios'
import { host } from '../../react/common'

function App () {
  const [text, setText] = useState('')
  const [pug, setPug] = useState('')
  const [loading, setLoading] = useState(false)

  const convert = async () => {
    setLoading(true)
    const url = host + '/api/html2pug'
    const r = await axios.post(url, {
      html: text
    })
      .then(d => d.data.pug)
      .catch(err => {
        Toast.show({
          content: err.message
        })
      })
    setLoading(false)
    if (r) {
      setPug(r)
    }
  }

  const handleTextChange = (value) => {
    setText(value)
  }

  return (
    <div className='main pd2'>
      <h1>Html to pug</h1>
      <div className='pd1y'>
        <div className='pd1y'>Html:</div>
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
          loading={loading}
          disabled={!text}
        >
          Convert to pug
        </Button>
      </div>
      <div className='pd1y'>
        <div className='pd1y'>pug:</div>
        <TextArea
          placeholder=''
          value={pug}
          size='large'
          rows={10}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
