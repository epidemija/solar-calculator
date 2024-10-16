// File: pages/api/sendEmail.ts

import SendToAdmin from "@/lib/sendtoadmin";
import SendToUser from "@/lib/sendtouser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {

        const data = await req.json();
        // console.log("Received data:", data);

        const { selectedLandType, ownsLand, landSize, landConnectivity, currentlyLeased, interestedToLease, motorOrRail, isGridEntryPoint, parcelLocation, remuneration, contactInfo } = data;
        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     host: "smtp.ethereal.email",
        //     port: 587,
        //     auth: {
        //         user: process.env.SMTP_SERVER_USERNAME, // Replace with your SMTP username
        //         pass: process.env.SMTP_SERVER_PASSWORD, // Replace with your SMTP password
        //     },
        // });
        // const mailOptions = {
        //     from: `"Solar Calculator" <${process.env.SMTP_SERVER_USERNAME}>`, // Sender address
        //     to: contactInfo.email, // List of recipients
        //     subject: "New Contact Information", // Subject line
        //     text: `Salutation: ${salutation}\nFirst Name: ${firstName}\nSure Name: ${sureName}\nEmail: ${email}\nPhone: ${phone}`, // Plain text body
        // };

        // // Send email
        // await transporter.sendMail(mailOptions);

        
        await new Promise((resolve, reject) => { 
            SendToUser({ contactInfo })
            .then(() => {
                resolve("Email sent to user");
            }
            )
            .catch((error) => {
                reject(error);
            });
        }
        );
            


        await  SendToAdmin({ data });

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
    }
}

