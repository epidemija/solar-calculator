import nodemailer from "nodemailer";
export default async function SendToAdmin({ data }:any) {
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "fazlerabbistat@gmail.com", // Replace with your SMTP username
            pass: "kaojzgfrwkzgwmbh", // Replace with your SMTP password
        },
    });
    const mailOptions = {
        from: `"Solar Calculator" <${process.env.SMTP_SERVER_USERNAME}>`, // Sender address
        to: [ "beingfazle@gmail.com", "standort@wpower.eco" ], // List of recipients
        subject: "New Information Submitted", // Subject line

        html: `
        <h3>${data?.contactInfo?.salutation} ${data?.contactInfo.firstName} ${data?.contactInfo.sureName} Submitted Information</h3>
        <p>Land Type: ${data?.selectedLandType}</p>
        <p>Owns Land: ${data?.ownsLand}</p>
        <p>Land Size: ${data?.landSize}</p>
        <p>Land Connectivity: ${data?.landConnectivity}</p>
        <p>Currently Leased: ${data?.currentlyLeased}</p>
        <p>Interested To Lease: ${data?.interestedToLease}</p>
        <p>Motor Or Rail: ${data?.motorOrRail}</p>
        <p>Is Grid Entry Point: ${data?.isGridEntryPoint}</p>
        <p>Parcel Location: 
            <small> Hallway: ${data?.parcelLocation.hallway}</small>
            <small> District: ${data?.parcelLocation.district}</small>
            <small> Parcel Number: ${data?.parcelLocation.parcelNumber}</small>
            <small> Postcode: ${data?.parcelLocation.postcode}</small>
        </p>
        <p>Remuneration: ${data?.remuneration}</p>
        <p>Contact Info: 
            <small> Name: ${data?.contactInfo?.salutation} ${data?.contactInfo.firstName} ${data?.contactInfo.sureName}</small>
            <small> Email: ${data?.contactInfo.email}</small>
            <small> Phone: ${data?.contactInfo.phone}</small>
        </p>

        `, // html body
    };

    // Send email
    await transporter.sendMail(mailOptions);

}




