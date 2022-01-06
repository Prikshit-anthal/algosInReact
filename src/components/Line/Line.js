import React from 'react'
import { useEffect, useState } from 'react'

function Line(proops) {
  useEffect(() => {
    const {
      state = 'vertical',
      length = '200px',
      colour = 'black',
      z_index = '0',
    } = proops
    var Line = document.getElementById('line')
    Line.style.position = 'absolute'
    //  Line.style.zIndex = 0
    // not necessay to use z index
    //relative parent hona chaiye aur absolute child tbhi kaam krta hai

    if (state == 'vertical') {
      Line.style.borderRight = `5px solid ${colour}`
      Line.style.height = length
      Line.style.width = '0'
      Line.style.right = '50%'
    } else if (state == 'horizontal') {
      Line.style.borderTop = `5px solid ${colour}`
      Line.style.width = length
      Line.style.height = '0'
      Line.style.top = '50%'
    }
  }, [])
  return (
    <>
      <div id='line'></div>
    </>
  )
}

export default Line
