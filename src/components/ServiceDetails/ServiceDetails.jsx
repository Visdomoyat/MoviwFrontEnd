import { useParams } from "react-router"
import {useState, useEffect} from 'react';
import * as serveService from '../../services/serveService';

function ServiceDetails() {
    const {serviceId} = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
      const fetchService = async () => {
        const serviceData = await serveService.show(serviceId)
        setService(serviceData)
      }
      fetchService();
    }, [serviceId]);
    console.log('service state', service)
    if (!service) return <p>loading ...</p>
  return (
   
    <main>
      <section>
        <header>
         
        <h2>{service.services} service</h2>
          <p>
            {`${service.author.username} posted on 
            ${new Date(service.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{service.description}</p>
      </section>
      <section>
        <h3>Comments</h3>
        {!service.comments.length && <p>There are no comments.</p>}
        {service.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on 
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ServiceDetails