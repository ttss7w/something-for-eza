import { motion } from "framer-motion"
import { useMemo } from "react"

import jumpingCat from "../assets/images/jumping-cat.webp"
import kissingCat from "../assets/images/kissing-cat.webp"
import dancingCat from "../assets/images/dancing-cat.webp"

export default function BirthdayBackground() {
  const hearts = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 8,
      size: 35 + Math.random() * 35,
    }))
  }, [])

  const confetti = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 14 + Math.random() * 10,
      size: 8 + Math.random() * 10,
      rotate: Math.random() * 360,
    }))
  }, [])

  return (
    <div
      className="
      fixed
      inset-0
      overflow-hidden
      bg-gradient-to-br
      from-white
      via-pink-200
      to-purple-300
      "
    >
      {/* Huge white glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[900px]
        w-[900px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-white
        blur-[160px]
        "
      />

      {/* Pink floating glow */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-10
        top-20
        h-[450px]
        w-[450px]
        rounded-full
        bg-pink-400/50
        blur-[120px]
        "
      />

      {/* Purple floating glow */}
      <motion.div
        animate={{
          x: [80, -80, 80],
          y: [40, -40, 40],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        right-10
        bottom-10
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-400/50
        blur-[130px]
        "
      />

      {/* Left cats */}

      {/* Dancing cat - lower left */}
      <motion.img
        src={dancingCat}
        alt=""
        draggable={false}
        animate={{
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
  absolute
  left-10
  bottom-24
  max-md:bottom-1
  z-10
  w-60
  max-md:w-32
  select-none
  pointer-events-none
  mix-blend-multiply
  drop-shadow-[0_0_25px_rgba(255,255,255,.8)]
  "
      />

      {/* Kissing cat - upper left */}
      <img
        src={kissingCat}
        alt=""
        draggable={false}
        className="
  absolute
  left-16
  top-24
  max-md:top-0
  z-10
  w-40
  max-md:w-30
  select-none
  pointer-events-none
  mix-blend-multiply
  drop-shadow-[0_0_25px_rgba(255,255,255,.8)]
  "
      />

      {/* Jumping cat */}
      <motion.img
        src={jumpingCat}
        alt=""
        draggable={false}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-8
        bottom-10
        max-md:bottom-[-15px]
        z-10
        w-90
        max-md:w-40
        select-none
        pointer-events-none
        mix-blend-multiply
        drop-shadow-[0_0_25px_rgba(255,255,255,.8)]
        "
      />

      {/* Floating hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
            x: [0, 40, -40, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          className="
          absolute
          text-pink-500/70
          drop-shadow-[0_0_25px_rgba(255,80,180,0.9)]
          "
        >
          ♥
        </motion.div>
      ))}

      {/* Slow falling birthday confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            y: "-10vh",
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            opacity: [0, 0.9, 1, 0],
            rotate: piece.rotate + 360,
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${piece.left}%`,
            width: `${piece.size}px`,
            height: `${piece.size * 1.8}px`,
          }}
          className="
          absolute
          rounded-sm
          bg-gradient-to-br
          from-yellow-300
          via-pink-500
          to-purple-500
          shadow-[0_0_15px_rgba(255,220,120,.9)]
          "
        />
      ))}

      {/* Sparkles */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle,rgba(255,255,255,.8)_1px,transparent_2px)]
        bg-[length:90px_90px]
        opacity-40
        "
      />
    </div>
  )
}
