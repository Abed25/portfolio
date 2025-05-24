// src/app/api/send-email/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, projectType, message } = await req.json();

  if (!name || !email || !projectType || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Create a transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // This should be an App Password from your Google Account
    }
  });

  const emailHtml = `
    <h2>New Project Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email, // Set reply-to as the sender's email
      subject: `New Project Inquiry from ${name}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Email sent successfully!" 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Email sending error:', err);
    return new Response(JSON.stringify({ 
      success: false,
      error: "Failed to send email. Please try again later." 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
