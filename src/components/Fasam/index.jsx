import { useState } from "react";
import "./styles.css";
import FasamImage from "./assets/fasam.png";

const FasamCourse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fasam = {
    image: FasamImage,
    title: "Human Resources Management Course",
    alt: "Logo da Faculdade Sul-Americana",
    category: "Formação",
  };

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="graduation">
      <div className="fasam__course">
        <div className="course__fasam">
          <h2 className="certificates__title">{fasam.title}</h2>
          <img
            className="img-fluid image__fasam"
            src={fasam.image}
            alt={fasam.alt}
          />
        </div>

        <div id="accordionPanelsStayOpenExample" className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                onClick={handleAccordionClick}
              >
                Info about my course
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            >
              <div className="accordion-body">
                <p>
                  Human Resources Management Course at South American College.
                  With this background, I gained knowledge in quality control,
                  personnel management, teamwork, planning, and strategy
                  development, making me capable of meeting deadlines and
                  handling projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FasamCourse;
