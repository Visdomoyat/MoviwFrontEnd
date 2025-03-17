import * as serveService from '../../services/serveService';
import { useParams } from "react-router"
import {useState, useEffect} from 'react';

import CommentForm from "../CommentForm/CommentForm";
import styles from './ServiceDetails.module.css'

function ServiceDetails() {
    const {serviceId} = useParams();
    
    const [service, setService] = useState(null);

    const handleAddComment = async (commentFormData) => {
      const newComment = await serveService.createComment(serviceId, commentFormData);
      if(!service) {
        console.error("Service is null, cannot add comment!")
        return;
      }
      setService({...service, comments:[...service.comments, newComment]})
    }
    useEffect(() => {
      const fetchService = async () => {
        try{
          const serviceData = await serveService.show(serviceId)
          console.log("Fetched service data:", serviceData)
          
          if(!serviceData || !serviceData.comments) {
            console.error("Service data is invalid or comments are missing!")
          }
          setService(serviceData)
        }catch(err){
          console.error("Error fetching service:", err)
        }
        
      };
      fetchService();
    }, [serviceId]);
    console.log("Service comments:", service?.comments)
    if (!service) return <p>loading ...</p>
  return (
   
    <main className={styles.main}>
      <section>
        <header>
         
        <h2>{service.services} service <p>{new Date(service.createdAt).toLocaleDateString()}</p></h2>
          {/* <p>
            {`${service.author.username} posted on
            ${new Date(service.createdAt).toLocaleDateString()}`}
          </p> */}
        </header>
        <p>{service.description}</p>
      </section>
      <section>
      

        <CommentForm  handleAddComment={handleAddComment}/>

        {!service.comments.length && <p>There are no comments.</p>}

        {service?.comments?.map((comment, index) => (
          
          <article key={comment?._id || index}>
            
            <header>
              <p>

                {comment?.author?.username
                ?`${comment.author.username} posted on 
                ${new Date(comment.createdAt).toLocaleDateString()}`
                : "Unknown author"}
              </p>
            </header>
            <p>{comment?.text || "No comment text available"}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default ServiceDetails