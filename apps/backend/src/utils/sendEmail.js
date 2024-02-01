import nodemailer from 'nodemailer';
import 'dotenv/config';

export default async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: process.env.HOST,
			service: process.env.SERVICE,
			port: Number(process.env.EMAIL_PORT),
			secure: Boolean(process.env.SECURE),
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.GMAIL_USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log('email sent successfully');
	} catch (error) {
		console.log('email not sent!');
		console.log(error);
		return error;
	}
};
