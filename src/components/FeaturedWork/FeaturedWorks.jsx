import React from 'react';
import './FeaturedWork.css';
import Work from '../Common/Work';
import Wdata from '../Wdata';

export default function FeaturedWorks() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <p id='work'>Featured Works</p>
            <div className='row'>
              <div className='col-10 mx-auto'>
                <div class="card mb-3 border-0">
                  <div class="row g-4">
                    {
                      Wdata.map((val, ind) => {
                        return <Work
                        imgsrc={val.imgsrc}
                        title = {val.title}
                        category = {val.category}
                        date = {val.date}
                        />
                      }) 
                    }
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
