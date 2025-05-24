// src/app/api/send-email/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, projectType, message } = await req.json();

  if (!name || !email || !projectType || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const emailHtml = `
    <h2>New Project Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "your-email@example.com",
      subject: `New Inquiry from ${name}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ message: "Email sent!" }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
