import { IonIcon } from '@ionic/react';
import Navbar from '../Navbar/Navbar';
import './resume.css';
import { bookOutline } from 'ionicons/icons';

const Resume = () => {
  return (
    <article className="about p-8 flex flex-col resume">

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Uppsala University</h4>

          <span>2024 -- Present</span>

          <p className="timeline-text">
          Bachelor in game design and programming
          </p>

        </li>



      </ol>

    </section>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
        <IonIcon icon={bookOutline} />
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Cryptocurrency Trading</h4>

          <span>Self-Employed</span>
          <span>2022/01 — Present</span>

          <ol className="timeline-text">
  <li>Executed high-frequency cryptocurrency trades using algorithmic strategies</li>
  <li>Developed and optimized trading bots using Python and Node.js for automated execution</li>
  <li>Analyzed market trends and blockchain data to identify profitable trading opportunities</li>
  <li>Managed risk through portfolio diversification, stop-loss strategies, and real-time monitoring</li>
  <li>Utilized APIs from Binance, Coinbase, and other exchanges for seamless trade execution</li>
  <li>Kept up-to-date with crypto regulations, DeFi protocols, and emerging blockchain technologies</li>
</ol>


        </li>
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Front End Developer</h4>

          <span>Freelance</span>
          <span>2023/09 — Present</span>

          <ol className="timeline-text">
  <li>Designed and developed responsive web applications using React.js and Next.js</li>
  <li>Implemented dynamic UI components with Tailwind CSS and Material UI for a seamless user experience</li>
  <li>Optimized web performance, improving load times and accessibility scores</li>
  <li>Integrated third-party APIs and backend services to enhance application functionality</li>
  <li>Collaborated with clients to gather requirements and deliver custom front-end solutions</li>
  <li>Ensured code quality through best practices, version control (Git), and thorough testing</li>
</ol>



        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Intern</h4>

          <span>2023/05 — 2023/09</span>

          <ul className="timeline-text">
            <li>Utilized HTML, CSS, & JavaScript to design and implement website layouts</li>
            <li>Collaborated with a team of designers, testers, and developers to create visually appealing and
              user-friendly web
              apps for clients</li>
          </ul>


        </li>

      </ol>

    </section>

    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Laravel</h5>
            <data value="80">85%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '85%' }}></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Vue.js</h5>
            <data value="70">85%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '85%' }}></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">mySql</h5>
            <data value="90">80%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
          </div>

        </li>

        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Flutter</h5>
            <data value="50">50%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '50%' }}></div>
          </div>

        </li>
        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Ai/ML</h5>
            <data value="50">60%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '60%' }}></div>
          </div>

        </li>
        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">Tailwind</h5>
            <data value="50">70%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
          </div>

        </li>
        <li className="skills-item">

          <div className="title-wrapper">
            <h5 className="h5">JavaScript</h5>
            <data value="50">70%</data>
          </div>

          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
          </div>

        </li>

      </ul>

    </section>
    <Navbar />

  </article>
  
  )
}

export default Resume
