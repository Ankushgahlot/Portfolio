import { Link } from 'react-router-dom';
import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa"
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className='middle-line'>
      </div>
      <div className='Footer-rows'>
        <div className='Footer-row-1'>
          <Link to="">
            <AiFillTwitterCircle className='footer-icon' />
          </Link>
          <Link to="">
            <ImLinkedin className='footer-icon' />
          </Link>
          <Link to="">
            <FaSquareInstagram className='footer-icon' />
          </Link>
          <Link to="">
            <MdEmail className='footer-icon' />
          </Link>
        </div>
        <ul className='Footer-row-2'>
          <li>
            <Link className='footer-li' to="/AboutMe">
              About Me
            </Link>
          </li>
          <li>
            <Link className='footer-li' to="/Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className='footer-li' to="/Portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className='footer-li' to="/Education">
              Educations
            </Link>
          </li>
          <li>
            <Link className='footer-li' to="/ContactMe">
              Contact Me
            </Link>
          </li>
        </ul>
      <div className='copyright'>Copyright <FaRegCopyright /> 2024 Portfolio.</div>
      </div>
    </footer>
  )
}

export default Footer;