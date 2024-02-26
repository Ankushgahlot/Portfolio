import { Link } from 'react-router-dom'
import './AboutMe.css'
import { SiOnlyoffice } from 'react-icons/si'
import { MdOutlineIncompleteCircle } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { MdSimCardDownload } from 'react-icons/md'
function AboutMe() {
  return (
    <>
      <div className='AboutMe-Div'>
        <h2 >About Me</h2>
        <p className='About-p'>My Introduction</p>
        <div className='AbouMe-Inner-Div'>
          <div className='AbouMe-Inner-Img About-anim'>
            <img src="/Javascript.jpeg" alt="" />
          </div>
          <div className='AbouMe-Inner-Text About-anim'>
            <div className='AbouMe-Inner-Card Card-anim'>
              <div className='Inner-Cards'><SiOnlyoffice className='AboutMe-Icons' /> <br /> Experience <br /> Fresher</div>
              <div className='Inner-Cards'><MdOutlineIncompleteCircle  className='AboutMe-Icons' /> <br />Completed<br /> 2 Project</div>
              <div className='Inner-Cards'><BiSupport  className='AboutMe-Icons' /><br />Support<br />Online 24x7</div>
            </div>
            <div className='AboutMe-Inner-SecDiv'>
              <p className='AboutMe-Inner-P'>Lorem ipsum dolor sit amet consectetur adipisicing <br />
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                Lorem ipsum</p>
              <button className='AboutMe-Btn'><Link className='Download' to='https://docs.google.com/document/d/1ADDfwZYumEgC5eeZ7ElDJFL9JAzMQXCRQoNjLMpmPZ8/edit?usp=drivesdk'>Download CV <MdSimCardDownload className='AboutMe-Icons' /></Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
