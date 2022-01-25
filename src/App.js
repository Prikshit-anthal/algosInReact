import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TowerOfHanoi from './algos/TowerOfHanoi'
import Homepage from './Homepage'
import FCFS from './algos/FirstComeFirstServe'
import Nav from './Navbar'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
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
        </Routes>
      </Router>
      <div>
        <footer className='site-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-6 left_me'>
                <h6>About</h6>
                <p className='text-justify'>
                  We will help programmers build up concepts in different
                  programming languages that include C, C++, Java, HTML, CSS,
                  Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                </p>
              </div>

             
              <div className='col-sm-12 col-md-6 left_me'>
                <h6>Contact me</h6>
                <div className=' row-sm-6 row-xs-12'>
                  <ul className='social-icons'>
                    <li>
                      <a className='facebook' href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a className='twitter' href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a className='dribbble' href='#'>
                        <i className='fa fa-dribbble'></i>
                      </a>
                    </li>
                    <li>
                      <a className='linkedin' href='#'>
                        <i className='fa fa-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className='container'>
            <div className='row' style={{ justifyContent: 'center' }}>
              <div className='col-md-8 col-sm-6 col-xs-12'>
                <p className='copyright-text'>
                  Copyright &copy; 2022 All Rights Reserved by
                  <a href='#'> Prikshit</a>.
                </p>
              </div>
       
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
