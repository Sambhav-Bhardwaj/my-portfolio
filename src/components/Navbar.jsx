import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const section = document.querySelector(id)
    if (!section) return

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    setMenuOpen(false) // mobile pe click ke baad close
  }

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.link)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActive(item.link)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50
        backdrop-blur-xl bg-white/5 border border-white/10
        rounded-2xl px-6 py-3 w-[90%] max-w-6xl shadow-lg"
      >
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-white font-bold text-lg tracking-wide">
            Sambhav<span className="text-cyan-400">.</span>
          </h1>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-sm">
            {navItems.map((item, i) => (
              <li key={i} className="relative">
                <span
                  onClick={() => scrollToSection(item.link)}
                  className={`cursor-pointer transition duration-300 ${
                    active === item.link
                      ? "text-white"
                      : "text-zinc-400 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </span>

                {active === item.link && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full
                    bg-gradient-to-r from-cyan-400 to-purple-500
                    rounded-full"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:block px-5 py-2 rounded-xl
            bg-gradient-to-r from-cyan-400 to-purple-500
            text-white text-sm font-semibold
            hover:scale-105 transition"
          >
            Hire Me
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

        </div>
      </motion.nav>

      {/* 🔥 MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50
bg-black/95 backdrop-blur-xl
flex flex-col items-center justify-start
pt-32 gap-8 overflow-y-auto"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {navItems.map((item, i) => (
  <motion.button
    key={i}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollToSection(item.link)}
    className={`w-64 py-4 rounded-2xl text-xl font-semibold
    transition-all duration-300
    ${
      active === item.link
        ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-[0_10px_25px_rgba(34,211,238,0.4)]"
        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white shadow-[0_8px_20px_rgba(0,0,0,0.5)]"
    }
    active:translate-y-1 active:shadow-inner`}
  >
    {item.name}
  </motion.button>
))}

            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-6 px-8 py-3 rounded-xl
              bg-gradient-to-r from-cyan-400 to-purple-500
              text-white font-semibold"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}