import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import TowerOfHanoi from './algos/TowerOfHanoi'
import Homepage from './Homepage'
import FCFS from './algos/FirstComeFirstServe'
import Nav from './Navbar'
function App() {
  document.title = 'Ds-Algos'
  return (
    <>
    <Nav/>
      <Router>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/towerOfHanoi' element={<TowerOfHanoi />} />
          <Route path='/FCFS'element={<FCFS/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
