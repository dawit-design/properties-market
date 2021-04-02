import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    if(!e.target.checkValidity())
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:30001/contact", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json;charset=utf-8",
      // },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" required>Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email" required>Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message" required>Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default Contact;
