import Marque from 'react-fast-marquee';
import './about.css';
import { MagicCard } from '../magicui/magic-card';
import img1 from '../../assets/images/icon-design.svg';
import img2 from '../../assets/images/flutter.png';
import avatar1 from '../../assets/images/github.png';
import avatar2 from '../../assets/images/nodejs.png';
import avatar3 from '../../assets/images/react.png';

import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
const About = () => {
    const [direction, setDirection] = useState<"right" | "left">("right");
  return (
    
    <article className="about p-8 flex flex-col ">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>
    <section className="about-text flex flex-col gap-6">
      <p>
       I am Ibtisam Adil, a programmer with experience in C++ and web development. I have worked on games, websites, and other software projects, always trying to make things better and more useful.
      </p>

      <p>
      I have built web apps using React, Tailwind, and JavaScript and created real-time graphics projects with SDL/OpenGL. I enjoy learning new technologies and improving my coding skills through hands-on projects.
      </p>
    </section>
    

<section className="logo-marquee">
  <Marque pauseOnHover={true} speed={20} direction={direction} onCycleComplete={() => setDirection(direction === "right" ? "left" : "right")} >
    <div className="flex gap-x-16 items-center marque">
      <p className="logo-text flex items-center gap-4">
        <i className="fa-brands fa-react text-6xl"></i> 
        <span className='text-3xl'>Native</span>
      </p>
      <i className="fa-brands fa-react logo text-6xl" style={{ color: "#FFFFFF" }}></i>
      <p className="logo-text text-3xl">NestJS</p>
      <i className="fa-brands fa-laravel logo text-6xl" style={{ color: "#FFFFFF" }}></i>
      <i className="fa-brands fa-node logo text-6xl" style={{ color: "#FFFFFF" }}></i>
      <i className="fa-brands fa-docker logo text-6xl" style={{ color: "#FFFFFF" }}></i>
      <p className="logo-text text-3xl">GraphQL</p>
      <i className="fa-brands fa-php logo text-6xl" style={{ color: "#FFFFFF" }}></i>
      <i className="fa-brands fa-python logo text-6xl" style={{ color: "#FFFFFF" }}></i>
    </div>
  </Marque>
</section>


    <section className="service">

      <h3 className="h3 service-title text-3xl">What i'm doing</h3>

      <div
      className={
        "flex h-[342px] w-full flex-col gap-7 lg:h-[250px] lg:flex-row magicCard"
      }
    >
        <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl magicCard"
        gradientColor={"#D9D9D955"} gradientSize={100}
      >

        <li className="service-item flex flex-col items-center gap-4">

          <div className="service-icon-box w-[63px] h-[40px]">
            <img className='w-full h-full'  src={img1} alt="design icon" width={40} height={40} />
          </div>

          <div className="service-content-box text-center">
            <h4 className="h4 service-item-title whitespace-normal break-words">Web design</h4>

            <p className="service-item-text whitespace-normal break-words">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>

        </li>
        </MagicCard>
        <MagicCard
        className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
        gradientColor={"#D9D9D955"} gradientSize={100}
      >

        <li className="service-item flex flex-col items-center gap-4">

          <div className="service-icon-box  w-[45px] h-[40px]">
            <img className='w-full h-full' src={img2} alt="mobile app icon" width={40} height={40} />
          </div>

          <div className="service-content-box text-center">
            <h4 className="h4 service-item-title whitespace-normal break-words">Cross platform Mobile apps</h4>

            <p className="service-item-text whitespace-normal break-words">
              Development of applications for iOS and Android.
            </p>
          </div>

        </li>
        </MagicCard>

      </div>

    </section>
    <section className="testimonials">

          <h3 className="h3 testimonials-title">Stack</h3>

          <ul className="testimonials-list has-scrollbar">

            <li className="testimonials-item">
              <div id='test-card' className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={avatar1} alt="Usman Ibrahim" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Github</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                  GitHub is a cloud-based platform for version control and collaboration using Git, enabling developers to manage and share code efficiently.
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div id='test-card' className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={avatar2} alt="Ahmad Raza" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>Node.js</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                  Node.js is a runtime environment that allows JavaScript to run on the server side, enabling scalable and high-performance applications. 
                  </p>
                </div>

              </div>
            </li>

            <li className="testimonials-item">
              <div id='test-card' className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={avatar3} alt="Saqlain" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>React</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                  React is a JavaScript library for building fast and interactive user interfaces using a component-based architecture
                  </p>
                </div>

              </div>
            </li>

          </ul>

        </section>
        <Navbar />
  </article>
  )
}

export default About
