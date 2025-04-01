import styles from './Footer.module.css'
import { Link } from 'react-router'
function Footer() {
    return (
        <main className={styles.footer}>
 

            <table>
                
                <tr>
                    
                    <th>Portfolio</th>
                    <th>Pages</th>
                    <th>Connect with us</th>
                </tr>
                <tr>
                   
                    <td>
                        <a href=" https://zombiecart.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <p>Zombie Shopping Cart </p>
                        </a>
                    </td>
                    <td>
                        <Link to ='/landing'>Home</Link>         
                    </td>
                  
                    <td>
                         +1 234 8177 874
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <Link to ='/about'>About Us</Link>
                    </td>
                    <td></td>
                </tr>
            </table>
            <p>copyright 2025 VISDOM-DEV All Rights Reserved</p>
        </main>
    )
}

export default Footer