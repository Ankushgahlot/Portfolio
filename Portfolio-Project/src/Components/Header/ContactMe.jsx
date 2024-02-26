import React from 'react'
import { Link } from 'react-router-dom'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <>
      <div className="Contact">
        <img
          className='Contact-anim'
          src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_640.png"
          alt=""
        />

        <div className="Contact-form-section Contact-anims">
          <h3>Get In Touch</h3>
          <form action="">
            <input className='input-style' type="text" placeholder="First Name" />
            <input className='input-style' type="text" placeholder="Last Name" /> <br />
            <input className='input-style' type="text" placeholder="Email Address" />
            <input className='input-style' type="text" placeholder="Phone No." />
            <br />
            <textarea cols="30" rows="10" placeholder="Message"></textarea> <br />
            <button className='Contact-btn'>
              <Link id="Contactss" className="navbar-item" to="/ContactMe">
                Submit
              </Link>
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default ContactMe
