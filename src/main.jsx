import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/tailwind.css'
import './styles/theme.css'
import './styles/global.css'
import './index.css'
import App from './App.jsx'

// App bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)