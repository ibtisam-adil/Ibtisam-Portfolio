import Navbar from '../Navbar/Navbar';
import './resume.css';

const Resume = () => {
  return (
    <article className="about p-8 flex flex-col resume">

    <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">University of Gujrat</h4>

          <span>2019 -- 2023</span>

          <p className="timeline-text">
            Bachelors of Information Technology
          </p>

        </li>



      </ol>

    </section>

    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Software Engineer</h4>

          <span>Twinspider</span>
          <span>2024/08 — Present</span>

          <ol className="timeline-text" >
            <li>Led a team in developing web applications using Ruby on Rails, React.js, and MySQL</li>
            <li>Built and optimized RESTful APIs and database queries, improving performance by 30%</li>
            <li>Integrated React with Rails for dynamic, responsive user interfaces</li>
            <li>Ensured code quality and timely delivery through code reviews and best practices</li>
            <li>Managed client communications, gathering requirements and providing technical solutions</li>
            <li>Resolved technical challenges and supported team members in meeting project goals</li>
          </ol>


        </li>
        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Fullstack Developer</h4>

          <span>BOSON Studio</span>
          <span>2024/02 — 2024/08</span>

          <ul className="timeline-text">
            <li>Developed web applications using Vue.js, Laravel, and MySQL</li>
            <li>Designed RESTful APIs with Laravel to enable smooth frontend-backend communication</li>
            <li>Optimized MySQL queries, boosting performance by 40%</li>
            <li>Collaborated with the team to resolve technical issues and meet project deadlines</li>
          </ul>


        </li>

        <li className="timeline-item">

          <h4 className="h4 timeline-item-title">Intern</h4>

          <span>2023/10 — 2024/01</span>

          <ul className="timeline-text">
            <li>Utilized HTML, CSS, PHP & JavaScript to design and implement website layouts, backend, and data
              storage through
              MySQL</li>
            <li>Collaborated with a team of designers, testers, and developers to create visually appealing and
              user-friendly web
              apps for clients</li>
            <li>Contributed to Role & Permission website, Gold Shop, POS, and many more projects</li>
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
