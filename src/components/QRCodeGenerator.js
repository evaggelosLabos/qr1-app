import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const [phone, setPhone] = useState("+306945474102");
  const [email, setEmail] = useState("info@yourcompany.com");
  const [website, setWebsite] = useState("https://autoplan.gr/el/");

  // Use your Render deployment URL
  const deployedURL = "https://qr1-app.onrender.com";

  // Default language is English
  const contactPageURL = `${deployedURL}/contactpage/contact.html?phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&website=${encodeURIComponent(website)}&lang=en`;

  return (
    <div>
      <h2>Scan for Contact Info</h2>
      <QRCodeCanvas value={contactPageURL} size={200} />

      <h3>Preview</h3>
      <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
      <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      <p><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
    </div>
  );
};

export default QRCodeGenerator;

