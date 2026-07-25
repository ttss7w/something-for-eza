import { Typewriter } from "react-simple-typewriter"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import GiftBox from "./GiftBox"

export default function Intro({ onGiftOpen }) {
  const [hideText, setHideText] = useState(false)
  const [showGift, setShowGift] = useState(false)
  const [giftRemoved, setGiftRemoved] = useState(false)

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHideText(true)

      const giftTimer = setTimeout(() => {
        setShowGift(true)
      }, 900)

      return () => clearTimeout(giftTimer)
    }, 18000)

    return () => clearTimeout(hideTimer)
  }, [])

  return (
    <div
      className="
      relative
      flex
      min-h-screen
      flex-col
      items-center
      justify-center
      px-6
      text-center
      "
    >
      <AnimatePresence>
        {!hideText && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -50,
              scale: 0.9,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >
            <h2
              className="
              text-4xl
              font-semibold
              leading-relaxed
              text-white
              "
            >
              <Typewriter
                words={[
                  "I made something just for you...",
                  "Today isn't just another day...",
                  "It's the day my favorite person came into this world.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={1800}
              />
            </h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showGift && (
          <motion.div
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.7,
              rotateX: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 1.3,
              ease: "backOut",
            }}
          >
            <GiftBox onOpen={onGiftOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
