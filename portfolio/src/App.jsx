
import Navbar from './Layout/Navbar'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Work from './Pages/Work'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Footer from './Layout/Footer'
function App() {
  

  return (
    <>
    <Router>
      <Navbar className="text-3xl font-bold underline"/>
      <div>
        <Routes class="bg-gray-800">
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
     <div style={{backgroundColor:"#001433"}}> <Footer /> </div>
      </Router>
    </>
  )
}

export default App
