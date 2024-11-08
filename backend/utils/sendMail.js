const nodemailer = require("nodemailer");

const Sendmail = async (to, subject, html) => {
    // Validating input parameters
    if (!to || !subject || !html) {
        throw new Error("All parameters (to, subject, html) are required.");
    }

    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE || "Gmail", 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            html,
        });
        console.log("Email sent: ", info.response); 
        return info; 
    } catch (error) {
        console.error("Error sending email: ", error); 
        throw new Error("Failed to send email: " + error.message);
    }
}

module.exports = Sendmail;