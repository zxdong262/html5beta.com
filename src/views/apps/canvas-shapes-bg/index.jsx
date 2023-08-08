/**
 * entry file for install page
 */
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './qr.jsx'
import '../../../css/basic.styl'
import '../../../css/index.styl'

const root = createRoot(document.getElementById('container'))
root.render(<App />)
