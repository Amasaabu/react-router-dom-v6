import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Features from './example1/Features/Features'
import Features1 from './example1/Features/Features1/Features1'
import Home from './example1/Home/Home'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<Home/>}/>
        <Route path='features' element={<Features/>}>
          <Route path='features1' element={<Features1/>}/>
        </Route>
        
    </Routes>
    </BrowserRouter>
    
 
  )
}

export default App
