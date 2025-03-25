
import LandingBanner from '../../assets/images/LandingBanner.png'

import styles from './Landing.module.css'

const Landing = () => {

  return (

    <main className={styles.main}>
      <section className={styles.landing}>
        <a href="https://calendly.com/app/availability/schedules" target= '_Blank' rel="noopener noreferrer">
        <img src={LandingBanner} alt="A banner with texts" />
        </a>
        
        </section>
      <br />
  
      <section className={styles.container}>
      <h1>Our Services</h1>
      
        <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Full Stack Development</li>
            <li>API integration & Development</li>
            <li>E-commerce solutions</li>
            <li>Software Localization</li>
            <li>Translation & Interpretaion</li>
        </ul>
      </section>

    
      
    </main>
  );
};

export default Landing;
