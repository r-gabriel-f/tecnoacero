const nodemailer = require("nodemailer");
const { google } = require("googleapis");

async function sendEmail() {
  const oauth2Client = new google.auth.OAuth2(
    "539217455050-s6fmu9kn7db9ue38vm8vc3085gfvi5np.apps.googleusercontent.com",
    "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",
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: "1//04JaNwPPrvA1QCgYIARAAGAQSNwF-L9IrcLpVwUNyb62SeIHoCUdyU6OQO5sKq3jH2aLWfR6AqTVDXl3q_zKNxjFk1eUYZKXmXRY",
  });

  const accessToken = await oauth2Client.getAccessToken('');

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "tecnoacero56@gmail.com",
      clientId: "539217455050-s6fmu9kn7db9ue38vm8vc3085gfvi5np.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04JaNwPPrvA1QCgYIARAAGAQSNwF-L9IrcLpVwUNyb62SeIHoCUdyU6OQO5sKq3jH2aLWfR6AqTVDXl3q_zKNxjFk1eUYZKXmXRY",
      accessToken,
    },
  });

  const messageOptions = {
    from: "robertgabrielxd2@gmail.com", // Utiliza el alias configurado
    to: "tecnoacero56@gmail.com",
    subject: "Prueba de envío de correo",
    text: "Este es un mensaje de prueba enviado desde Node.js y Nodemailer.",
  };

  try {
    const info = await transporter.sendMail(messageOptions);
    console.log("Correo electrónico enviado:", info.response);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
}

sendEmail();
