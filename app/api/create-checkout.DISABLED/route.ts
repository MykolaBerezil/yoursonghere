import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Create Stripe Checkout Session for $250 deposit
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Custom Song - 50% Deposit',
              description: `For: ${formData.recipientName} | Occasion: ${formData.occasion}`,
            },
            unit_amount: 25000, // $250 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/create/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/create`,
      metadata: {
        customerName: formData.customerName,
        email: formData.email,
        phone: formData.phone,
        occasion: formData.occasion,
        recipientName: formData.recipientName,
      }
    })

    // Send notification email to Jeff
    await resend.emails.send({
      from: 'YourSongHere <orders@yoursonghere.com>',
      to: process.env.NOTIFICATION_EMAIL!,
      subject: `🎵 NEW SONG ORDER - ${formData.occasion} for ${formData.recipientName}`,
      html: `
        <h2>New Custom Song Order!</h2>
        
        <h3>Customer Info:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.customerName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Best time to contact:</strong> ${formData.bestTimeToContact}</li>
        </ul>

        <h3>Order Details:</h3>
        <ul>
          <li><strong>Occasion:</strong> ${formData.occasion}</li>
          <li><strong>For:</strong> ${formData.recipientName}</li>
          <li><strong>Relationship:</strong> ${formData.relationship || 'N/A'}</li>
          <li><strong>Date Needed:</strong> ${formData.dateNeeded || 'Not specified'}</li>
        </ul>

        <h3>Their Story:</h3>
        <p><strong>Key Memories:</strong><br>${formData.memories.replace(/\n/g, '<br>')}</p>
        <p><strong>Inside Jokes:</strong><br>${formData.insideJokes || 'None specified'}</p>
        <p><strong>Personality:</strong><br>${formData.personality || 'Not specified'}</p>
        <p><strong>Specific Details:</strong><br>${formData.specificDetails || 'None'}</p>
        <p><strong>Tone:</strong> ${formData.tone}</p>

        <h3>Musical Preferences:</h3>
        <ul>
          <li><strong>Genres:</strong> ${formData.genres?.join(', ') || 'None selected'}</li>
          <li><strong>Reference Artists:</strong> ${formData.referenceArtists || 'None'}</li>
          <li><strong>Tempo:</strong> ${formData.tempo}</li>
          <li><strong>Special Requests:</strong> ${formData.specialRequests || 'None'}</li>
        </ul>

        <h3>Payment:</h3>
        <p><strong>Deposit:</strong> $250 (Processing...)</p>
        <p><strong>Balance:</strong> $250 (due on delivery)</p>
        <p><strong>Stripe Session ID:</strong> ${session.id}</p>

        <hr>
        <p><strong>Next Steps:</strong></p>
        <ol>
          <li>Wait for payment confirmation</li>
          <li>Contact customer within 24 hours</li>
          <li>Begin song creation</li>
        </ol>
      `
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
