import {  Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

function SlideArrayInputTag({tagToSlideRef}) {
  return (
    <span className='addArray realtive  flex '>
      <Button
        style={{ height: '100%', padding: '6px' }}
        onClick={(e) => {
          var buttonRef = document.getElementById('rotateDown')

          buttonRef.classList.toggle('active')

          var ref = tagToSlideRef.current
          ref.className === 'visibleToSlide'
            ? (ref.className = 'hiddenToSlide')
            : (ref.className = 'visibleToSlide')
        }}
      >
        {' '}
        <LeftOutlined
          className='text-2xl'
          id='rotateDown'
          style={{ marginLeft: '0' }}
        />
      </Button>
    </span>
  )
}

export default SlideArrayInputTag;