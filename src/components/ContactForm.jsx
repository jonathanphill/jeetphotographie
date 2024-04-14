// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './ContactForm.css';
import Footer from './Footer'; // Import the Footer component

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    // Here you would typically send the data to a server
    console.log("Form data submitted:", formData);
    alert("Form submitted!");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="formContainer wrapper">
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label htmlFor="mail">Email:</label>
            <input type="email" id="mail" name="user_email" />
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
        </ul>
      </form>

      <Footer />
    </div>
  );
};

export default ContactForm;
