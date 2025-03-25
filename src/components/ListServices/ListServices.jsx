import styles from './ListService.module.css'
import { Link } from 'react-router';
function ListServices() {
  return (
    <main className={styles.container}>
        <h1>Our Services</h1>
        <p>Here is a list of what we offer</p>
        <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Full Stack Development</li>
            <li>API integration & Development</li>
            <li>E-commerce solutions</li>
            <li>software Localization</li>
            <li><Link to='/sign-in'>Request Service</Link></li>
        </ul>
      
    </main>    
  )
}

export default ListServices