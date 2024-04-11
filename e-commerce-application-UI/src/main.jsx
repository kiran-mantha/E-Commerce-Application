import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './routes/AllRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <AllRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
)
