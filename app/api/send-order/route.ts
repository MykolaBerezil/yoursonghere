import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const emailBody = `
NEW CUSTOM SONG ORDER

OCCASION: ${formData.occasion}
RECIPIENT: ${formData.recipientName}
RELATIONSHIP: ${formData.relationship}
DATE NEEDED: ${formData.dateNeeded}

MEMORIES:
${formData.memories}

INSIDE JOKES:
${formData.insideJokes || 'Not provided'}

PERSONALITY:
${formData.personality || 'Not provided'}

SPECIFIC DETAILS:
${formData.specificDetails || 'Not provided'}

TONE: ${formData.tone}
GENRES: ${formData.genres?.join(', ') || 'Not specified'}
REFERENCE ARTISTS: ${formData.referenceArtists || 'Not provided'}
TEMPO: ${formData.tempo || 'Not specified'}

SPECIAL REQUESTS:
${formData.specialRequests || 'None'}

CONTACT INFO:
Name: ${formData.customerName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Best time to contact: ${formData.bestTimeToContact || 'Any time'}

PRICE: $500 ($250 deposit, $250 on delivery)
    `.trim();

    const { data, error } = await resend.emails.send({
      from: 'YourSongHere <orders@yoursonghere.com>',
      to: ['jinglejeff@gmail.com'],
      replyTo: formData.email,
      subject: `Custom Song Order - ${formData.recipientName}`,
      text: emailBody,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
