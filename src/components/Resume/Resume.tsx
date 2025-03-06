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

          <h4 className="h4 timeline-item-title">Game Development & Programming</h4>

          <span>Self-Employed</span>
          <span>2023/01 — Present</span>

          <ol className="timeline-text">
          <li>Developed games using Unity and C# for various platforms</li>
    <li>Implemented gameplay mechanics, AI, and UI systems in Unity</li>
    <li>Utilized Git and GitHub for version control and collaborative development</li>
    <li>Wrote and optimized scripts using Visual Studio as the primary code editor</li>
    <li>Worked with asset pipelines, shaders, and physics systems for enhanced game performance</li>
    <li>Kept up-to-date with industry trends, game design principles, and emerging technologies</li>
</ol>


        </li>
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Game & Level Design</h4>

          <span>Freelance</span>
          <span>2023/09 — Present</span>

          <ol className="timeline-text">
          <li>Designed and built immersive game levels using Unity ProBuilder</li>
          <li>Created engaging gameplay experiences through level pacing and player progression</li>
</ol>



        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Art & Animation (for Integration & Prototyping)</h4>

          <span>2023/05 — 2023/09</span>

          <ul className="timeline-text">
          <li>Created 2D art assets using Krita and PixelArt for game prototypes</li>
          <li>Designed sprites, UI elements, and concept art for rapid iteration</li>
          </ul>


        </li>
        <li className="timeline-item">

  <h4 className="h4 timeline-item-title">Project Management & Collaboration</h4>

  <span>Independent Developer</span>
  <span>Year Started — Present</span>

  <ol className="timeline-text">
    <li>Managed game development tasks using Trello and Jira for efficient workflow</li>
  <li>Planned project timelines, milestones, and sprint cycles for structured progress</li>
  </ol>

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
