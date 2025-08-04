const sgmail = require("@sendgrid/mail");
sgmail.setApiKey(process.env.EMAIL_API_KEY);

const sendEmail = async (to, subject, html) => {
  const msg = {
    to,
    from: process.env.SENDER,
    subject,
    html,
  };
  await sgmail.send(msg);
  console.log("mail send to", to);
};

module.exports = sendEmail;
