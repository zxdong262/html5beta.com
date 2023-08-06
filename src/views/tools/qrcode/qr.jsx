import React, { useState } from 'react'
import {
  Button,
  Input,
  Stepper
} from 'antd-mobile'
import Footer from '../../react/footer'
import Header from '../../react/header'
import './qr.styl'

function App () {
  const [text, setText] = useState('')
  const [size, setSize] = useState(200)
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQRCode = () => {
    const { QRious } = window
    const qr = new QRious({
      element: document.getElementById('qrcode'),
      value: text,
      size
    })

    setQrCodeUrl(qr.toDataURL())
  }

  const handleTextChange = (value) => {
    setText(value)
  }
  const handleSizeChange = (value) => {
    setSize(value)
  }

  const handleDownload = () => {
    if (!qrCodeUrl) {
      window.alert('Please generate a QR code first.')
      return
    }

    const downloadLink = document.createElement('a')
    downloadLink.href = qrCodeUrl
    downloadLink.download = 'qrcode.png'
    downloadLink.click()
  }

  return (
    <div className='pd2'>
      <Header />
      <h1>QR Code Generator</h1>
      <div className='pd1y'>
        <div className='pd1y'>Text:</div>
        <Input
          placeholder='Enter text'
          value={text}
          size='large'
          onChange={handleTextChange}
        />
      </div>
      <div className='pd1y'>
        <div className='pd1y'>Size:</div>
        <Stepper
          placeholder='Enter Size'
          value={size}
          size='large'
          onChange={handleSizeChange}
        />
      </div>
      <div className='pd1y'>
        <Button
          color='primary'
          onClick={generateQRCode}
          className='mg1r mg1b'
          disabled={!text}
        >
          Generate QR Code
        </Button>
        {qrCodeUrl && (
          <Button
            color='success'
            onClick={handleDownload}
            className='mg1b'
          >
            Download QR Code
          </Button>
        )}
      </div>
      <div className='pd1y'>
        <canvas
          id='qrcode'
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
