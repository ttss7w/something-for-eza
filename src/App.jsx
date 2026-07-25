import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import Stars from "./components/Stars"
import BirthdayBackground from "./components/BirthdayBackground"
import BirthdayMessage from "./components/BirthdayMessage"
import Intro from "./components/Intro"

export default function App() {
  const [giftOpened, setGiftOpened] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background transition */}
      <AnimatePresence mode="wait">
        {!giftOpened && (
          <motion.div
            key="stars"
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            fixed
            inset-0
            z-0
            "
          >
            <Stars active={true} />
          </motion.div>
        )}

        {giftOpened && (
          <motion.div
            key="birthday"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="
            fixed
            inset-0
            z-0
            "
          >
            <BirthdayBackground />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gift stays alive for animations */}
      <div
        className="
        relative
        z-20
        "
      >
        <Intro onGiftOpen={() => setGiftOpened(true)} giftOpened={giftOpened} />
      </div>

      {/* Birthday message */}
      <AnimatePresence>
        {giftOpened && <BirthdayMessage show={giftOpened} />}
      </AnimatePresence>
    </div>
  )
}
