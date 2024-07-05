import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  const [gmail, setGmail] = useState()

  return (
    <div>
      <Outlet context={{ gmail, setGmail }} />
    </div>
  )
}

export default App
