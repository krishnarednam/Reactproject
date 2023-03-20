import React from 'react';
import './Contact.css';
import { useState } from 'react';
import Footer from '../Footer/Footer';

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
  })

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //set to state
    setData({ ...data, [name]: value });
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}, Successfully Submitted! We will reach you soon..`);
    setData({ username: "", password: "", date: "", category: "" });
  }

  return (
    <>
      <div id='contact'>
        <h1>Contact Us</h1>
      </div>
      <div className='container'>
        <form onSubmit={formSubmit}>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <div className='mb-0'>
                <label className='form-label' >Enter Name:</label>
                <input
                  type="text"
                  placeholder="Enter Name:"
                  className="form-control"
                  required
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label' >Phone Number:</label>
                <input type="text" placeholder="Phone Number:" className="form-control" required
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                />
              </div>
              <div className='mb-3'>
                <label className='form-label' >Email Addres:</label>
                <input type="email" placeholder="Email Addres:" className="form-control" required
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                />
              </div>
              <div className='mb-3'>
                <textarea className='form-control' row="4" placeholder='Message'
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div id='submit-btn'>
                <button value="submit" className='btn btn-outline-primary w-100'>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
