import Navbar from './components/Navbar'
import Dashboard from './views/Dashboard/Dashboard'
import Detail from './views/Detail/Detail'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route index path='/' element={<Detail />} /> */}
        <Route index path='/' element={<Dashboard />} />
        <Route path='/detail/:slug' element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
