import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Portfolio from './components/maincomponents/Portfolio.jsx'
import './index.css'
import CV from './components/alternative/CV.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CV />
  </React.StrictMode>,
)
