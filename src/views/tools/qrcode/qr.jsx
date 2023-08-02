import React, { useState } from 'react'
import { Button, Input, Space, Toast } from 'antd-mobile'

function App () {
  const [text, setText] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  const generateQRCode = () => {
    if (text.trim() === '') {
      Toast.show({
        content: 'Please enter some text to generate a QR code.'
      })
      return
    }
    const { QRious } = window
    const qr = new QRious({
      element: document.getElementById('qrcode'),
      value: text,
      size: 200
    })

    setQrCodeUrl(qr.toDataURL())
  }

  const handleTextChange = (value) => {
    setText(value)
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
    <div>
      <h1>QR Code Generator</h1>
      <Input
        placeholder='Enter text'
        value={text}
        onChange={handleTextChange}
      />
      <Space />
      <Button type='primary' onClick={generateQRCode}>
        Generate QR Code
      </Button>
      <Space />
      <div id='qrcode' />
      <Space />
      {qrCodeUrl && (
        <Button type='primary' onClick={handleDownload}>
          Download QR Code
        </Button>
      )}
    </div>
  )
}

export default App
