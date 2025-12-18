import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  company?: string;
}

export const initEmailJs = (publicKey: string) => {
  emailjs.init(publicKey);
};

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  params: EmailParams
): Promise<boolean> => {
  try {
    await emailjs.send(serviceId, templateId, {
      from_name: params.name,
      from_email: params.email,
      message: params.message,
      subject: params.subject || 'Contact Form Submission',
      phone_number: params.phone || 'Not provided',
      company: params.company || 'Not provided',
    });
    return true;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};