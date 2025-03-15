import { Link } from "react-router-dom"


function ServiceList({ services = [] }) {


  return (
    <main>
      {services.length > 0 ? (
        services.map((service) => (
          <Link key={service._id} to={`/services/${service._id}`}>
            <article>
              <header>
                <h2>{service.services} service</h2>
                <p>
                  {`${service.author.username} posted on ${new Date(service.createdAt).toLocaleDateString()}`}
                </p>
              </header>
              <p>{service.description}</p>
            </article>
          </Link>
        ))
      ) : (
        <p>Loading Services ...</p>
      )}

    </main>
  )
}

export default ServiceList