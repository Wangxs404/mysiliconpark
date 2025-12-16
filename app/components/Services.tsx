'use client'

import { motion } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    title: 'FLEET DEPLOYMENT',
    description: 'Rapid deployment of heterogeneous robot fleets including humanoid and quadruped units. Scalable rental models for short-term pilots or long-term integration.',
    features: ['Multi-Unit Coordination', 'Logistics Management', 'SLA Guarantees'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="12" height="12" />
        <rect x="28" y="8" width="12" height="12" />
        <rect x="8" y="28" width="12" height="12" />
        <rect x="28" y="28" width="12" height="12" />
        <path d="M20 14h8 M14 20v8 M34 20v8 M20 34h8" />
      </svg>
    )
  },
  {
    title: 'CUSTOM DEVELOPMENT',
    description: 'Bespoke software and hardware integration. We develop custom control algorithms, perception layers, and domain-specific applications.',
    features: ['API Integration', 'Sensor Fusion', 'Autonomous Navigation'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 24l-6-6 6-6 M36 12l6 6-6 6" />
        <path d="M26 8l-4 32" />
        <rect x="4" y="4" width="40" height="40" rx="2" strokeOpacity="0.3" />
      </svg>
    )
  },
  {
    title: 'ENTERPRISE TRAINING',
    description: 'Comprehensive workforce upskilling. Certified training programs for robot operators, maintenance technicians, and system integrators.',
    features: ['Certification', 'Safety Protocols', 'Hands-on Labs'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 8v32" />
        <path d="M8 24h32" />
        <circle cx="24" cy="24" r="16" />
        <path d="M36 12L12 36" opacity="0.5" />
      </svg>
    )
  },
  {
    title: 'EVENT ENGINEERING',
    description: 'High-impact robotic performances and interactive installations for global product launches, tech summits, and brand activations.',
    features: ['Choreography', 'Real-time Control', 'Technical Production'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L8 14v20l16 10 16-10V14L24 4z" />
        <circle cx="24" cy="24" r="8" />
        <path d="M24 16v8l6 4" />
      </svg>
    )
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.label}>CORE CAPABILITIES</span>
          <h2 className={styles.title}>INTEGRATED SOLUTIONS</h2>
          <p className={styles.subtitle}>
            End-to-end robotics services designed for industrial scalability and commercial impact.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map(f => (
                  <li key={f}>
                    <span className={styles.bullet}>›</span> {f}
                  </li>
                ))}
              </ul>
              <div className={styles.cardOverlay}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
