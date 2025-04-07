

const BASE_URL = `${import.meta.env?.BACK_END_SERVER_URL || 'http://localhost:3000'}/auth`;

const authenticate = async (endpoint, formData) => {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.message || data.err) {
      throw new Error(data.message || data.err);
    }

    if (data.token) {
      try{
        const payload = JSON.parse(atob(data.token.split('.')[1])).payload;
        localStorage.setItem('token', data.token);
        return payload;
      } catch(tokenErr){

        throw new Error('Invalid token format');
      }
    }

    throw new Error('Invalid response from server');
  } catch (err) {
    console.log(err);
    throw err;
  }
};
// signUp function
const signUp = async (formData) => {
  return authenticate('sign-up', formData)
}


const signIn = async (formData) => {
  return authenticate('sign-in', formData)
};

export {
  signUp,
  signIn,
};
