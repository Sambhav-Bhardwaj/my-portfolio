import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen flex items-center justify-center
      px-6 py-24 bg-[#020617] overflow-hidden"
    >
      {/* Cyber Glow Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 relative inline-block">
            About Me
            <span
              className="absolute -bottom-3 left-0 w-full h-[3px]
              bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            I’m <span className="text-white font-semibold">
              Sambhav Bhardwaj
            </span>, a motivated and detail-oriented{" "}
            <span className="text-white">
              Data Analytics Fresher
            </span> with a strong foundation in data cleaning,
            analysis, and visualization.
          </p>

          <p className="text-zinc-400 leading-relaxed mb-4">
            I work with <span className="text-white">Power BI</span>,{" "}
            <span className="text-white">SQL</span>,{" "}
            <span className="text-white">Excel</span>, and{" "}
            <span className="text-white">Python</span> to build
            interactive dashboards and generate business-focused insights.
          </p>

          <p className="text-zinc-400 leading-relaxed">
            Currently pursuing{" "}
            <span className="text-white">
              B.Tech in Computer Science Engineering
            </span>, I aim to start my career as a Data Analyst
            in a data-driven environment where continuous learning matters.
          </p>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { number: "3+", label: "Power BI Dashboards" },
            { number: "5+", label: "Data Projects" },
            { number: "2026", label: "Graduation Year" },
            { number: "100%", label: "Learning Mindset" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="rounded-2xl bg-white/5
              border border-white/10 backdrop-blur-xl
              p-7 text-center
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              transition"
            >
              <h3 className="text-3xl font-bold text-white">
                {item.number}
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  )
}