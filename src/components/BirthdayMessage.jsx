import { motion } from "framer-motion"

export default function BirthdayMessage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      className="
      fixed
      inset-0
      z-30
      flex
      items-center
      justify-center
      px-4
      md:px-6
      text-center
      "
    >
      <div
        className="
        relative
        max-w-4xl
        rounded-3xl
        md:rounded-[2rem]
        border-2
        md:border-4
        border-white/40
        bg-white/10
        px-6
        py-8
        md:px-12
        md:py-14
        backdrop-blur-md
        shadow-[0_0_50px_rgba(255,150,220,0.45)]
        md:shadow-[0_0_100px_rgba(255,150,220,0.45)]
        "
      >
        {/* Dear EZA */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          mb-3
          md:mb-5
          text-4xl
          md:text-6xl
          font-semibold
          text-white
          "
        >
          Dear{" "}
          <span className="relative inline-block">
            {/* Pink bow */}
            <img
              src="/src/assets/images/pink-bow.png"
              alt="bow"
              className="
              absolute
              -left-4
              -top-2
              w-12
              md:-left-8
              md:-top-4
              md:w-20
              rotate-[-15deg]
              drop-shadow-[0_0_10px_rgba(255,150,220,.8)]
              md:drop-shadow-[0_0_15px_rgba(255,150,220,.8)]
              "
            />

            <span
              className="
              eza-title
              inline-block
              font-poetsen
              text-6xl
              md:text-8xl
              "
            >
              EZA
            </span>
          </span>
        </motion.h1>

        {/* Happy Birthday */}
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="
          mb-6
          md:mb-10
          text-3xl
          md:text-5xl
          font-semibold
          text-white
          drop-shadow-[0_0_10px_rgba(255,255,255,.5)]
          md:drop-shadow-[0_0_20px_rgba(255,255,255,.5)]
          "
        >
          Happy Birthday To You❤️
        </motion.h2>

        {/* Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="
          space-y-4
          md:space-y-8
          text-xl
          md:text-3xl
          leading-relaxed
          text-white
          "
        >
          <p>You make my world brighter every single day.</p>

          <p>Thank you for being you.</p>

          <p>
            I hope today brings you as much happiness
            <br />
            as you've brought into my life.
          </p>

          <p>I love you.</p>

          {/* Forever */}
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
              textShadow: [
                "0 0 10px rgba(255,180,220,.4)",
                "0 0 35px rgba(220,150,255,.9)",
                "0 0 10px rgba(255,180,220,.4)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            mt-4
            text-4xl
            md:text-6xl
            font-semibold
            text-pink-300
            "
          >
            Forever.
          </motion.p>

          {/* From Amir */}
          <div
            className="
            mt-2
            flex
            w-full
            items-center
            justify-center
            gap-3
            md:gap-4
            "
          >
            <span
              className="
              h-[1.5px]
              w-12
              md:w-20
              bg-slate-400/50
              "
            />

            <p
              className="
              text-base
              md:text-xl
              text-slate-400
              "
            >
              from Amir
            </p>

            <span
              className="
              h-[1.5px]
              w-12
              md:w-20
              bg-slate-400/50
              "
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
