import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      role: "Data Analytics Intern",
      company: "Tata (GenAI Powered Data Analytics Job Simulation)",
      duration: "Virtual Internship",
      points: [
        "Analyzed business problems using data-driven approach",
        "Worked on sales, customer and performance datasets",
        "Created insights using Power BI dashboards and reports",
        "Applied analytical thinking to solve real-world business scenarios",
      ],
    },
    {
      role: "Frontend / UI Developer (Self Projects)",
      company: "Personal & Academic Projects",
      duration: "2024 – Present",
      points: [
        "Built responsive UI using React, HTML, CSS and JavaScript",
        "Designed clean and professional UI/UX layouts",
        "Developed multiple frontend projects with reusable components",
        "Focused on performance, structure and user experience",
      ],
    },
  ]

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen flex items-center justify-center
      px-6 py-24 bg-[#020617] overflow-hidden"
    >
      {/* 🔥 SAME CYBER GLOW AS ABOUT */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]"
      />

      <div className="relative z-10 max-w-6xl w-full">

        {/* HEADING – EXACT SAME STYLE */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 relative inline-block">
          Experience
          <span
            className="absolute -bottom-3 left-0 w-full h-[3px]
            bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </h2>

        {/* CARDS */}
        <div className="space-y-10 mt-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white/5
              border border-white/10 backdrop-blur-xl
              p-8 md:p-10
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              transition"
            >
              {/* TOP */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-sm text-zinc-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              {/* COMPANY – SAME PURPLE AS ABOUT STATS */}
              <p className="text-sm text-purple-400 mb-6">
                {exp.company}
              </p>

              {/* POINTS */}
              <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1 w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}