import React from "react";
import './Footer.css'

function Footer()
{
    return (
      <>
        <div>
          <footer className='site-footer'>
            <div className='container'>
              <div className='row'>
                <div className='About'>
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
                        <a
                          className='instagram'
                          href='https://instagram.com/prikshit_anthal?utm_medium=copy_link'
                        >
                          <i className='fa fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className='linkedin'
                          href='https://www.linkedin.com/in/prikshit-anthal-485ab1206/'
                        >
                          <i className='fa fa-linkedin'></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://github.com/Prikshit-anthal'
                          className='github'
                        >
                          <i className='fa fa-github'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            <div className='container  copyright'>
              <div className='row' style={{ justifyContent: 'center' }}>
                <div className='col-md-8 col-sm-6 col-xs-12'>
                  <p className='copyright-text'>
                    Copyright &copy; 2022 All Rights Reserved by
                    <a href='https://github.com/Prikshit-anthal'> Prikshit</a>.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    )
}

export default Footer;