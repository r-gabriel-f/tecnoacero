import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        from,
        to: 'tecnoacero56@gmail.com',
        subject,
        text
      });

      console.log(response.data);

      // Reinicia los campos del formulario después de enviar el correo electrónico exitosamente
      setFrom('');
      setSubject('');
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Email Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From:</label>
          <input type="email" value={from} onChange={(e) => setFrom(e.target.value)} required />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} required />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailForm;
