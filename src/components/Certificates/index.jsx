import { useState, useEffect } from 'react';
import styles from  './Certificates.module.css'

function CertificatesCarousel(){
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://wellington2708.github.io/api-certificates-portfolio/certificates.json");
        const data = await response.json();
        setCertificatesData(data.certificates);
      } catch (error) {
        console.error("Error loading JSON:", error);
      }
    };

    fetchData();
  }, []);


  

  return (
    <section id="container__certificates" className={`${styles.certificates} ${styles.skills}`}>
      <div >
        <h2 className={styles.container__title}>Course Certificates</h2>
      </div>
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleAutoplaying">
        <div className='carousel-inner'>
          {certificatesData.map((certificate, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img className={`d-block w-100 ${styles.certificateImage}`} src={certificate.certificate} alt={certificate.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default CertificatesCarousel;
