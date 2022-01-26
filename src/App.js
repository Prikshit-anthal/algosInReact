import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'

import TowerOfHanoi from './algos/TowerOfHanoi'
import Homepage from './Homepage'
import FCFS from './algos/FirstComeFirstServe'
import Nav from './Navbar'
import Footer from "./Footer"
import Sortingalgo from "./algos/sortingalgo/Sortingalgo"

function App() {
  document.title = 'Ds-Algos'
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/towerOfHanoi' element={<TowerOfHanoi />} />
          <Route path='/FCFS' element={<FCFS />} />
          <Route path='/sortingalgo' element={<Sortingalgo/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
