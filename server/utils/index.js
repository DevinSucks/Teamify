import jwt from "jsonwebtoken";
import mongoose from "mongoose";

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

const text = "hello";

export const html =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail Alert</title>
    <style>
        /* Your CSS styles for the email alert can go here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .alert {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        .alert h2 {
            margin-top: 0;
            color: #333;
        }
        .alert p {
            margin-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="alert">
        <h2>Mail Alert</h2>
        <p>${text}</p>
    </div>
</body>
</html>`
