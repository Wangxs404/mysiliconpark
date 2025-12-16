'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Products.module.css'

const categories = [
  { id: 'humanoid', name: 'HUMANOID' },
  { id: 'quadruped', name: 'QUADRUPED' },
  { id: 'custom', name: 'SPECIALIZED' },
]

const products = {
  humanoid: [
    {
      name: 'UNITREE H1',
      spec: 'GENERAL PURPOSE',
      image: '/products/h1.svg',
      details: [
        { label: 'Height', value: '180 cm' },
        { label: 'Payload', value: '30 kg' },
        { label: 'DoF', value: '42 Active' },
        { label: 'Speed', value: '1.5 m/s' }
      ],
      applications: ['R&D', 'Showcase', 'Logistics'],
      status: 'AVAILABLE'
    },
    {
      name: 'WALKER X',
      spec: 'SERVICE ROBOT',
      image: '/products/walker.svg',
      details: [
        { label: 'Height', value: '130 cm' },
        { label: 'Interaction', value: 'Multimodal' },
        { label: 'Navigation', value: 'VSLAM' },
        { label: 'Battery', value: '4 Hours' }
      ],
      applications: ['Reception', 'Education', 'Events'],
      status: 'INQUIRE'
    },
    {
      name: 'PEPPER PRO',
      spec: 'INTERACTION',
      image: '/products/pepper.svg',
      details: [
        { label: 'Platform', value: 'Social' },
        { label: 'OS', value: 'Android/ROS' },
        { label: 'Sensors', value: 'Lidar/Sonar' },
        { label: 'Network', value: '5G/WiFi' }
      ],
      applications: ['Retail', 'Hospitality', 'Guide'],
      status: 'AVAILABLE'
    },
  ],
  quadruped: [
    {
      name: 'UNITREE GO2',
      spec: 'COMPACT PATROL',
      image: '/products/go2.svg',
      details: [
        { label: 'Speed', value: '3.5 m/s' },
        { label: 'Perception', value: '4D Lidar' },
        { label: 'Compute', value: 'Jetson Orin' },
        { label: 'Runtime', value: '2 Hours' }
      ],
      applications: ['Inspection', 'Education', 'Entertainment'],
      status: 'AVAILABLE'
    },
    {
      name: 'UNITREE B2',
      spec: 'HEAVY DUTY',
      image: '/products/b2.svg',
      details: [
        { label: 'Payload', value: '40 kg' },
        { label: 'Protection', value: 'IP67' },
        { label: 'Terrain', value: 'All-Weather' },
        { label: 'Torque', value: '360 Nm' }
      ],
      applications: ['Industrial', 'Rescue', 'Logistics'],
      status: 'AVAILABLE'
    },
    {
      name: 'SPOT ENTERPRISE',
      spec: 'AUTONOMOUS',
      image: '/products/spot.svg',
      details: [
        { label: 'Autonomy', value: 'Level 4' },
        { label: 'Payloads', value: 'Modular' },
        { label: 'Docking', value: 'Self-Charging' },
        { label: 'API', value: 'gRPC' }
      ],
      applications: ['Construction', 'Energy', 'Mining'],
      status: 'INQUIRE'
    },
  ],
  custom: [
    {
      name: 'SWARM DANCE',
      spec: 'COORDINATED',
      image: '/products/dance.svg',
      details: [
        { label: 'Scale', value: '5-50 Units' },
        { label: 'Sync', value: '<10ms' },
        { label: 'Control', value: 'Centralized' },
        { label: 'Setup', value: 'Turnkey' }
      ],
      applications: ['Ceremonies', 'Launches', 'Art'],
      status: 'PROJECT'
    },
    {
      name: 'STEM KIT',
      spec: 'EDUCATIONAL',
      image: '/products/stem.svg',
      details: [
        { label: 'Curriculum', value: 'Python/C++' },
        { label: 'Hardware', value: 'Open Source' },
        { label: 'Levels', value: 'K12-Univ' },
        { label: 'Support', value: 'Training' }
      ],
      applications: ['Schools', 'Labs', 'Workshops'],
      status: 'AVAILABLE'
    },
    {
      name: 'SOCCER BOT',
      spec: 'COMPETITIVE',
      image: '/products/soccer.svg',
      details: [
        { label: 'Mode', value: 'Autonomous' },
        { label: 'Vision', value: 'High-FPS' },
        { label: 'Motion', value: 'Omni' },
        { label: 'Standard', value: 'RoboCup' }
      ],
      applications: ['Competitions', 'Demos', 'Research'],
      status: 'PROJECT'
    },
  ],
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('humanoid')

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>ROBOTIC FLEET</span>
          <h2 className={styles.title}>PLATFORM MATRIX</h2>
        </div>

        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tab} ${activeCategory === cat.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {products[activeCategory as keyof typeof products].map((product) => (
              <div key={product.name} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.status}>{product.status}</div>
                  <div className={styles.spec}>{product.spec}</div>
                </div>
                
                <h3 className={styles.productName}>{product.name}</h3>
                
                <div className={styles.visualPlaceholder}>
                  {/* Abstract schematic representation */}
                  <svg viewBox="0 0 200 120" className={styles.schematic}>
                    <path d="M20 60 h160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <path d="M100 20 v80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <rect x="60" y="40" width="80" height="40" stroke="var(--tech-blue)" fill="none" strokeWidth="1" />
                    <circle cx="100" cy="60" r="15" fill="rgba(0, 240, 255, 0.1)" />
                    <path d="M40 80 L60 60 M140 60 L160 80" stroke="rgba(255,255,255,0.3)" />
                  </svg>
                </div>

                <div className={styles.detailsGrid}>
                  {product.details.map((detail) => (
                    <div key={detail.label} className={styles.detailItem}>
                      <span className={styles.detailLabel}>{detail.label}</span>
                      <span className={styles.detailValue}>{detail.value}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.applications}>
                  {product.applications.map(app => (
                    <span key={app} className={styles.appTag}>{app}</span>
                  ))}
                </div>

                <button className={styles.actionBtn}>
                  VIEW SPECS
                </button>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
