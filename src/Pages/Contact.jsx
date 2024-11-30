import React from 'react';

const Contact = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <input type="text" placeholder="Your Name" className="border border-gray-400 p-2 w-full mb-4" required />
        <input type="email" placeholder="Your Email" className="border border-gray-400 p-2 w-full mb-4" required />
        <textarea placeholder="Your Message" className="border border-gray-400 p-2 w-full mb-4" rows="5" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;




