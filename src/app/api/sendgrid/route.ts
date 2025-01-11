import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";
import prisma from "@/lib/prisma";

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferredDate, address, service, message } =
      body;

    // Validate the required fields
    if (!name || !email || !phone || !address || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add the consultation request to the database
    const newRequest = await prisma.consultationRequest.create({
      data: {
        name,
        email,
        phone,
        preferredDate: preferredDate ? new Date(preferredDate) : null,
        address,
        service,
        message: message,
      },
    });

    // Create the email message with a nicely formatted HTML body
    const msg = {
      to: "contact@blackcatwebsitedesign.com", // Replace with your company's email
      from: "contact@blackcatwebsitedesign.com", // Replace with your verified SendGrid sender
      subject: "New Roofing Consultation Request",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Preferred Date: ${
          preferredDate
            ? new Date(preferredDate).toLocaleDateString()
            : "Not specified"
        }
        Address: ${address}
        Service Needed: ${service}
        Message: ${message || "No additional message"}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Roofing Consultation Request</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            h1 {
              color: #1E293B;
              border-bottom: 2px solid #E07A5F;
              padding-bottom: 10px;
            }
            .info-item {
              margin-bottom: 15px;
            }
            .info-label {
              font-weight: bold;
              color: #1E293B;
            }
            .info-value {
              margin-left: 10px;
            }
            .message-box {
              background-color: #f0f0f0;
              border-left: 4px solid #E07A5F;
              padding: 15px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <h1>New Roofing Consultation Request</h1>
          <div class="info-item">
            <span class="info-label">Name:</span>
            <span class="info-value">${name}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Email:</span>
            <span class="info-value">${email}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Phone:</span>
            <span class="info-value">${phone}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Preferred Date:</span>
            <span class="info-value">${
              preferredDate
                ? new Date(preferredDate).toLocaleDateString()
                : "Not specified"
            }</span>
          </div>
          <div class="info-item">
            <span class="info-label">Address:</span>
            <span class="info-value">${address}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Service Needed:</span>
            <span class="info-value">${service}</span>
          </div>
          <div class="message-box">
            <span class="info-label">Additional Message:</span>
            <p>${message || "No additional message provided."}</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    // Redirect to the thank you page
    return NextResponse.json(
      { message: "Email sent successfully", redirect: "/thank-you" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}
