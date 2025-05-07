import { motion } from 'framer-motion';

export default function Contact({ isDark }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:jibinjithinyesudas@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className={`py-16 px-4 max-w-3xl mx-auto text-center ${isDark ? 'bg-black text-pink-400' : 'bg-white text-black'}`}>
      <motion.h2
        className={`text-4xl md:text-5xl font-arcade mb-10 ${isDark ? 'text-pink-400' : 'text-black'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        📬 Contact Me
      </motion.h2>

      <p className={`mb-8 ${isDark ? 'text-pink-200' : 'text-gray-700'}`}>
        I'd love to hear from you! Whether it’s feedback, collaboration ideas, or just to say hello, drop a message below and I’ll get back to you.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-5 p-6 rounded-lg border shadow-md ${isDark ? 'bg-zinc-900 border-pink-400' : 'bg-gray-100 border-gray-300'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={`p-3 rounded border ${isDark ? 'border-pink-400 bg-black text-white placeholder-pink-300' : 'border-gray-300 bg-white text-black placeholder-gray-500'}`}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={`p-3 rounded border ${isDark ? 'border-pink-400 bg-black text-white placeholder-pink-300' : 'border-gray-300 bg-white text-black placeholder-gray-500'}`}
          required
        />
        <textarea
          name="message"
          placeholder="Write your message here..."
          rows="5"
          className={`p-3 rounded border ${isDark ? 'border-pink-400 bg-black text-white placeholder-pink-300' : 'border-gray-300 bg-white text-black placeholder-gray-500'}`}
          required
        />
        <button
          type="submit"
          className={`px-5 py-2 rounded-lg font-bold transition ${isDark ? 'bg-pink-600 text-black hover:bg-pink-500' : 'bg-black text-white hover:bg-gray-800'}`}
        >
          🚀 Send Message
        </button>
      </motion.form>
    </section>
  );
}