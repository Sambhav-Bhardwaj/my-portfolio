import { motion } from "framer-motion"

export default function Skills() {
  const skillGroups = [
    {
      title: "Data Analytics",
      skills: [
        "Power BI",
        "SQL",
        "Excel",
        "Python",
        "Tableau",
        "DAX",
        "Data Cleaning",
        "EDA",
      ],
    },
    {
      title: "Frontend & UI",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Basics",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "VS Code",
        "MySQL",
        "PostgreSQL",
        "MS Excel",
      ],
    },
  ]

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen bg-[#020617] px-6 py-24 overflow-hidden"
    >
      {/* Cyber Glow Background */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white inline-block relative">
            Skills
            <span
              className="absolute left-0 -bottom-3 w-full h-[3px]
              bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            />
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl">
            A blend of data analytics, frontend development, and modern tools
            I use to build impactful solutions.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.15 }}
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ scale: 1.06 }}
              className="group rounded-2xl border border-white/10 
              bg-white/5 backdrop-blur-xl p-7
              hover:border-cyan-400/40
              hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
              transition"
            >
              <h3
                className="text-xl font-semibold text-white mb-6
                group-hover:text-cyan-400 transition"
              >
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg text-sm
                    bg-white/10 text-zinc-300
                    border border-white/10
                    hover:bg-cyan-400/10
                    hover:border-cyan-400/40
                    hover:text-white
                    transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}