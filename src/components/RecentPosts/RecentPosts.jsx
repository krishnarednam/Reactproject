import React from 'react';
// import { Link } from 'react-router-dom';
import './RecentPosts.css';


export default function RecentPosts() {

  return (
    <>
      <div className='Recent-posts' id='blog'>
        <div className="container-fluid">
          <div className='rp'>
            <p>Recent Posts</p>
            {/* <Link to='/blog' id='View'><p>View All</p></Link> */}
          </div>
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row g-4'>
                <div className='col-xs-12 col-sm-6 col-lg-6 '>
                  <div className='card-1'>
                    <h3>Making a design system from<br />scratch</h3>
                    <p>12 Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design Pattern</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
                <div className='col-xs-12 col-sm-6 col-lg-6'>
                  <div className='card-2'>
                    <h3>Creating pixel perfect icons in<br />Figma</h3>
                    <p>12 Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design Pattern</p>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
