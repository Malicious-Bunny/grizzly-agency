"use client";

import React, { useState } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.' });
        setFormData({ name: "", email: "", company: "", phone: "", message: "", budget: "" });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>

        {submitStatus && (
          <div className={`mt-4 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(value) => handleInputChange('name', value)}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(value) => handleInputChange('email', value)}
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={(value) => handleInputChange('company', value)}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(value) => handleInputChange('phone', value)}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={(value) => handleInputChange('message', value)}
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="$25K – $50K"
                name="budget"
                value="25"
                checked={formData.budget === "25"}
                onChange={(value) => handleInputChange('budget', value)}
              />
              <RadioInput
                label="$50K – $100K"
                name="budget"
                value="50"
                checked={formData.budget === "50"}
                onChange={(value) => handleInputChange('budget', value)}
              />
              <RadioInput
                label="$100K – $150K"
                name="budget"
                value="100"
                checked={formData.budget === "100"}
                onChange={(value) => handleInputChange('budget', value)}
              />
              <RadioInput
                label="More than $150K"
                name="budget"
                value="150"
                checked={formData.budget === "150"}
                onChange={(value) => handleInputChange('budget', value)}
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Let\'s work together'}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
