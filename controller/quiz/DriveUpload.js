import Questions from "../../model/Questions.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
// import credentials from "../../GoogleApisKey.json" assert { type: "json" };
import stream from "stream";
const app = express();
import cookieParser from "cookie-parser";
import { google } from "googleapis";
app.use(cookieParser());
const SCOPES = ["https://www.googleapis.com/auth/drive"];
// const credentials = process.env.Credentials;
async function authorize() {
  // Replace with your credentials path
  //   const credentials = require("../../GoogleApisKey.json");
  const client = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    SCOPES
  );
  await client.authorize();
  return client;
}

router.post("/", async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    // const Data = req.body.pdfData;
    // console.log(req);
    // if (!firstName || !lastName || !email || !password) {
    //   res.status(400).json({ Mess: "Enter ALl the Values" });
    // Handle the error here (e.g., send an error response)
    console.log("DRIVE UPLOAD");
    // console.log(Data);
    // console.log(credentials);
    const client = await authorize();
    // console.log("CLIENTS", client);
    // console.log(req.body);
    const drive = google.drive({ version: "v3", auth: client });

    // // Extract PDF data from request body
    const pdfData = Buffer.from(req.body.pdfData, "base64"); // Decode base64 string
    const fileMetadata = {
      name: "quiz_results.pdf", // Replace with your desired filename
      mimeType: "application/pdf",
    };

    // Create a media object with the PDF data
    const media = {
      mimeType: "application/pdf",
      body: new stream.PassThrough().end(pdfData), // Modified
      //   body: ,
    };

    const uploadedFile = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id, webViewLink", // Include webViewLink for download access
    });
    // console.log(uploadedFile);
    const accessLink = uploadedFile.data.webViewLink;

    res.json({ success: true, accessLink });

    // res.status(200).json("aaa");
    return;
  } catch (err) {
    // console.log("jjj");
    // console.log("Error", err.message);

    res.status(500).json({ Error: err.message });
    return;
  }
});
export default router;
