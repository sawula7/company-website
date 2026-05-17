import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const COMPANY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_COMPANY_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  if (!SERVICE_ID || !COMPANY_TEMPLATE_ID || !AUTOREPLY_TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are not configured.');
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    company: data.company || 'N/A',
    message: data.message,
    to_email: 'info@beetech.lk',
  };

  // Send notification to BeeTech
  await emailjs.send(SERVICE_ID, COMPANY_TEMPLATE_ID, templateParams, PUBLIC_KEY);

  // Send auto-reply to customer
  await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
