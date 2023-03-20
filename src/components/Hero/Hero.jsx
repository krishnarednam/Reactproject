import React from 'react';
import './Hero.css';
import img from '../images/Vector.png';

function Hero(props) {
  return (
    <>
      <section id="header-section" className='d-flex alig-item-center'>
        <div id="header" className="container-fluid mt-5">
          <div className="row">
            <div className='col-10 mx-auto'>
              <div className='row' id='here'>
                <div class='col-lg-6 col-md-12 col-sm-12 col-xs-12 order-2 order-lg-1 order-sm-2 d-flex justify-content-center flex-column' >
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                  <h1>Hi, I am John,<br />
                    Creative Technologist</h1>
                    <button className='butt'>Download Resume</button>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-6 col-xs-6 order-1 order-lg-2 order-sm-1 header-img'>
                  <img src={img} className="img-fluid animated" alt='home-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
