
import Navbar from './Layout/Navbar'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Work from './Pages/Work'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
function App() {
  

  return (
    <>
    <Router>
      <Navbar className="text-3xl font-bold underline"/>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
