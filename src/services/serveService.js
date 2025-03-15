const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/service`;

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
        return res.json()
    }catch (err) {
        console.log(err)
    }
}
export {index, show}