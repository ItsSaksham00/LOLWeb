import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Routes> 
          <Route to='/' element={<Layout />}>
    
              <Route index  element={<Home />} />
              <Route path='/AboutMe' element={<About />} />
              <Route path='/Portfolio' element={<Portfolio />} />
              <Route path='/ContactMe' element={<Contact />} />    
          
          </Route>
      </Routes>
    </>
  )
}

export default App;
