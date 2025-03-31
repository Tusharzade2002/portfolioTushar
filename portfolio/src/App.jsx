
import Navbar from './Layout/Navbar'
import './App.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
function App() {
  

  return (
    <>
    <Router>
      <Navbar className="text-3xl font-bold underline"/>
      <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
