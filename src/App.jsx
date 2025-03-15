import { useContext,useState, useEffect } from 'react';
import * as serveService from './services/serveService';
import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceList from './components/ServiceList/ServiceLists';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

import { UserContext} from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);

  const [services, setServices] = useState([])
  
  useEffect(() => {
    const fetchAllServices = async () => {
      const servicesData = await serveService.index();
      
      console.log("Fetched services:", servicesData)
      setServices(servicesData)
    };
    if(user) fetchAllServices()
  }, [user])
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        {user ? (
          <>
          <Route path='/services' element={<ServiceList services={services} />} />
          <Route path='/services/:serviceId' element={<ServiceDetails />} />
          <Route path='/services/new' element={<h1>Request Service</h1>} />
          </>
        ) : (
          <>
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />                                  
          </>
        )}
        
      </Routes>
    </>
  );
};

export default App;
