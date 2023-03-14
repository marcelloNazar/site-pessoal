const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: "",
    port: "",
    auth: {
      user: "",
      pass: "",
    },
  });
}
