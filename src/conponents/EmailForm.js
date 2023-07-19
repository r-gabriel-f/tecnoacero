import React, { useState } from "react";
import axios from "axios";
import "./EmailFrom.css";

const EmailForm = () => {
  const [nombre, setNombre] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/send-email", {
        nombre,
        from,
        subject,
        text,
      });

      console.log(response.data);

      // Reinicia los campos del formulario después de enviar el correo electrónico exitosamente
      setNombre("");
      setFrom("");
      setSubject("");
      setText("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container-email">
      <h2>Enviar Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="email-contenido">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su Nombre porfavor"
            required
          />
        </div>
        <div className="email-contenido">
          <label>Email:</label>
          <input
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Ingrese su Email"
            required
          />
        </div>
        <div className="email-contenido">
          <label>Asunto:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Ingrese su Asunto porfavor"
            required
          />
        </div>
        <div className="email-contenido">
          <label>Mensage:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ingrese su Mensaje porfavor"
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default EmailForm;
