import { Link } from 'react-router-dom'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { MdOutlineWavingHand } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { HiExternalLink } from "react-icons/hi"
import './Portfolio.css'
function Portfolio() {
  const [typewriters] = useTypewriter({
    words: ["Ankush", "Ankush", "Ankush"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 100,
  });
  const [typewriters1] = useTypewriter({
    words: ["End", "End", "End"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 100,
  });
  const [Developer] = useTypewriter({
    words: ["Developer", "Developer", "Developer"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 100,
  });
  return (
    <div>
      <div className='main'>
        <div className='firstDiv'>
          <h1 className='anim anim-h'> <MdOutlineWavingHand /> Hi<span>!</span><br /> I&#39;m<span> {typewriters}</span> <br /> Front-<span> {typewriters1}</span> <br /> Web<span> {Developer}</span></h1>
          <Link className='anim anim-t' to='/ContactMe'><button className='ContactBtn'> Contact Me</button></Link>
        </div>
        <div className='SecondDiv'>
          <img className='anim anim-img'  src="https://cdn.pixabay.com/photo/2017/02/25/23/52/connections-2099068_640.png" alt="" />
        </div>
      </div>
      <div className='main1'>
        <h1>My Projects</h1>
        <div className='Linear-color'>
        <div className="Projectes">
          <div className="Projects-Detail anim-port">
            <h1>Heading Of The Web</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              doloribus nesciunt commodi maiores iusto dolore quas quis odio
              pariatur unde recusandae molestias facilis consectetur, inventore
              laboriosam rerum blanditiis sunt voluptatibus esse ipsum vitae
              perferendis soluta doloremque sit.{" "}
            </p>
            <div className='btn-1'>
            <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">ReactJs</Link>
              </button>
              </div>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Css</Link>
              </button>
              </div>
            </div>
            <div className='btn-2'>
            <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">Code <FaGithub className='Icon' /></Link>
              </button>
              </div>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Live Demo <HiExternalLink className='Icon' /></Link>
              </button>
              </div>
            </div>
          </div>
          <div>
            <img className='iframe anim-frame' src="/Javascript.jpeg" alt="" />
          </div>
        </div>
        </div>
        <div className="Projectes">
          <div>
            <img className='iframe anim-frames' src="/Tailwind.jpeg" alt="" />
          </div>
          <div className='important'>

          <div className="Projects-Detail anim-ports">
            <h1>Heading Of The Web</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              doloribus nesciunt commodi maiores iusto dolore quas quis odio
              pariatur unde recusandae molestias facilis consectetur, inventore
              laboriosam rerum blanditiis sunt voluptatibus esse ipsum vitae
              perferendis soluta doloremque sit.{" "}
            </p>
            <div className='btn-1'>
            <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">ReactJs</Link>
              </button>
              </div>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Css</Link>
              </button>
              </div>
            </div>
            <div className='btn-2'>
            <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">Code <FaGithub className='Icon' /></Link>
              </button>
              </div>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Live Demo <HiExternalLink className='Icon' /></Link>
              </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="Projectes">
          <div className="Projects-Detail anim-port">
            <h1>Heading Of The Web</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              doloribus nesciunt commodi maiores iusto dolore quas quis odio
              pariatur unde recusandae molestias facilis consectetur, inventore
              laboriosam rerum blanditiis sunt voluptatibus esse ipsum vitae
              perferendis soluta doloremque sit.{" "}
            </p>
            <div className='btn-1'>
            <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">ReactJs</Link>
              </button>
              </div>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Css</Link>
              </button>
              </div>
            </div>
            <div className='btn-2'>
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://www.pixels.com/">Code <FaGithub className='Icon' /></Link>
              </button>
              </div >
              <div className='btn-linear'>
              <button>
                <Link className='link' target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS">Live Demo <HiExternalLink className='Icon' /></Link>
              </button>
              </div>
            </div>
          </div>
          <div>
            <img className='iframe anim-frame' src="/Git-Hub.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio