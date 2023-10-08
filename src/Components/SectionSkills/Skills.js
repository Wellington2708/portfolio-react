import SkillsCSS from './Skills.module.css'
import React, { useState } from 'react';

//imported from Reactstrap
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

//importing images
import certificado1 from './assets/certificado1.png';
import certificado2 from './assets/certificado2.png';
import certificado3 from './assets/certificado3.png';
import certificado4 from './assets/certificado4.png';
import certificado5 from './assets/certificado5.png';


const items = [
  {
    src: certificado1,
    altText: 'Certificado Alura',
    caption: 'Iniciante em programação',
    key: 1,
    descrition: "Curso para iniciante em programação" ,
  },
  {
    src: certificado2,
    altText: 'Certificado Alura',
    caption: 'HTML e CSS',
    key: 2,
    descrition: "Formação em HTML e CSS" ,

  },
  {
    src: certificado3,
    altText: 'Certificado Alura',
    caption: 'JavaScript',
    key: 3,
    descrition: "Manipulação do DOM" ,

  },
  {
    src: certificado4,
    altText: 'Certiticado Alura',
    caption: 'Git e Github',
    key: 2,
    descrition: "Controle e Compartilhamento de código" ,

  },
  {
    src: certificado5,
    altText: 'Certificado Alura',
    caption: 'JavaScript',
    key: 3,
    descrition: "Orientação a Objetos" ,

  },
];



function Skills(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className={SkillsCSS.imageCertificate}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className={SkillsCSS.testeImagem}/>
        <CarouselCaption/>
        </CarouselItem>
    );
  });

  return (
    <section className={SkillsCSS.container}>
        <Carousel id="skills" 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        >
        <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
        />
        <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
        />
        </Carousel>
    </section>
  );
}

export default Skills;