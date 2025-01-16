import React, { useState } from "react";
import emailjs from "emailjs-com";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailKey = process.env.REACT_APP_EMAILJS_KEY;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, email, subject, message } = formData;
    const errors = {};
    let formIsValid = true;

    if (!firstName) {
      formIsValid = false;
      errors["firstName"] = "First name is required.";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Email is invalid.";
    }

    if (!subject) {
      formIsValid = false;
      errors["subject"] = "Subject is required.";
    }

    if (!message) {
      formIsValid = false;
      errors["message"] = "Message is required.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.send(serviceId, templateId, formData, emailKey).then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
          setSuccessMessage("Email sent successfully!");
          setErrorMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setErrorMessage("Failed to send email. Please try again later.");
          setSuccessMessage("");
        }
      );
    }
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to <a href="mailto:jacobdeansd@gmail.com">contact me</a>{" "}
            for any work, collaborations, or to get to know me.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="ten columns">
          <form id="contactForm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div>
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
            </div>
            <div>
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            <div>
              <button type="submit" className="submit">
                Send
              </button>
            </div>
            {successMessage && <p className="success">{successMessage}</p>}
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
