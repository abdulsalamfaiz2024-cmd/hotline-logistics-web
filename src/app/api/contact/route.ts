import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    // Build a beautiful corporate HTML email body
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; direction: rtl; text-align: right; background-color: #f7f9fc; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0;">
        <div style="background-color: #0a1628; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">هوت لاين إنترناشيونال</h2>
          <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">طلب إستفسار جديد من الموقع الإلكتروني</p>
        </div>
        <div style="background-color: #ffffff; padding: 25px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
          <p style="font-size: 16px; color: #1e293b; line-height: 1.6; margin-bottom: 20px;">
            مرحباً، لقد تم إرسال استفسار جديد من قبل أحد زوار الموقع الإلكتروني. التفاصيل أدناه:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0a1628; width: 120px;">الاسم الكامل:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0a1628;">رقم الهاتف:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155; direction: ltr; text-align: right;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0a1628;">البريد الإلكتروني:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #334155;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0a1628;">الخدمة المطلوبة:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #d97706; font-weight: bold;">${service}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; border-right: 4px solid #ef4444; padding: 15px; border-radius: 4px; margin-top: 15px;">
            <p style="font-weight: bold; color: #0a1628; margin: 0 0 8px 0;">نص الرسالة:</p>
            <p style="color: #475569; margin: 0; line-height: 1.6; font-style: italic;">"${message}"</p>
          </div>
          <div style="margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="font-size: 12px; color: #64748b; margin: 0;">هذه الرسالة مرسلة تلقائياً من نظام الموقع الإلكتروني لـ هوت لاين إنترناشيونال.</p>
          </div>
        </div>
      </div>
    `;

    // Send using Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `New Client: ${name} <contact@hotline-int-ye.com>`,
        to: ["contact@hotline-int-ye.com"],
        reply_to: email,
        subject: `New Client: ${name}`,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API Error:", errText);
      return NextResponse.json({ error: errText }, { status: res.status });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: error?.message || "Internal Server Error" }, { status: 500 });
  }
}
