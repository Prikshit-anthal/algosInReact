import React from 'react'
import Box from '../components/Box/Box'
import Line from '../components/Line/Line'
function TowerOfHanoi() {
  return (
    <>
      Tower of Hanoi
      <Box width='4rem' height='1.5rem' colour="orange"/>
      <div
        style={{
          position: 'relative',
          width: '200px',
          height: '500px',
          backgroundColor: 'pink',
        }}
      >
        
        <Line  />
      </div>
    </>
  )
}

export default TowerOfHanoi
