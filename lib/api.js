const BASE = process.env.NEXT_PUBLIC_API_URL || 'https://master-backend-production-0e27.up.railway.app';
const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID || 'shaun-taliana2';

export async function submitContact(formData) {
  const data = new FormData();

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
  data.append('subject', formData.subject || '');
  data.append('message', formData.message || '');

  const res = await fetch(`${BASE}/api/contact/submit`, {
    method: 'POST',
    headers: { 'x-project-id': PROJECT_ID },
    body: data,
  });

  return res.json();
}
