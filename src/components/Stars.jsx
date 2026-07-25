import { useEffect, useRef } from "react"

export default function Stars({ active = true }) {
  const canvasRef = useRef(null)

  console.log("Stars rendered. Active:", active)

  useEffect(() => {
    console.log("Stars useEffect started. Active:", active)

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const stars = []

    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
      })
    }

    const meteors = []

    let animationId
    let meteorTimeout

    function spawnMeteor() {
      console.log("spawn meteor active:", active)

      if (!active) return

      meteors.push({
        x: Math.random() * width * 0.5,
        y: Math.random() * height * 0.35,
        vx: 22 + Math.random() * 8,
        vy: 12 + Math.random() * 5,
        length: 160 + Math.random() * 80,
        life: 0,
        maxLife: 70,
      })

      meteorTimeout = setTimeout(spawnMeteor, 2000 + Math.random() * 7000)
    }

    spawnMeteor()

    function animate() {
      ctx.clearRect(0, 0, width, height)

      if (active) {
        console.log("Drawing stars")

        const gradient = ctx.createLinearGradient(0, 0, 0, height)

        gradient.addColorStop(0, "#020617")
        gradient.addColorStop(1, "#000")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        stars.forEach((star) => {
          star.alpha += star.speed

          if (star.alpha > 1 || star.alpha < 0.2) {
            star.speed *= -1
          }

          ctx.beginPath()

          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)

          ctx.fillStyle = `rgba(255,255,255,${star.alpha})`

          ctx.shadowBlur = 10
          ctx.shadowColor = "white"

          ctx.fill()
        })

        // Soft magical shooting stars
        meteors.forEach((meteor, index) => {
          meteor.x += meteor.vx
          meteor.y += meteor.vy
          meteor.life++

          const opacity = 1 - meteor.life / meteor.maxLife

          const meteorGradient = ctx.createLinearGradient(
            meteor.x,
            meteor.y,
            meteor.x - meteor.length,
            meteor.y - meteor.length * 0.5,
          )

          meteorGradient.addColorStop(0, `rgba(255,255,255,${opacity})`)

          meteorGradient.addColorStop(
            0.35,
            `rgba(220,240,255,${opacity * 0.8})`,
          )

          meteorGradient.addColorStop(1, "rgba(180,220,255,0)")

          ctx.beginPath()

          ctx.moveTo(meteor.x, meteor.y)

          ctx.lineTo(meteor.x - meteor.length, meteor.y - meteor.length * 0.5)

          ctx.strokeStyle = meteorGradient

          ctx.lineWidth = 3

          // Soft magical glow
          ctx.shadowBlur = 25
          ctx.shadowColor = "rgba(200,230,255,0.8)"

          ctx.stroke()

          // Bright star head
          ctx.beginPath()

          ctx.arc(meteor.x, meteor.y, 2.5, 0, Math.PI * 2)

          ctx.fillStyle = `rgba(255,255,255,${opacity})`

          ctx.shadowBlur = 18
          ctx.shadowColor = "white"

          ctx.fill()

          if (meteor.life > meteor.maxLife) {
            meteors.splice(index, 1)
          }
        })
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      console.log("Stars cleanup")

      cancelAnimationFrame(animationId)

      clearTimeout(meteorTimeout)
    }
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      className="
      fixed
      inset-0
      z-0
      "
    />
  )
}
