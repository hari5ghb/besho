import React, { useEffect, useRef } from 'react';
import '../Styles/About.css';

const contentSections = [
  {
    title: "About Us",
    text: "BZHO NEXUSHUB is a visionary company founded by Ibiyen. We aim to bridge the gap between local food cultures and global access through nutritious and innovative food solutions."
  },
  {
    title: "Our Vision",
    text: "To ensure that healthy, fulfilling food reaches every hand. We aim to reduce food waste, honor producers, and build an inclusive food ecosystem."
  },
  {
    title: "Our Mission",
    text: "We deliver ready-to-eat and ready-to-cook food solutions that retain nutrients, save time, and celebrate traditional food cultures while empowering communities."
  },
  {
    title: "Startup Focus",
    text: "Our startup creates high-quality, affordable food products that blend convenience with nutritional value—making healthy eating easy and accessible."
  },
  {
    title: "Collaborations",
    text: "Partnered with UET and FAPC, we work with farmers to promote sustainable agriculture and provide nutritious food at scale."
  }
];

const About = () => {
  const contentBlocksRef = useRef([]);
  const animationStateRef = useRef(new Array(contentSections.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      contentBlocksRef.current.forEach((block, index) => {
        if (!block) return;

        const rect = block.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

        if (isVisible) {
          block.classList.add('visible');
          animationStateRef.current[index] = true;
        } else {
          block.classList.remove('visible');
          animationStateRef.current[index] = false;
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Header animation on mount
  useEffect(() => {
    const header = document.querySelector('.header-animate');
    if (header) {
      setTimeout(() => {
        header.classList.add('visible');
      }, 100);
    }
  }, []);

  return (
    <div className="about-container">
      <h1 className="header-animate">Our Story</h1>
      <div className="view">
        {contentSections.map((section, index) => (
          <div
            ref={el => contentBlocksRef.current[index] = el}
            className={`content-block ${index % 2 !== 0 ? 'right' : ''}`}
            key={index}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;