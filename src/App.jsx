// App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Certificates from "./components/Certificates";
import Header from "./components/Header";

function App() {
  const [datas, setDatas] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("src/components/Certificates/certificates.json")
      .then((response) => response.json())
      .then((data) => setDatas(data.certificates));
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === datas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? datas.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <AboutMe />
      <section id="container__certificates" className="certificates skills">
        <div>
          <h2 className="container__title">Certificates</h2>
        </div>
        <div
          className="carousel slide"
          data-bs-ride="carousel"
          id="carouselExampleAutoplaying"
          

        
        >
          <div className="carousel-inner">
            {datas.map((item, index) => (
              <Certificates
                key={index}
                id={item.id}
                imageUrl={item.certificate}
                alt={item.alt}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          <button
            className="carousel-control-prev"
            type="button"
            onClick={handlePrev}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={handleNext}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
