import nodemailer from "nodemailer";
export default async function SendToUser({ contactInfo }:any) {
    console.log("Sending email to user", contactInfo?.email);
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "fazlerabbistat@gmail.com", // Replace with your SMTP username
            pass: "kaojzgfrwkzgwmbh", // Replace with your SMTP password
        },
    });
    const mailOptions = {
        from: `"Solar Calculator" <${process.env.SMTP_SERVER_USERNAME}>`, // Sender address
        to: contactInfo?.email, // List of recipients
        subject: "WPOWER Information Submission", // Subject line
        html: `
        <h6>Hi ${contactInfo?.salutation} ${contactInfo.firstName} ${contactInfo.sureName}, </h6>
        <h3>Thank you for your submission</h3>
        <p>We will get back to you shortly</p>
        `, // html body
    };

    // Send email
    // await transporter.sendMail(mailOptions);

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent!');
        } else {
          reject(err);
        }
      });
    });

}




