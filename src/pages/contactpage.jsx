import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaPhone, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // toast state
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("success", "Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        showToast("error", "Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gray-50 relative">

      {/* ✅ TOAST POPUP */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl shadow-lg text-white text-sm transition-all
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 mt-3">
          Have an idea, project, or opportunity? I’d love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-5 text-gray-900">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700">

              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-800" />
                <span>+92 3XX XXXXXXX</span>
              </div>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <FaGithub />
                GitHub Profile
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 hover:text-black transition"
              >
                <FaLinkedin />
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold">Open to Opportunities</h3>
            <p className="text-sm mt-2 text-gray-300">
              Freelance, internships, and full-time roles — let’s build something impactful together.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 rounded-2xl shadow-sm border space-y-5"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Send a Message
          </h3>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition disabled:opacity-60"
          >
            <FaPaperPlane />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;