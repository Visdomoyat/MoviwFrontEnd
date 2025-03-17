import { useContext } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../../contexts/UserContext';
import styles from './NavBar.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react';
import Logo from '../../assets/images/logo.png'

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false) // Toggle mobile menu
  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      
      <div className={styles.logoContainer}>
        <Link to='/'>
        <img src={Logo} alt="A dove Icon" className={styles.logo}/>
        </Link>
      </div> 
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars/>}
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to='/service' onClick={() => setIsOpen(false)}>Services</Link></li>
       {user ? (
        <>
          <li><Link to='/services' onClick={() => setIsOpen(false)}>My Service(s)</Link></li>
          <li><Link to ='/services/new' onClick={() => setIsOpen(false)}>New Service</Link></li>
          <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
        </>
      ) : (
        <>
          <li><Link to='/sign-in' onClick={() => setIsOpen(false)}>Sign In</Link></li>
          <li><Link to='/sign-up' onClick={() => setIsOpen(false)}>Sign Up</Link></li>
        </>
      )}
      </ul>
    </nav>
  );
};

export default NavBar;
