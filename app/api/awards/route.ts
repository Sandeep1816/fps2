import { InternalEmailHandler } from "@/app/components/emailHandlers/InternalEmail";
import { ThankYouEmailHandler } from "@/app/components/emailHandlers/thankYouEmail";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      jobTitle,
      companyName,
      email,
      phone,
      country,
      awardCategory,
      message,
      utm_source,
      utm_medium,
      utm_campaign,
    } = body;

    // Send to Google Apps Script
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const scriptResponse = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, type: "awards" }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!scriptResponse.ok) {
        const errText = await scriptResponse.text();
        console.error("Google Script Error Response:", errText);
        throw new Error("Google Apps Script error");
      }
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
    }

    // Excel buffer (optional)
    const worksheet = XLSX.utils.json_to_sheet([
      {
        Name: name,
        "Job Title": jobTitle,
        "Company Name": companyName,
        Email: email,
        Phone: phone,
        Country: country,
        "Award Category": awardCategory,
        Message: message,
        "UTM Source": utm_source,
        "UTM Medium": utm_medium,
        "UTM Campaign": utm_campaign,
        Date: new Date().toLocaleString(),
      },
    ]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Awards");
    const excelBuffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    // Email setup
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const internalEmailHtml = InternalEmailHandler({ formType: "Awards", formData: body });

    const mailOptions = {
      from: `"Future Proptech Summit - Awards" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_USER,
      subject: "New Awards Submission - Future Proptech Summit",
      html: internalEmailHtml,
      // attachments: [
      //   {
      //     filename: "AwardsSubmission.xlsx",
      //     content: excelBuffer,
      //   },
      // ],
    };

    const thankYouHtml = ThankYouEmailHandler({ name });

    const thankYouMailOptions = {
      from: `"Future Proptech Summit" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for submitting your nomination - Future Proptech Summit",
      html: thankYouHtml,
    };

    await transporter.sendMail(thankYouMailOptions);
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Awards form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Awards form submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit awards form" }, { status: 500 });
  }
}
