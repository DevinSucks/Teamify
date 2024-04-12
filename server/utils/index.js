import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import nodemailer from "nodemailer"

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Database connected to server");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token)

};

const fetchData = async (method, url, data = null) => {
   
    try {
      let response;
      if (method === 'GET') {
        response = await fetch(url);
      } else if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
        const requestOptions = {
          method: method,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        response = await fetch(url, requestOptions);
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to handle it in the component if needed
    }
  };
  
  export default fetchData;
  



// export const html =  `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Mail Alert</title>
//     <style>
//         /* Your CSS styles for the email alert can go here */
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             padding: 20px;
//         }
//         .alert {
//             background-color: #fff;
//             border-radius: 5px;
//             box-shadow: 0 2px 5px rgba(0,0,0,0.1);
//             padding: 20px;
//             margin-bottom: 20px;
//         }
//         .alert h2 {
//             margin-top: 0;
//             color: #333;
//         }
//         .alert p {
//             margin-bottom: 0;
//         }
//     </style>
// </head>
// <body>
//     <div class="alert">
//         <h2>Mail Alert</h2>
//         <p>${text}</p>
//     </div>
// </body>
// </html>`

export const mailer = async (to,text) => {
    // Async function enables allows handling of promises with await
    
      // First, define send settings by creating a new transporter: 
      let transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com", // SMTP server address (usually mail.your-domain.com)
        port: 587, // Port for SMTP (usually 465)
        auth: {
          user: process.env.EMAIL_ID, 
          pass: process.env.EMAIL_PASSWORD, 

        },
      });

      try{
      
      // Define and send message inside transporter.sendEmail() and await info about send from promise:
      let info = await transporter.sendMail({
        from: process.env.EMAIL_ID,
        to: "hpkagr494@gmail.com",
        subject: `${text}`,
        html: `
        <h1>Hello there</h1>
        <p>Notofication from Teamify</p>
        `,
      });
    
      console.log(info.messageId); // Random ID generated after successful send (optional)
    }
    catch(error){
        console.log(error)
    }
    }
  