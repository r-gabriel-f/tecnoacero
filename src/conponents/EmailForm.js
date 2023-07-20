import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡El correo electrónico se envió correctamente!",
        showConfirmButton: false,
        timer: 3000,
      });

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
            placeholder="Ingrese su Nombre Pofavor :)"
            required
          />
        </div>
        <div className="email-contenido">
          <label>Email:</label>
          <input
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Ingrese su Email Pofavor :)"
            required
          />
        </div>
        <div className="email-contenido">
          <label>Asunto:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Ingrese su Asunto Pofavor :)"
            required
          />
        </div>
        <div className="email-contenido" id="email">
          <label>Mensaje:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ingrese su Mensaje Pofavor :)"
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
export default EmailForm;
