import Home from './pages/Home'
import Favourite from './pages/Favourite'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar/navBar'
function App() {

  return (
    <>
      <div>      <NavBar />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />

          </Routes>
        </main>
      </div>

    </>
  )
}


export default App
  