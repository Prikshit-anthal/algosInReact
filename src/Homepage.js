import React from "react";
import { Link } from 'react-router-dom'

function Homepage()
{
    return (
      <>
        <h1>Algorithms available</h1>

        <ul>
          <li>
            <Link to='/towerOfHanoi'>Tower of Hanoi</Link>
          </li>
        </ul>
      </>
    )
}

export default Homepage