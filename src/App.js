import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TowerOfHanoi from './algos/TowerOfHanoi'
import Homepage from './Homepage'

function App() {
  document.title = 'Ds-Algos'
  return (
    <>
    
      <Router>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/towerOfHanoi' element={<TowerOfHanoi />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
