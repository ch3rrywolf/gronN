import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import StorePovider from './context/storePovider.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <StorePovider>
    <>
    <App />
    <Toaster />
    </>
  </StorePovider>,
)
