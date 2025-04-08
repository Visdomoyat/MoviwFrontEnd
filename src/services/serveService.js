const BASE_URL = `${import.meta.env?.VITE_BACK_END_SERVER_URL || 'http://localhost:3000'}/service`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL, { 
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
        });
        return res.json();
    } catch(err) {
        console.log(err)
    }
};

const show = async (serviceId) => {
    try {
        const res = await fetch(`${BASE_URL}/${serviceId}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
        if(!res.ok) throw new Error(`Failed to fetch service: ${res.status}`)
        return await res.json()
    }catch (err) {
        console.log("Error fetching service details",err)
    }
}

const create = async (serviceFormData) => {
    try{
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceFormData)
        });
        return res.json();
    } catch(err) {
        console.log(err)
    }
}

const createComment = async (serviceId, commentFormData) => {
    try{
        const res = await fetch(`${BASE_URL}/${serviceId}/comments`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentFormData)
        });
        if(!res.ok) {
            throw new Error(`HTTP error! Status : ${res.status}`)
        }

        const data = await res.json();
        console.log("API Response (New Comment):", data)
       return data
    } catch (err) {
        console.error('error Creating comment:', err)
        

    }
}
export {index, show, create, createComment}