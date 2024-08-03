// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Body from './Body'
import Terms from './Terms'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/terms' element={<Terms/>}></Route>
      </Routes>
    </Router>
  )
}

export default App