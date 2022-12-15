import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './views/Dashboard/Dashboard'
import Detail from './views/Detail/Detail'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      {/* <Detail /> */}
    </div>
  )
}

export default App
