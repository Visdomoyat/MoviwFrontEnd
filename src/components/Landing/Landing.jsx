import LandingBanner from '../../assets/images/LandingBanner.png'
import { useState } from 'react'

import styles from './Landing.module.css'

const Landing = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

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
            <li className={styles.dropdown} onClick={() => toggleDropdown(0)}>
              Custom Website Development for Small Businesses
              <div className={`${styles.dropdownContent} ${openDropdown === 0 ? styles.show : ''}`}>
                <p>We build simple, affordable, and efficient websites tailored to the needs of small businesses and educators.
                   We use the latest technologies to ensure your website is fast, secure, and user-friendly. <br />
                   Examples:
                   <ul>
                    <li>Business landing page</li>
                    <li>E-commerce sites</li>
                    <li>Service-based websites</li>
                    <li>Portfolio websites</li>
                    <li>Informational/Educational websites</li>
                    <li>And more!</li>
                    </ul>
                   </p>
              </div>
            </li>
            <li className={styles.dropdown} onClick={() => toggleDropdown(1)}>
             MVP Development for Startups
              <div className={`${styles.dropdownContent} ${openDropdown === 1 ? styles.show : ''}`}>
                <p>We help early-stage startups build minimum viable products (MVPs), especially in the EdTech Space, using modern tech stacks.
                   Tech Stack focused on:
                   <ul>
                     <li>Frontend: React.js, HTML/CSS, JavaScript</li>
                     <li>Backend: Node.js, Express, Python, Django</li>
                     <li>Database: MongoDB, PostgreSQL</li>
                     <li>Hosting: Heroku, AWS, Netlify or client-preferred platforms</li>
                     <li>CMS (if needed): WordPress, Wix, etc.</li>
                   </ul>
                   Turn your ideas into functional products ready for testing or pitching to investors
                </p>
              </div>
            </li>
            <li className={styles.dropdown} onClick={() => toggleDropdown(2)}>
              EdTech Platform Development and Instructional Design
              <div className={`${styles.dropdownContent} ${openDropdown === 2 ? styles.show : ''}`}>
                <p>We design and develop interactive learning platforms, tools, and content delivery systems for educators, trainers and students.
                   Our tech stack includes:
                   <ul>
                     <li>Frontend: React.js, HTML/CSS, JavaScript</li>
                     <li>Backend: Node.js, Express, Python, Django</li>
                     <li>Learning Management System (LMS) integration: Canvas, Moodle, Blackboard, Articulate 360 etc.</li>
                     <li>Audio-Visual educational resources: videos, podcasts, etc.</li>
                     <li>Interactive content: quizzes, simulations etc.</li>
                     <li>Game-based learning tools: Scratch, Minecraft, JavaScript etc.</li>
                     <li>Integration with third-party services: payment gateways, analytics, etc.</li>
                   </ul>
                   Create an engaging and effective learning experience for your audience
                </p>
              </div>
            </li>
            <li className={styles.dropdown} onClick={() => toggleDropdown(3)}>
              Software and App Localization
              <div className={`${styles.dropdownContent} ${openDropdown === 3 ? styles.show : ''}`}>
                <p>We provide comprehensive software localization services to help your product reach global markets.
                   We specialize in:
                   <ul>
                     <li>Adapting user interfaces (UI), menus, and content for new markets</li>
                     <li>Ensuring cultural relevance in images, date formats, currencies, etc.</li>
                     <li>Working with developers to ensure technical compatibility</li>
                     <li>Games</li>
                   </ul>
                   Make your software feel native to users in different regions
                </p>
              </div>
            </li>
            <li className={styles.dropdown} onClick={() => toggleDropdown(4)}>
              Written Translation French &lt;&gt; English
              <div className={`${styles.dropdownContent} ${openDropdown === 4 ? styles.show : ''}`}>
                <p>We provide professional translation services for your business needs.</p>
                <ul>
                  <li>Translating website copy, product descriptions, instructional materials, and documentation</li>
                  <li>Specializing in educational and technical content</li>
                  <li>Supporting formats: Web pages, PDFs, LMS modules, presentations</li>
                  <li>Legal documents</li>
                  <li>And more!</li>
                </ul>
                Make your content accessible to a wider audience
              </div>
            </li>
            <li className={styles.dropdown} onClick={() => toggleDropdown(5)}>
              Intrepretaion Services French &lt;&gt; English
              <div className={`${styles.dropdownContent} ${openDropdown === 5 ? styles.show : ''}`}>
                <p>We provide professional interpretation services for your business needs.</p>
                <ul>
                  <li>Real-time language support for meetings, webinars, training sessions</li>
                  <li>Focus on EdTech, startup mentorship, or business development topics</li>
                  <li>Available via video call or integrated into virtual learning environments</li>
                </ul>
                Make your content accessible to a wider audience
              </div>
            </li>
        </ul>
      </section>

    
      
    </main>
  );
};

export default Landing;
