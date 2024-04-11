import React from 'react'
import Header from './util/Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-slate-100 h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App