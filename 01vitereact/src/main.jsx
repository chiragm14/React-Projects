import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = React.createElement(
  'a',
  {href:"https://www.google.com",target: "_blank"},
  'Click To Go to Google!'

)

createRoot(document.getElementById('root')).render( 
  
    reactElement
    // <React.StrictMode>
    // <App />
    // </React.StrictMode>

)
