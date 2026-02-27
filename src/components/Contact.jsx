import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef(null)
  const [popup, setPopup] = useState({ show: false, type: "" })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_te46vnm",
        "template_59uvlik",
        formRef.current,
        "hpNYZOrsE0Olk6ooe"
      )
      .then(
        () => {
          setPopup({ show: true, type: "success" })
          formRef.current.reset()
        },
        (error) => {
          console.error(error)
          setPopup({ show: true, type: "error" })
        }
      )
  }

  return (
    <>
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 80, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-[#020617] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 relative inline-block">
              Contact Me
              <span className="absolute -bottom-3 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              I am currently open to internship and entry-level opportunities in{" "}
              <span className="text-white font-semibold">Data Analytics</span> and{" "}
              <span className="text-white font-semibold">Frontend Development</span>.
              Feel free to reach out for collaborations or professional work.
            </p>

            <div className="space-y-4 text-sm">
              <p className="text-zinc-300">
                📧 Email:{" "}
                <span className="text-purple-400 hover:underline">
                  sambhavsam3@gmail.com
                </span>
              </p>

              <p className="text-zinc-300">
                💼 LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/sambhav-bhardwajee/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  linkedin.com/in/yourprofile
                </a>
              </p>

              <p className="text-zinc-300">
                🐙 GitHub:{" "}
                <a
                  href="https://github.com/Sambhav-Bhardwaj/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  github.com/yourusername
                </a>
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-7 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] transition space-y-6"
          >
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </motion.section>

      {/* POPUP MODAL */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-[#0f172a] border border-cyan-400/40 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            
            <h3 className={`text-2xl font-bold mb-4 ${
              popup.type === "success" ? "text-cyan-400" : "text-red-400"
            }`}>
              {popup.type === "success"
                ? "Message Sent Successfully!..."
                : "Message Failed."}
            </h3>

            <p className="text-zinc-400 mb-6">
              {popup.type === "success"
                ? "Thank you for reaching out. I will get back to you soon!"
                : "Something went wrong. Please try again."}
            </p>

            <button
              onClick={() => setPopup({ show: false, type: "" })}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}