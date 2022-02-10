import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Homecard.css'
import { Link } from 'react-router-dom'
function Card(props)
{
    const{src,link,title,subtitle,desc}=props.obj;
    return (
      <>
        <Link to={process.env.PUBLIC_URL + '/sortingalgo'}>
          <div
            className='blog-card spring-fever'
            style={{
              background: `url('${src}')`,
            }}
          >
            <div className='title-content'>
              <h3>{title}</h3>
              <hr />
              <div className='intro'>{subtitle}</div>
            </div>
            <div className='card-info'>{desc}</div>

            <div className='gradient-overlay'></div>
            <div className='color-overlay'></div>
          </div>
        </Link>
      </>
    )
}
export default Card;