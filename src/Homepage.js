import React from "react";
import { Link } from 'react-router-dom'
import Homecard from './components/Homecard'
import Homegrid from "./components/Homegrid";
function Homepage()
{
    return (
      <>
        <div className='home_header'>
          Visualize algorithms for a better understanding
        </div>
        <Homegrid/>
        <ul>
          <li>
            <Link to='/towerOfHanoi'>Tower of Hanoi</Link>
          </li>

          <li>
            <Link to='/FCFS'>First Come First Serve</Link>
          </li>
        </ul>
      </>
    )
}

export default Homepage