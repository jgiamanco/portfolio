import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const emailKey = process.env.REACT_APP_EMAILJS_KEY;

Modal.setAppElement("#root");

const ContactUs = ({ modalIsOpen, closeModal, openModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (modalIsOpen) {
      rootElement.setAttribute("inert", "true");
    } else {
      rootElement.removeAttribute("inert");
    }
  }, [modalIsOpen]);

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
          setFormData({
            firstName: "",
            email: "",
            subject: "",
            message: "",
          });
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
      <button
        className="contact-button"
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        Contact Me
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">
          X
        </button>
        {successMessage ? (
          <div className="success-message">
            <p>{successMessage}</p>
            <button onClick={closeModal} className="close-button">
              Close
            </button>
          </div>
        ) : (
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="subject">
                Subject <span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              ></textarea>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            <div className="form-button">
              <button type="submit" className="submit">
                Send
              </button>
            </div>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </form>
        )}
      </Modal>
    </section>
  );
};

export default ContactUs;
