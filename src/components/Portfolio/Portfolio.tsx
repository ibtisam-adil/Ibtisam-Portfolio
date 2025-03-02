import { SetStateAction, useState } from 'react';
import './portfolio.css';
import img9 from '../../assets/images/project-9.png';
import img8 from '../../assets/images/project-8.jpg';
import img7 from '../../assets/images/project-7.png';
import img6 from '../../assets/images/project-6.png';
import img5 from '../../assets/images/project-5.png';
import img4 from '../../assets/images/project-4.png';
import img3 from '../../assets/images/project-3.jpg';
import img2 from '../../assets/images/project-2.png';
import img1 from '../../assets/images/project1.png';
import Navbar from '../Navbar/Navbar';
import { IonIcon } from '@ionic/react';
import { chevronDown, eyeOutline } from 'ionicons/icons';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projectsData = [
    { id: 1, title: 'Finance', category: 'web development', image: img1 },
    { id: 2, title: 'Orizon', category: 'web development', image: img2 },
    { id: 3, title: 'Fundo', category: 'web design', image: img3 },
    { id: 4, title: 'Brawlhalla', category: 'applications', image: img4 },
    { id: 5, title: 'DSM.', category: 'web design', image: img5 },
    { id: 6, title: 'MetaSpark', category: 'web design', image: img6 },
    { id: 7, title: 'Summary', category: 'web development', image: img7 },
    { id: 8, title: 'Task Manager', category: 'applications', image: img8 },
    { id: 9, title: 'Arrival', category: 'web development', image: img9 },
  ];

  // Function to handle category selection
  const handleCategoryClick = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
    filterSelect();
  };

  const filterSelect = () => {
    const selectBox = document.querySelector('.select-list')
    const selectIcon = document.querySelector('.select-icon')
    selectIcon?.classList.toggle('active')
    selectBox?.classList.toggle('active')
  }

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <article className="portfolio about" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter Buttons */}
        <ul className="filter-list">
          {['All', 'Web design', 'Games', 'Web development'].map(category => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter Dropdown */}
        <div className="filter-select-box">
          <button className="filter-select" onClick={filterSelect}>
            <div className="select-value">{selectedCategory}</div>
            <div className={'select-icon '}>
              <IonIcon icon={chevronDown} />
            </div>
          </button>

            <ul className="select-list">
              {['all', 'web design', 'applications', 'web development'].map(category => (
                <li className="select-item" key={category}>
                  <button onClick={() => handleCategoryClick(category)}>{category}</button>
                </li>
              ))}
            </ul>
        </div>

        {/* Projects List */}
        <ul className="project-list">
          {filteredProjects.map(project => (
            <li className="project-item active" key={project.id}>
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Navbar />
    </article>
  );
};

export default Portfolio;
