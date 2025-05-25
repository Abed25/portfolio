import TelegramBot from 'node-telegram-bot-api';

export async function POST(req) {
  const { name, email, projectType, message } = await req.json();

  if (!name || !email || !projectType || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Validate Telegram configuration
  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    return new Response(JSON.stringify({ 
      error: "Telegram configuration is missing" 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

  const telegramMessage = `
🔔 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📋 Project: ${projectType}
💬 Message: ${message}
  `.trim();

  try {
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, telegramMessage, {
      parse_mode: 'HTML'
    });

    return new Response(JSON.stringify({ 
      success: true,
      message: "Telegram notification sent successfully!" 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Telegram sending error:', err);
    return new Response(JSON.stringify({ 
      success: false,
      error: "Failed to send Telegram notification. Please try again later." 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
} 