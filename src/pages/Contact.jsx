import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qaccrmi", // ✅ Your EmailJS Service ID
        "template_jsd2v8s", // ⚠️ Replace with your TEMPLATE ID
        formRef.current,
        "qzWEaCtIJzWzS_J4h", // ⚠️ Replace with your PUBLIC KEY
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error(error);
        },
      );
  };

  return (
    <section className="bg-gray-900 min-h-screen px-6 md:px-20 py-16 text-gray-200 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-3"></div>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          I’m open to collaborating on exciting projects and opportunities.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-cyan-400 font-semibold text-xl mb-2">Email</h3>
          <p>nishantgiri990@gmail.com</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-cyan-400 font-semibold text-xl mb-2">GitHub</h3>
          <p>github.com/nishant</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-cyan-400 font-semibold text-xl mb-2">LinkedIn</h3>
          <p>linkedin.com/in/nishant-kumar-giri</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
          Send Me a Message
        </h3>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-lg bg-gray-700 text-gray-200"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-lg bg-gray-700 text-gray-200"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded-lg bg-gray-700 text-gray-200"
          ></textarea>

          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
