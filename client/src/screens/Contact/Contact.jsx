import React, { useState } from "react";
import './Contact.css'
const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    if (!e.target.checkValidity())
      setStatus("Sending...");
    const { name, email, message, number } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      number: message.value,
    };
    let response = await fetch("http://localhost:30001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    console.log(response);
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='contact-form'>
        <div className='first-section'>
          <h1>
            Contact us and we will get back to you within 24 hours.
            </h1>
          <br />
          <span>
            <i className="fas fa-map-marker-alt"></i>
                      Somerville,MA
                  </span>
          <br />
          <span>
            <i className="fas fa-mobile-alt"></i>
                      +123 456 7890
                  </span>
          <br />
          <span>
            <i className="far fa-envelope"></i>
                      realtors-inc@gmail.com
                  </span>
        </div>
        <div className="bottom-form">
          <label htmlFor="name" required>Name:</label>
          <input className="contact-form-input" type="text" id="name" required />
          <label htmlFor="email" required>Email:</label>
          <input  className="contact-form-input" type="email" id="email" required />
          <label htmlFor="phone" required>Phone Number:</label>
          <input  className="contact-form-input" type="number" id="number" required />
          <label htmlFor="message" required>Message:</label>
          <textarea  className="contact-form-input" id="message" required />
          <button  className="contact-form-button"type="submit">{status}</button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
