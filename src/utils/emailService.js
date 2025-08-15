// emailService.js
import emailjs from 'emailjs-com';
// Load environment variables from .env
const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAIL_USER_ID;

/**
 * Send an email using EmailJS or a similar service
 * @param {Object} formData - { name, email, subject, message }
 */
export const sendEmail = async (formData) => {
  try {
    console.log('Sending email:', formData);
   
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Anmol Futela',
      },
      USER_ID
    );

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      message: 'Email sent successfully!',
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
    };
  }
};

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate contact form
 * @param {Object} formData
 * @returns {Object} { isValid: boolean, errors: object }
 */
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name.trim()) errors.name = 'Name is required';

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.subject.trim()) errors.subject = 'Subject is required';

  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
