const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID || 'shaun-taliana';

export const submitContact = async (formData) => {
  const data = new FormData();

  // Handle single name field OR split first/last name
  if (formData.name && !formData.firstName) {
    const parts = formData.name.trim().split(' ');
    data.append('first_name', parts[0] || '');
    data.append('last_name', parts.slice(1).join(' ') || '');
  } else {
    data.append('first_name', formData.firstName || formData.first_name || '');
    data.append('last_name', formData.lastName || formData.last_name || '');
  }

  data.append('email', formData.email || '');
  data.append('phone', formData.phone || '');
  data.append('subject', formData.subject || formData.company || '');
  data.append('message', formData.message || '');

  const res = await fetch(`${BASE}/api/contact/submit`, {
    method: 'POST',
    headers: { 'x-project-id': PROJECT_ID },
    body: data
  });
  return res.json();
};
