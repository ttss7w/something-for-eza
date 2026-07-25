import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef } from "react"

import Confetti from "./Confetti"

import giftTop from "../assets/images/gift-box-top.png"
import giftBottom from "../assets/images/gift-box-bottom.png"
import arrow from "../assets/images/arrow.svg"

import birthdaySong from "../assets/music/birthday-song.mp3"

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false)
  const [showMagic, setShowMagic] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const audioRef = useRef(null)

  const handleOpen = () => {
    if (opened) return

    setOpened(true)

    setShowMagic(true)
    setShowConfetti(true)

    // Play birthday music
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.volume = 0.35

      audioRef.current.play().catch((error) => {
        console.log("Music play error:", error)
      })
    }

    setTimeout(() => {
      onOpen?.()
    }, 100)

    setTimeout(() => {
      setShowMagic(false)
    }, 1800)
  }

  return (
    <>
      {/* Birthday music */}
      <audio ref={audioRef} src={birthdaySong} preload="auto" />

      <div className="relative flex items-center justify-center">
        {/* Soft glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
          absolute
          h-80
          w-80
          rounded-full
          bg-pink-500/30
          blur-[90px]
          "
        />

        <motion.div
          onClick={handleOpen}
          className="
          relative
          cursor-pointer
          select-none
          "
          animate={
            opened
              ? {
                  scale: 0.8,
                  y: 20,
                }
              : {
                  y: [0, -15, 0],
                }
          }
          transition={{
            duration: opened ? 0.8 : 2,
            ease: "easeOut",
            repeat: opened ? 0 : Infinity,
          }}
        >
          {/* Gift bottom */}
          <motion.img
            src={giftBottom}
            alt=""
            draggable={false}
            animate={
              opened
                ? {
                    y: 80,
                    scale: 0.7,
                    rotate: 8,
                    opacity: 0,
                  }
                : {
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
              opacity: {
                duration: 0.5,
                delay: 0.8,
              },
            }}
            className="w-[320px]"
          />

          {/* Gift top */}
          <motion.img
            src={giftTop}
            alt=""
            draggable={false}
            animate={
              opened
                ? {
                    y: -180,
                    x: -30,
                    rotate: -35,
                    opacity: 0,
                  }
                : {
                    y: 0,
                    x: 0,
                    rotate: 0,
                    opacity: 1,
                  }
            }
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              opacity: {
                duration: 0.4,
                delay: 0.8,
              },
            }}
            style={{
              transformOrigin: "50% 100%",
            }}
            className="
            absolute
            left-1/2
            -top-[1px]
            w-[320px]
            -translate-x-1/2
            "
          />

          {/* Inside magical light */}
          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 2.3,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                absolute
                left-1/2
                top-10
                h-32
                w-32
                -translate-x-1/2
                rounded-full
                bg-white
                blur-[70px]
                "
              />
            )}
          </AnimatePresence>

          {/* Click to open */}
          <AnimatePresence>
            {!opened && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: [0, 6, 0],
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                transition={{
                  opacity: {
                    duration: 0.8,
                    delay: 0.8,
                  },
                  y: {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                absolute
                left-1/2
                top-full
                mt-[-50px]
                flex
                -translate-x-1/2
                flex-col
                items-center
                gap-0
                pointer-events-none
                "
              >
                <img
                  src={arrow}
                  alt=""
                  draggable={false}
                  className="
                  w-30
                  animate-pulse
                  "
                />

                <p
                  className="
                  text-xl
                  font-medium
                  tracking-wide
                  text-white
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]
                  "
                >
                  Click to open
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Magical burst */}
      <AnimatePresence>
        {showMagic && (
          <>
            <motion.div
              initial={{
                scale: 0,
                opacity: 0.8,
              }}
              animate={{
                scale: 35,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
              fixed
              left-1/2
              top-1/2
              z-40
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-400/60
              blur-[90px]
              pointer-events-none
              "
            />

            <motion.div
              initial={{
                scale: 0,
                opacity: 0.7,
              }}
              animate={{
                scale: 30,
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="
              fixed
              left-1/2
              top-1/2
              z-40
              h-80
              w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-400/50
              blur-[100px]
              pointer-events-none
              "
            />

            <motion.div
              initial={{
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 40,
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
              fixed
              left-1/2
              top-1/2
              z-50
              h-48
              w-48
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
              blur-[60px]
              pointer-events-none
              "
            />
          </>
        )}
      </AnimatePresence>

      {showConfetti && <Confetti />}
    </>
  )
}
