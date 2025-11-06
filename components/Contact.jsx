import { useRef } from 'react';
import emailjs from 'emailjs-com';
export default function Contact({data}) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // NOTE: user must set EmailJS keys in the client after deployment
    emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => { alert('Message sent — replace EmailJS keys in code.'); }, (error) => { alert('Failed to send — configure EmailJS.'); });
  };
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-gray-600">Want to collaborate or hire? Reach out.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border">
            <div className="font-semibold">Email</div>
            <div className="mt-1 text-gray-700">{data.email}</div>
            <div className="font-semibold mt-4">Phone</div>
            <div className="mt-1 text-gray-700">{data.phone}</div>
            <a className="mt-4 inline-block text-indigo-600" href="/public/resume.pdf" download>Download Resume</a>
          </div>
          <form ref={form} onSubmit={sendEmail} className="p-6 rounded-lg border bg-white">
            <label className="block text-sm">Name<input name="user_name" required className="w-full mt-2 p-2 border rounded" /></label>
            <label className="block text-sm mt-3">Email<input name="user_email" type="email" required className="w-full mt-2 p-2 border rounded" /></label>
            <label className="block text-sm mt-3">Message<textarea name="message" required className="w-full mt-2 p-2 border rounded" /></label>
            <button className="mt-4 px-4 py-2 rounded bg-indigo-600 text-white">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
