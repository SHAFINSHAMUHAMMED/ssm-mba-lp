import React, { useState } from "react";
import Claim_description from "../Description/claim_description";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    jobRole: "",
    location: "",
    email: "",
    whatsapp: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateCurrentStep = () => {
    let errors = {};
    let isValid = true;

    switch (currentStep) {
      case 1:
        if (!formData.name.trim()) {
          errors.name = "Name is required";
          isValid = false;
        }
        break;
      case 2:
        if (!formData.specialization.trim()) {
          errors.specialization = "Specialization is required";
          isValid = false;
        }
        break;
      case 3:
        if (!formData.jobRole.trim()) {
          errors.jobRole = "Job role is required";
          isValid = false;
        }
        break;
      case 4:
        if (!formData.location.trim()) {
          errors.location = "Location is required";
          isValid = false;
        }
        break;
      case 5:
        if (!formData.email.trim()) {
          errors.email = "Email is required";
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = "Email address is invalid";
          isValid = false;
        }
        break;
        case 6:
    const digits = formData.whatsapp.replace(/\D/g, '');
    if (!formData.whatsapp.trim()) {
      errors.whatsapp = "WhatsApp number is required";
      isValid = false;
    } else if (digits.length > 15) {
      errors.whatsapp = "Phone number is too long";
      isValid = false;
    } else if (digits.length < 8) {
      errors.whatsapp = "Phone number is too short";
      isValid = false;
    }
    break;
      default:
        break;
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (currentStep < 6) {
        setCurrentStep(currentStep + 1);
        // console.log(currentStep);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    // Webhook URL
    const webhookUrl =
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzMTA0MzA1MjY1NTUzZDUxMzAi_pc";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
        // Handle success
      } else {
        console.error("Failed to send form data");
        // Handle error
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      // Handle network error
    }
  };

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className="form-error">{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="form-question">
              Let’s take your career higher. But first, what do we call you?
            </h2>
            <p>This will only take 20 seconds (or less!)</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("name")}
          </>
        );
      case 2:
        return (
          <>
            <h2>
              Awesome, {formData.name}! Which specialization sparks your
              interest?
            </h2>
            <p>We want to make sure your journey is tailored just for you.</p>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("specialization")}
          </>
        );
      case 3:
        return (
          <>
            <h2>What's your current job role?</h2>
            <p>It's great to know where you're starting from!</p>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("jobRole")}
          </>
        );
      case 4:
        return (
          <>
            <h2>
              We'd love to know your location. Where are you currently based?
            </h2>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("location")}
          </>
        );
      case 5:
        return (
          <>
            <h2>
              For seamless communication, may we have your preferred email,{" "}
              {formData.name}?
            </h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError("email")}
          </>
        );
        case 6:
        return (
          <>
            <h2>
            And WhatsApp number?
            </h2>
            <p>To easily send you all the details</p>
            <PhoneInput
      country={'ae'}
      value={formData.whatsapp}
      placeholder={"Type Here..."}
      
      onChange={(phone) => setFormData({ ...formData, whatsapp: phone })}
    />
            {renderError("whatsapp")}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="icf-form-main" id="contactForm">
      <form className="icf-form">
        {renderForm()}
          <button type="button" onClick={nextStep}>
            {currentStep < 5 ? "CONTINUE" : "Claim Your Free Consultation Now"}
          </button>
      </form>
      <div className="form-svg-bg" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="156"
          height="75"
          viewBox="0 0 76 156"
          fill="none"
        >
          <path
            d="M39.2891 1L39.2891 128"
            stroke="#0B434B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.9297 110.985L39.2003 129.256L57.4709 110.985"
            stroke="#0B434B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="37.7907"
            cy="118.209"
            r="36.7907"
            transform="rotate(-90 37.7907 118.209)"
            stroke="#259D4A"
            stroke-width="2"
          />
        </svg>
      </div>
      <Claim_description color="rgba(11, 67, 75, 0.79)" />
    </div>
  );
};

export default MultiStepForm;
