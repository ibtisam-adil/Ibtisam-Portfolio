import './portfolio.css'
import img9 from '../../assets/images/project-9.png'
import img8 from '../../assets/images/project-8.jpg'
import img7 from '../../assets/images/project-7.png'
import img6 from '../../assets/images/project-6.png'
import img5 from '../../assets/images/project-5.png'
import img4 from '../../assets/images/project-4.png'
import img3 from '../../assets/images/project-3.jpg'
import img2 from '../../assets/images/project-2.png'
import img1 from '../../assets/images/project1.png'
import Navbar from '../Navbar/Navbar'
import { IonIcon } from '@ionic/react'
import { chevronDown, eyeOutline } from 'ionicons/icons'

const Portfolio = () => {
  return (
    <article className="portfolio about" data-page="portfolio">

    <header>
      <h2 className="h2 article-title">Portfolio</h2>
    </header>

    <section className="projects">

      <ul className="filter-list">

        <li className="filter-item">
          <button className="active" data-filter-btn>All</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web design</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Applications</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web development</button>
        </li>

      </ul>

      <div className="filter-select-box">

        <button className="filter-select" data-select>

          <div className="select-value" data-selecct-value>Select category</div>

          <div className="select-icon">
            <IonIcon icon={chevronDown} />
          </div>

        </button>

        <ul className="select-list">

          <li className="select-item">
            <button data-select-item>All</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web design</button>
          </li>

          <li className="select-item">
            <button data-select-item>Applications</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web development</button>
          </li>

        </ul>

      </div>

      <ul className="project-list">

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img1} alt="finance" loading="lazy" />
            </figure>

            <h3 className="project-title">Finance</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
                <IonIcon icon={eyeOutline} />
              </div>

              <img src={img2} alt="orizon" loading="lazy" />
            </figure>

            <h3 className="project-title">Orizon</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img3} alt="fundo" loading="lazy" />
            </figure>

            <h3 className="project-title">Fundo</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="applications">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img4} alt="brawlhalla" loading="lazy" />
            </figure>

            <h3 className="project-title">Brawlhalla</h3>

            <p className="project-category">Applications</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img5} alt="dsm." loading="lazy" />
            </figure>

            <h3 className="project-title">DSM.</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web design">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img6} alt="metaspark" loading="lazy" />
            </figure>

            <h3 className="project-title">MetaSpark</h3>

            <p className="project-category">Web design</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img7} alt="summary" loading="lazy" />
            </figure>

            <h3 className="project-title">Summary</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="applications">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img8} alt="task manager" loading="lazy" />
            </figure>

            <h3 className="project-title">Task Manager</h3>

            <p className="project-category">Applications</p>

          </a>
        </li>

        <li className="project-item  active" data-filter-item data-category="web development">
          <a href="#">

            <figure className="project-img">
              <div className="project-item-icon-box">
              <IonIcon icon={eyeOutline} />
              </div>

              <img src={img9} alt="arrival" loading="lazy" />
            </figure>

            <h3 className="project-title">Arrival</h3>

            <p className="project-category">Web development</p>

          </a>
        </li>

      </ul>

    </section>
    <Navbar />

  </article>

  )
}

export default Portfolio
