import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    jobRole: '',
    location: '',
    email: '',
  });
  console.log(formData);

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
      default:
        break;
    }

    setFormErrors(errors);
    return isValid;
  };

  const nextStep = () => {
    console.log(1222);
    if (validateCurrentStep()) {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
        console.log(currentStep);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  const renderError = (fieldName) => {
    if (formErrors[fieldName]) {
      return <p className="error">{formErrors[fieldName]}</p>;
    }
    return null;
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2>Let’s take your career higher. But first, what do we call you?</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError('name')}
          </>
        );
      case 2:
        return (
          <>
            <h2>Awesome, {formData.name}! Which specialization sparks your interest?</h2>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError('specialization')}
          </>
        );
      case 3:
        return (
          <>
            <h2>What's your current job role?</h2>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError('jobRole')}
          </>
        );
      case 4:
        return (
          <>
            <h2>We'd love to know your location. Where are you currently based?</h2>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError('location')}
          </>
        );
      case 5:
        return (
          <>
            <h2>For seamless communication, may we have your preferred email, {formData.name}?</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Type Here..."
            />
            {renderError('email')}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <form>
        {renderForm()}
        <div className="buttons">
          <button type="button" onClick={nextStep}>
            {currentStep < 5 ? 'CONTINUE' : 'SUBMIT'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
