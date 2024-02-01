import nodemailer from 'nodemailer';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const blog = 'https://blog.hamilton-labs.com/';

const transporter = nodemailer.createTransport({
	service: process.env.SERVICE,
	port: process.env.PORT,
	secure: process.env.SECURE,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.APP_PASSWORD,
	},
});

const mailOptions = {
	from: {
		name: process.env.NAME,
		address: process.env.SMTP_USER,
	}, // sender address
	to: [process.env.TO], // list of receivers
	subject: 'Testing HTML template from nodemailer! 🧪', // Subject line
	text: 'Test from nodemailer', // plain text body
	html: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;">
<head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- utf-8 works for most cases -->
    <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Forcing initial-scale shouldn't be necessary -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- Use the latest (edge) version of IE rendering engine -->
    <meta name="x-apple-disable-message-reformatting" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
    <title style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></title> <!-- The title tag shows in email notifications, like Android 4.4. -->



    <!-- CSS Reset : BEGIN -->


    <!-- CSS Reset : END -->

    <!-- Progressive Enhancements : BEGIN -->



</head>

<body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #415A77;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'Lato', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: #E5E5E5;height: 100% !important;width: 100% !important;">
	<center style="width: 100%;background-color: #415A77;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <div style="display: none;font-size: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;mso-hide: all;font-family: sans-serif;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
      &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
    </div>
    <div style="max-width: 600px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
    	<!-- BEGIN BODY -->
      <table align="center" class="logo bg_blue" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
      	<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td valign="top" class="logo bg_blue" style="padding: 1em 2.5em 0 2.5em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #0D1B2A;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
          	<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
          		<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          			<td class="logo bg_blue" style="text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #0D1B2A;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
			            <h1 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Lato', sans-serif;color: #E5E5E5;margin-top: 0;font-weight: 400;margin: 0;"><a href="#" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #fca311;font-size: 24px;font-weight: 700;font-family: 'Lato', sans-serif;">The Social NoteWork</a></h1>
			          </td>
          		</tr>
          	</table>
          </td>
	      </tr><!-- end tr -->
				<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <td valign="middle" class="hero bg_darkblue" style="padding: 2em 0 4em 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #1B263B;position: relative;z-index: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;margin: 0 auto !important;">
            	<tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            		<td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
            			<div class="text text_white" style="padding: 0 2.5em;text-align: center;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #E5E5E5;">
            				<h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Lato', sans-serif;color: #E5E5E5;margin-top: 0;font-weight: 400;font-size: 40px;margin-bottom: 0;line-height: 1.4;">Please verify your email</h2>
            				<h3 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Lato', sans-serif;color: #E5E5E5;margin-top: 0;font-weight: 300;font-size: 24px;">If you made this request click the button below.</h3>
            				<p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><a href="${blog}" class="btn btn-primary" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;color: #E5E5E5;padding: 10px 15px;display: inline-block;border-radius: 5px;background: #04AA6D;">Sign me up!</a></p>
            			</div>
            		</td>
            	</tr>
            </table>
          </td>
	      </tr><!-- end tr -->
      <!-- 1 Column Text + Button : END -->

    </table></div>
  </center>
</body>
</html>`, // html body
	attachments: [
		{
			filename: 'resume.pdf',
			path: path.join(__dirname, 'resume.pdf'),
			contentType: 'application/pdf',
		},
		{
			filename: 'logo.png',
			path: path.join(__dirname, 'logo.png'),
			contentType: 'image/png',
		},
	],
};

const sendMail = async (transporter, mailOptions) => {
	try {
		await transporter.sendMail(mailOptions);
		console.log('You got mail!');
	} catch (error) {
		console.error('Email not sent');
		console.error(error);
	}
};

sendMail(transporter, mailOptions);
