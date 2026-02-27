import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import profile from "../assets/profile.jpg.jpeg"
import cyber from "../assets/cyber.mp4.mp4"

export default function Hero() {

  const firstName = "Sambhav"
  const lastName = "Bhardwaj"

  const controls = useAnimation()

  // 🔁 Re-run animation every 10 seconds
  useEffect(() => {

    const animateName = async () => {
      await controls.set("hidden")     // instantly reset
      await controls.start("visible")  // animate
    }

    animateName()

    const interval = setInterval(() => {
      animateName()
    }, 10000) // 🔥 10 sec (test ke liye, baad me 50000 kar dena)

    return () => clearInterval(interval)

  }, [controls])

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  }

  const letter = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-0"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={cyber} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight overflow-hidden">
            Hi, I’m <br />

            {/* Sambhav */}
            <motion.div
              className="flex text-zinc-200 mt-2 font-bold"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              {firstName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

            {/* Bhardwaj */}
            <motion.div
              className="flex text-zinc-200 mt-2 font-bold"
              variants={container}
              initial="hidden"
              animate={controls}
            >
              {lastName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letter}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>

          </h1>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            Fresher{" "}
            <span className="text-zinc-200 font-medium">Data Analyst</span>{" "}
            skilled in Power BI, SQL, and Python — focused on building
            clear, business-driven insights through data.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl 
              bg-zinc-100 text-black font-medium
              hover:bg-zinc-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl 
              border border-white/20 text-white
              hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-0 rounded-full 
              border border-purple-500/40
              shadow-[0_0_40px_rgba(168,85,247,0.25)]"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute inset-4 rounded-full 
              border border-cyan-400/30"
            />

            <div className="absolute inset-8 rounded-full overflow-hidden
              bg-black border border-white/10">

              <img
                src={profile}
                alt="Sambhav Bhardwaj"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 15%" }} 
              />

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}