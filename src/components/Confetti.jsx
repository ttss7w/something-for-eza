import { motion } from "framer-motion"
import { useMemo } from "react"

export default function Confetti() {
  const confetti = useMemo(() => {
    return Array.from({ length: 600 }, (_, i) => ({
      id: i,

      // Start position across the whole screen
      left: Math.random() * 100,

      // Random falling timing
      delay: Math.random() * 1.5,

      // Faster falling
      duration: 3 + Math.random() * 3,

      // Rotation
      rotate: Math.random() * 1000 - 500,

      // Size
      size: Math.random() * 12 + 5,
      width: Math.random() * 7 + 4,

      // Wind movement
      drift: (Math.random() - 0.5) * 250,

      color: [
        "#ff4d8d",
        "#ff8fab",
        "#ffd166",
        "#ffffff",
        "#c084fc",
        "#93c5fd",
        "#f9a8d4",
      ][Math.floor(Math.random() * 7)],
    }))
  }, [])

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      overflow-hidden
      pointer-events-none
      "
    >
      {confetti.map((item) => (
        <motion.span
          key={item.id}
          initial={{
            y: "-15vh",
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "120vh",
            x: item.drift,
            rotate: item.rotate,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",

            left: `${item.left}vw`,
            top: "-20px",

            width: item.width,
            height: item.size,

            backgroundColor: item.color,

            borderRadius: Math.random() > 0.5 ? "50%" : "3px",

            boxShadow: "0 0 12px rgba(255,255,255,.6)",
          }}
        />
      ))}
    </div>
  )
}
