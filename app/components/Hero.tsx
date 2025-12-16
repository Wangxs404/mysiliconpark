'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Hero.module.css'

// Advanced Particle System - Minimalist & Geometric
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const particles: Particle[] = []
    const particleCount = 60 // Reduced count for cleaner look

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.2
        this.vy = (Math.random() - 0.5) * 0.2
        this.size = Math.random() * 1.5 + 0.5
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > w) this.vx *= -1
        if (this.y < 0 || this.y > h) this.vy *= -1
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.fillRect(this.x, this.y, this.size, this.size) // Squares instead of circles
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const init = () => {
      resize()
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid lines first
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)'
      ctx.lineWidth = 1
      
      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height)
        p.draw(ctx)
        
        // Connections - strictly horizontal/vertical for tech feel
        for (let j = i + 1; j < particles.length; j++) {
          const dx = Math.abs(particles[j].x - p.x)
          const dy = Math.abs(particles[j].y - p.y)
          
          if (dx < 100 && dy < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 * (1 - (dx+dy)/200)})`
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, p.y) // Elbow connector
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.particleCanvas} />
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className={styles.hero}>
      <ParticleCanvas />
      <div className={styles.vignette}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EMBODIED AI SOLUTIONS
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            THE FUTURE IS<br />
            <span className={styles.outlineText}>PHYSICAL</span>
          </motion.h1>

          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We bridge the gap between artificial intelligence and the physical world. 
            Providing enterprise-grade robotics integration, custom development, 
            and scalable deployment solutions.
          </motion.p>

          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button 
              className={styles.primaryBtn}
              onClick={() => handleNavClick('#contact')}
            >
              START INTEGRATION
            </button>
            <button 
              className={styles.secondaryBtn}
              onClick={() => handleNavClick('#products')}
            >
              EXPLORE FLEET
            </button>
          </motion.div>

          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Enterprise Partners</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Global</span>
              <span className={styles.statLabel}>Deployment Ready</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>ISO</span>
              <span className={styles.statLabel}>Standard Compliant</span>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ y: y1 }} className={styles.visual}>
          {/* Abstract Robot Outline - Geometric & Serious */}
          <div className={styles.robotFrame}>
            <svg viewBox="0 0 400 600" fill="none" className={styles.robotSvg}>
              {/* Head */}
              <path d="M140 80 L260 80 L280 120 L120 120 Z" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
              <rect x="150" y="100" width="100" height="10" fill="var(--tech-blue)"/>
              
              {/* Body */}
              <path d="M100 140 L300 140 L320 340 L80 340 Z" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
              <circle cx="200" cy="240" r="40" stroke="var(--tech-blue)" strokeWidth="1"/>
              <circle cx="200" cy="240" r="20" fill="rgba(255,255,255,0.1)"/>
              
              {/* Limbs (Abstract Lines) */}
              <path d="M80 160 L40 280 L60 300" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <path d="M320 160 L360 280 L340 300" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              
              {/* Data streams */}
              <path d="M200 120 V 140" stroke="var(--tech-blue)" strokeWidth="2"/>
              <path d="M200 340 V 600" stroke="url(#fade)" strokeWidth="1"/>
              
              <defs>
                <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.3)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
            </svg>
            
            {/* Holographic Circles */}
            <motion.div 
              className={styles.halo1}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className={styles.halo2}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.scrollIndicator}
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  )
}
