'use client'

import { motion } from 'framer-motion'
import styles from './Global.module.css'

const stats = [
  { value: '20+', label: 'Robot Models' },
  { value: '4h', label: 'Response Time' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '98%', label: 'Satisfaction Rate' },
]

export default function Global() {
  return (
    <section id="about" className={styles.global}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.label}>GLOBAL FOOTPRINT</span>
            <h2 className={styles.title}>ANCHORED IN BEIJING<br/>SERVING THE WORLD</h2>
            <p className={styles.description}>
              Headquartered in China's technology capital, siliconpark operates as a global nexus for 
              embodied AI integration. We connect cutting-edge hardware manufacturers with 
              enterprises worldwide, facilitating the mass adoption of intelligent robotics.
            </p>
          </motion.div>

          <div className={styles.mapContainer}>
            {/* Minimalist World Map */}
            <svg viewBox="0 0 1000 500" className={styles.mapSvg}>
              <path 
                d="M150 150 Q200 100 250 130 Q300 150 350 120 Q400 100 450 110 Q500 130 550 100 Q600 70 650 90 Q700 110 750 80" 
                stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" fill="none"
              />
              <path 
                d="M200 300 Q250 280 300 300 Q350 330 400 310 Q450 290 500 320 Q550 350 600 330 Q650 300 700 320" 
                stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" fill="none"
              />
              
              {/* Beijing Node */}
              <g className={styles.node} style={{ transform: 'translate(680px, 180px)' }}>
                <circle r="6" fill="var(--tech-blue)" />
                <circle r="12" stroke="var(--tech-blue)" strokeWidth="1" opacity="0.5" />
                <text x="20" y="5" fill="white" fontSize="12" fontFamily="var(--font-display)">BEIJING (HQ)</text>
              </g>

              {/* Singapore Node */}
              <g className={styles.node} style={{ transform: 'translate(660px, 280px)' }}>
                <circle r="4" fill="var(--gray-400)" />
                <text x="15" y="4" fill="var(--gray-400)" fontSize="10" fontFamily="var(--font-display)">SINGAPORE</text>
              </g>

              {/* Connection Line */}
              <path d="M680 180 L660 280" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 4" />
              
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--tech-blue)" />
                  <stop offset="100%" stopColor="var(--gray-600)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.teamSection}>
            <h3 className={styles.subTitle}>ENGINEERING EXCELLENCE</h3>
            <div className={styles.teamGrid}>
              <div className={styles.teamItem}>
                <h4>R&D CORE</h4>
                <p>Elite engineers from top institutions (Tsinghua, BUAA) with 5+ years in robotics control.</p>
              </div>
              <div className={styles.teamItem}>
                <h4>OPERATIONS</h4>
                <p>Veterans in large-scale event management and logistical coordination.</p>
              </div>
              <div className={styles.teamItem}>
                <h4>EDUCATION</h4>
                <p>Certified instructors designing next-gen STEM curriculums.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
