import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./Skills.css";
function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <h3 className='skill-heading'>Explore My Skills...</h3>
        <div className='Skill-Outer-div'>
          <Slider {...settings}>
            {Data.map((Data) => {
              return (
                <div className='Skill-Inner-div skill-anim'>
                  <img src={Data.img} alt="" />
                  <p className='Skill-p'>{Data.name}</p>
                  <p className='Skill-p'>{Data.levels}</p>
                  <p className='Skill-p'>{Data.text}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

const Data = [
  {
    name: `HTML`,
    img: `./Html.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `CSS`,
    img: `/Css.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `Tailwind Css`,
    img: `/Tailwind.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `Bootstrap`,
    img: `/Bootstrap.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `JavaScript`,
    img: `/Javascript.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `Git-Hub`,
    img: `/Git-Hub.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  },
  {
    name: `React Js`,
    img: `/ReactJs.jpeg`,
    levels: `Immediately`,
    text: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, tempore?`
  }
]

export default Skills
