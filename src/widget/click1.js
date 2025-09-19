import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from './../images/1.jpeg';

const Click1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScBJHNOQYEMKI-BhbY-TF6qkNaRUkYdpLRUNPl5lcrarYqppQ/formResponse";
    
    const data = new FormData();
    data.append("entry.695736277", formData.name);   // Name
    data.append("entry.975134573", formData.phone);    // Mobile number
    data.append("entry.1448643957", formData.city);    // City


    try {
      await fetch(formURL, {
        method: "POST",
        body: data,
        mode: "no-cors" // Required for Google Forms
      });
      alert("✅ Submitted successfully!");
      setFormData({ name: '', phone: '', city: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '250px', cursor: 'pointer' }}>
      {/* <Link to="/image2"> */}
        <img
          src={image1}
          alt="Image 1"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      {/* </Link> */}

      {/* Transparent Input Field */}
      <form 
        onSubmit={handleSubmit} 
        style={{
          position: 'absolute',
          top: '50%',
          left: '76%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '35%',
        }}
      >
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="பெயர்"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '6px',
            outline: 'none',
            color: '#000'
          }}
          required
        />
        <input 
          type="text" 
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="தோலெய்ப்பேசி இலக்கம்"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '6px',
            outline: 'none',
            color: '#000'
          }}
          required
        />
        <input 
          type="text" 
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="நகரம்"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '6px',
            outline: 'none',
            color: '#000'
          }}
          required
        />
        <button type="submit" style={{
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '6px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Click1;


