import { motion } from "framer-motion"

export default function Projects() {

  const dataProjects = [
    {
      title: "Global Sales Intelligence Hub",
      tech: "Power BI • DAX • SQL",
      desc: "Interactive dashboards to analyze product, customer and regional sales performance.",
      image: "/images/global_sale_dashboard.jpeg",
      live: "https://app.powerbi.com/view?r=eyJrIjoiMmI0YjUxNDktNTQyOS00MDUzLTk4MWQtYmNjMGE2YjVkMjIxIiwidCI6ImEwZjgxN2I5LWM5OTMtNDAwNS1hNzQ3LWUzY2JmM2Y0NjVmNyJ9",
      code: "https://github.com/Sambhav-Bhardwaj/Global-Sales-Intelligence-Hub-Power-BI-Dashboard",
    },
    {
      title: "Bank Loan Analysis",
      tech: "SQL • Power BI",
      desc: "Risk analysis dashboard to track approval rates, defaults and customer profiles.",
      image: "/images/Bank_loan.jpeg",
      live: "https://app.powerbi.com/view?r=eyJrIjoiY2ExYTliOTUtMDEyMy00YWE2LTgwOGQtNDU0NmE4MDUyYzEyIiwidCI6ImEwZjgxN2I5LWM5OTMtNDAwNS1hNzQ3LWUzY2JmM2Y0NjVmNyJ9",
      code: "https://github.com/Sambhav-Bhardwaj/Bank-Loan-Dashboard-Project",
    },
    {
      title: "Social Media Addiction Analysis",
      tech: "Excel • Pivot Tables",
      desc: "Behavioral analysis using Excel dashboards to identify usage patterns.",
      image: "/images/Addiction_Dashboard_Image.png",
      code: "https://github.com/Sambhav-Bhardwaj/Excel-Dashboard-Project",
    },
  ]

  const frontendProjects = [
    {
      title: "Desh Margdarshak App",
      tech: "React • JavaScript • CSS",
      desc: "Country guide web app with responsive UI and dynamic data rendering.",
      image: "/images/desh_margdarshak.jpeg",
      live: "https://sambhav-bhardwaj.github.io/Country-Guide-App/",
      code: "https://github.com/Sambhav-Bhardwaj/Country-Guide-App",
    },
    {
      title: "Pomodoro Clock App",
      tech: "JavaScript • HTML • CSS",
      desc: "Productivity timer with clean UI and interactive controls.",
      image: "/images/pomodoro.jpeg",
      live: "https://sambhav-bhardwaj.github.io/Pomodoro-Clock/",
      code: "https://github.com/Sambhav-Bhardwaj/Pomodoro-Clock",
    },
  ]

  const Card = ({ item }) => (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      className="
        rounded-2xl bg-white/5
        border border-white/10 backdrop-blur-xl
        overflow-hidden flex flex-col p-6
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
        transition
      "
    >
      <div className="w-full h-[275px] overflow-hidden rounded-xl mb-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h4 className="text-lg font-semibold text-white mb-1">
          {item.title}
        </h4>

        <p className="text-sm text-cyan-400 mb-3">
          {item.tech}
        </p>

        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          {item.desc}
        </p>

        <div className="flex gap-3 mt-auto">
          {item.live && (
            <a
              href={item.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1 text-center px-4 py-2 rounded-md
                bg-gradient-to-r from-cyan-400 to-purple-500
                text-black text-sm font-medium
                hover:opacity-90 transition
              "
            >
              Live
            </a>
          )}

          <a
            href={item.code}
            target="_blank"
            rel="noreferrer"
            className="
              flex-1 text-center px-4 py-2 rounded-md
              border border-white/20 text-zinc-200 text-sm
              hover:bg-white/10 transition
            "
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-screen px-6 py-24 bg-[#020617] overflow-hidden
      px-6 py-24 bg-[#020617] overflow-hidden"
    >
      {/* SAME CYBER GLOW */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl w-full">

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 relative inline-block">
          Projects
          <span
            className="absolute -bottom-3 left-0 w-full h-[3px]
            bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          />
        </h2>

        <h3 className="text-xl font-semibold text-zinc-200 mb-8">
          Data Analytics Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {dataProjects.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-zinc-200 mb-8">
          Frontend / UI Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {frontendProjects.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

      </div>
    </motion.section>
  )
}