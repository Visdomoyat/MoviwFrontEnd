import { useState } from "react";


function ServiceForm(props) {
    const [formData, setFormData] = useState({
        services: 'Frontend',
        description: '',
        mobile: '',
        Email: '',
    });
    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleAddService(formData)
    };
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="services-input">Services</label>
                <select
                    required
                    name="services"
                    id="services-input"
                    value={formData.services}
                    onChange={handleChange}
                >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Search Engine Optimization(SEO)">Search Engine Optimization(SEO)</option>
                    <option value="Full stack">Full stack</option>
                    <option value="API integration $ development">API integration $ development</option>
                    <option value="E-commerce solutions">E-commerce solutions</option>
                    <option value="Software Localization">Software Localization</option>
                </select>

                <label htmlFor="description-input">Description</label>
                <textarea
                    required
                    type='text'
                    name='description'
                    id='description-input'
                    value={formData.description}
                    onChange={handleChange}
                />

                <label htmlFor="mobile-input">Phone Number</label>
                <input
                    required
                    type="tel"
                    name="mobile"
                    id='mobile-input'
                    value={formData.mobile}
                    onChange={handleChange}
                />

                <label htmlFor="Email-input">Email</label>
                <input
                    required
                    type="email"
                    name="Email"
                    id='Email-input'
                    value={formData.Email}
                    onChange={handleChange}
                />

                <button type="submit">Request service</button>
            </form>
        </main>
    );
};

export default ServiceForm