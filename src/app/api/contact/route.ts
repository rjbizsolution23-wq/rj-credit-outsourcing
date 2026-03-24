import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const ContactSchema = z.object({
  name:       z.string().min(2).max(100),
  email:      z.string().email(),
  company:    z.string().min(2).max(100),
  volume:     z.string().min(1),
  tier:       z.string().min(1),
  message:    z.string().max(2000).optional(),
})

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json() as unknown
    const data = ContactSchema.parse(body)

    await resend.emails.send({
      from: `Credit AGI B2B <${process.env.EMAIL_FROM}>`,
      to:   ['partners@rickjeffersonsolutions.com'],
      subject: `🔥 New CRO Partner Lead: ${data.company} (${data.volume} files/mo)`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#635bff">New CRO Partner Inquiry</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${data.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${data.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #eee">${data.company}</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Monthly Volume</td><td style="padding:8px;border:1px solid #eee">${data.volume} files</td></tr>
            <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Tier Interest</td><td style="padding:8px;border:1px solid #eee">${data.tier}</td></tr>
            ${data.message ? `<tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${data.message}</td></tr>` : ''}
          </table>
          <p style="color:#888;font-size:12px;margin-top:24px">Rick Jefferson Credit AGI B2B · ${new Date().toLocaleString()}</p>
        </div>
      `,
    })

    // Auto-reply to lead
    await resend.emails.send({
      from:    `Rick Jefferson Credit AGI <${process.env.EMAIL_FROM}>`,
      to:      [data.email],
      subject: '✅ We received your CRO partnership inquiry',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0f;color:#e8e8f0;padding:32px;border-radius:16px">
          <h2 style="color:#635bff">Thanks, ${data.name}!</h2>
          <p>We've received your inquiry for <strong>${data.company}</strong> and our team will be in touch within 4 business hours.</p>
          <p>In the meantime, you can <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL}" style="color:#635bff">book your free consultation here</a>.</p>
          <hr style="border:1px solid #1a1a2e;margin:24px 0"/>
          <p style="font-size:12px;color:#555">Rick Jefferson Solutions · partners@rickjeffersonsolutions.com · (555) 867-5309</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data', issues: err.errors }, { status: 400 })
    }
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
