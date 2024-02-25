// pages/api/shorten.js

import shortid from "shortid";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { originalUrl } = req.body;
    // Here you can perform validation on the original URL if needed

    // For simplicity, just generating a random short id
    const shortId = shortid.generate();
    const shortenedUrl = `${process.env.BASE_URL}/${shortId}`;

    // In a real-world scenario, you would save the original and shortened URLs to a database

    res.status(201).json({ shortenedUrl });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
