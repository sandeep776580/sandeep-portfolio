import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY || ''

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 500 })
  }

  const body = await request.json()
  const { name, email, subject, message } = body

  const resend = new Resend(resendApiKey)

  try {
    await resend.emails.send({
      from: 'no-reply@example.com',
      to: 'sandeep.official.593@gmail.com',
      subject: `Portfolio Contact: ${subject || 'No subject'}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to send'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
