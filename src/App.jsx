// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Body from './Body'
import Terms from './Terms'
import Solutions from './Solutions'
import ImageSlide from './ImageSlide'
import Products from './Products'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/terms' element={<Terms />}></Route>
        <Route path='/solutions' element={<Solutions />} />
        <Route path='/image' element={<ImageSlide />} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>
  )
}

export default App