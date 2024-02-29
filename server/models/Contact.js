const mongoose = require("mongoose");
const {contactUsEmail} = require("../templates/contactFormRes")
const mailSender = require("../utils/mailSender");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        trim: true,
        required:true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
})

async function sendVerificationEmail(email, name, subject, message) {
	// Create a transporter to send emails

	// Define the email options

	// Send the email
	try {
		const mailResponse = await mailSender(
			email,
			"Contact Confirmation Email",
			contactUsEmail(name,email,subject,message),
		);
        // console.log("HMM");
		const mailResponse2 = await mailSender(
			"sachinkumar46669@gmail.com",
			`Contact Message by ${name}`,
			contactUsEmail(name,email,subject,message),
		);
        // console.log("hey you");
	} catch (error) {
		// console.log("Error occurred while sending email: ", error);
		throw error;
	}
}

// Define a post-save hook to send email after the document has been saved
contactSchema.pre("save", async function (next) {
	// console.log("New document saved to database");

	// Only send an email when a new document is created
	if (this.isNew) {
		await sendVerificationEmail(this.email, this.name, this.subject, this.message);
	}
	next();
});

module.exports = mongoose.model("contact", contactSchema);