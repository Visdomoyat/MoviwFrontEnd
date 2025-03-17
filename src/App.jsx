import { useContext,useState, useEffect } from 'react';
import * as serveService from './services/serveService';
import { Routes, Route, useNavigate } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import ServiceList from './components/ServiceList/ServiceLists';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ServiceForm from './components/ServiceForm/ServiceForm';
import ListServices from './components/ListServices/ListServices';

import { UserContext} from './contexts/UserContext';

const App = () => {
  const { user } = useContext(UserContext);

  const [services, setServices] = useState([])

  const navigate = useNavigate();

  const handleAddService = async (serviceFormData) => {
    try{
      const newService = await serveService.create(serviceFormData)
      console.log("New Service Created:", newService)
      if (!newService) throw new Error("Service creation failed")
      setServices([newService, ...services]);
      navigate('/services')
    }catch(err){
      console.error("error adding service:", err)
    }
    
  }
  
  useEffect(() => {
    const fetchUserServices = async () => {
      try{
        const userServices = await serveService.index()
        
        console.log("Fetched User-specific Services:", userServices)
    
        setServices(userServices)
      }catch(err){
        console.error("Error fetching services:", err)
      }
      
    };
    if(user) fetchUserServices();
  }, [user])
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/service' element={<ListServices />}  />
        {user ? (
          <>
          <Route path='/services' element={<ServiceList services={services} />} />
          <Route path='/services/:serviceId' element={<ServiceDetails services={services}/>} />
          <Route path='/services/new' element={<ServiceForm handleAddService = {handleAddService} />} />
          
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
