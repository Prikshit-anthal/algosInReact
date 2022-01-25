import React from 'react'
import { useEffect,useState } from 'react'
import Box from '../components/Box/Box'
import Line from '../components/Line/Line'
function TowerOfHanoi() {

  const [n,setN]=useState(10);
  function towerOfHanoi(n, from_rod, to_rod, aux_rod) {
    if (n == 0) {
      return
    }
    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod)

    console.log(
      'Move disk ' + n + ' from rod ' + from_rod + ' to rod ' + to_rod
    )
    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod)
  }
  useEffect(()=>{

  towerOfHanoi(n,'A','B','C');

  },[n])

  const changeValue=(e)=>{
  setN(e.target.value);
  }
  console.log(n);
  return (
    <>
      Tower of Hanoi
      {/* <Box width='4rem' height='1.5rem' colour="orange"/> */}
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '500px',
          backgroundColor: 'pink',
        }}
      >
        hi
         <Line  /> 
         <Line />
        
      </div>
      <input type="number" onChange={changeValue} placeholder="10"/>
    </>
  )
}

export default TowerOfHanoi
