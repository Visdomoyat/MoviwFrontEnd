import { useState } from "react";   


function CommentForm(props) {
    const [formData, setFormData] = useState({text: ''});
    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value});
    };

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setFormData({text: ''});
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="text-input">Your comment:</label>
        <textarea 
        required
        type='text'
        name='text'
        id='text-input'
        value={formData.text}
        onChange={handleChange}
        />
        <button type="submit">Comment</button>
    </form>
  )
}

export default CommentForm