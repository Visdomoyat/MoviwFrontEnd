import { useEffect, useState, useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import styles from './Dashboard.module.css'

import * as userService from '../../services/userService';


const Dashboard = () => {
  const { user } = useContext(UserContext);
 
  const [users, setUsers] = useState([])



  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await userService.index();
        setUsers(fetchedUsers);
      } catch (err) {
        console.log(err)
      }
    }
    if (user) fetchUsers();
  }, [user]);

  return (
    <main className={styles.container}>
      <div className={styles.uploadContainer}>
         
      <h1>Welcome, {user.username}</h1>
      </div>
      <div>
        <h4>Project Status</h4>
      </div>
     <div>
      <h4>Contracts</h4>
     </div>
     <div>
      <h4>Billings and payment</h4>
     </div>
      
    </main>
  );
};

export default Dashboard;
