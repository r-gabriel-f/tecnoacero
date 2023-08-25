const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.post('/send-email', (req, res) => {
  const { nombre, from, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'tecnoacero56@gmail.com',
      pass: 'ocaoybholgybvapv'
    }
  });

  const mailOptions = {
    from: "Web Correo <tecnoacero56@gmail.com>",
    to: "r.gabriel.f@outlook.com, robertgabrielxd2@gmail.com",
    subject: subject,
    text: `Nombre: ${nombre}\nEmail: ${from}\nAsunto: ${subject}\nMensaje: ${text}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al enviar el correo electrónico');
    } else {
      console.log('Correo electrónico enviado:', info.response);
      res.send('Correo electrónico enviado exitosamente');
    }
  });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
