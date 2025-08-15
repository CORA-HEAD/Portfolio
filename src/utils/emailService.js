// Email service configuration
// This would typically integrate with EmailJS, SendGrid, or similar services

export const emailConfig = {
    serviceId: 'your_service_id',
    templateId: 'your_template_id',
    userId: 'your_user_id'
}

export const sendEmail = async (formData) => {
    try {
        // Simulate email sending
        console.log('Sending email:', formData)

        // In a real implementation, you would use EmailJS or similar:
        /*
        const response = await emailjs.send(
          emailConfig.serviceId,
          emailConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Alex Rodriguez'
          },
          emailConfig.userId
        )
        */

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            success: true,
            message: 'Email sent successfully!'
        }
    } catch (error) {
        console.error('Email sending failed:', error)
        return {
            success: false,
            message: 'Failed to send email. Please try again.'
        }
    }
}

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validateForm = (formData) => {
    const errors = {}

    if (!formData.name.trim()) {
        errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
        errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
        errors.message = 'Message is required'
    } else if (formData.message.length < 10) {
        errors.message = 'Message must be at least 10 characters long'
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    }
} 