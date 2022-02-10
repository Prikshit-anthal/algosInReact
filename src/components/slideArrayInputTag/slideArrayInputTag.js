import {  Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import './slideArrayInputTag.css'

function SlideArrayInputTag({tagToSlideRef}) {
  return (
    <span className='addArray realtive  flex '>
      <Button
        style={{ height: '100%', padding: '6px' }}
        onClick={(e) => {
          var buttonRef = e.target.parentNode.parentNode.parentNode.querySelector('.rotateDown')
          //button of antD sometime gives e as inner icon ref
         
          buttonRef.classList.toggle('active')

          var ref = tagToSlideRef.current
          ref.className === 'visibleToSlide'
            ? (ref.className = 'hiddenToSlide')
            : (ref.className = 'visibleToSlide')
        }}
      >
        {' '}
        <LeftOutlined
          className='text-2xl rotateDown'
          style={{ marginLeft: '0',
         transition: 'all .5s linear',
    }}
        />
      </Button>
    </span>
  )
}

export default SlideArrayInputTag;