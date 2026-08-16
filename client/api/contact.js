const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { firstName, lastName, email, phone, service, message } = req.body || {};

  if (!firstName || !lastName || !email || !service || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in all required fields.',
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';
  const to = process.env.EMAIL_TO || 'duodevelopers2026@gmail.com';

  if (!apiKey) {
    return res.status(500).json({
      success: false,
      message: 'Resend API key is not configured.',
    });
  }

  try {
    const resend = new Resend(apiKey);

    const response = await resend.emails.send({
      from,
      to: [to],
      subject: `New inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111827;">
          <h2 style="margin-bottom: 12px;">New contact form submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
      text: `New contact form submission\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nService: ${service}\n\nMessage:\n${message}`,
    });

    if (response.error) {
      const resendMessage = response.error?.message || 'Resend rejected the email request.';
      console.error('Resend error:', response.error);

      return res.status(500).json({
        success: false,
        message: resendMessage.includes('from') || resendMessage.includes('sender')
          ? 'Resend sender email is not verified. In Resend, add a verified sender and set EMAIL_FROM to that verified address.'
          : resendMessage,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
};
