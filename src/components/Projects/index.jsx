import { useState, useEffect } from 'react';
import styles from "./Projects.module.css"

const ProjectsCarousel = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://wellington2708.github.io/api-projects-portfolio/projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects" className={styles.projects}>
      <div>
        <h2 className={styles.container__title}>Projects</h2>
      </div>
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleInterval">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <img className={`d-block w-100 ${styles.projectsImage}`} src={project.src} alt={project.alt} />
              </a>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
