import styles from './about.module.css'


function about() {
  return (
    <main className={styles.main}>
    
      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>Empowering businesses with digital tools that drive efficiency, and expanding market reach!</p>
      </div>
      <div className={styles.about}>
      <h2>About Us</h2>
        <p>VISDOM is a combination of Vivi and Wisdom, a dynamic couple with expertise in educational 
          technology, software development, and software localization. This company was founded in 2025 
          with the goal of delivering innovative digital solutions that help businesses and organizations 
          thrive in a digital world
       

     
        At VISDOM-DEV, we develop custom software and instructional design solutions that enhance 
          teaching, training, and business efficiency. We also help businesses adapt their websites and 
          software for multilingual audiences through our localization services.
        

        Our website development and business solutions are designed to help startups and established
          enterprises build high-performing, user-friendly websites that align with their vision and 
          business goals.
        </p>

        <p style={{textAlign: 'center',}}>If this sounds like your dream, then you're in the right place!</p>
      </div>


    </main>
  )
}

export default about