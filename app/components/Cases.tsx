'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Cases.module.css'

const categories = [
  { id: 'all', name: 'ALL SECTORS' },
  { id: 'commercial', name: 'COMMERCIAL' },
  { id: 'industrial', name: 'INDUSTRIAL' },
  { id: 'education', name: 'EDUCATION' },
]

const cases = [
  {
    id: 1,
    title: 'LI-NING BRAND SUMMIT',
    client: 'LI-NING',
    sector: 'commercial',
    description: 'Autonomous humanoid robot choreography for flagship product launch. Seamless integration with human performers.',
    metrics: { impact: '5M+ Views', reliability: '99.9%', scale: '10 Units' },
    location: 'Beijing, CN'
  },
  {
    id: 2,
    title: 'FOTON SMART FACTORY',
    client: 'FOTON MOTORS',
    sector: 'industrial',
    description: 'Automated inspection patrol using quadruped robots. Thermal imaging and gas detection integration for 24/7 monitoring.',
    metrics: { coverage: '50k sqm', uptime: '24/7', efficiency: '+40%' },
    location: 'Beijing, CN'
  },
  {
    id: 3,
    title: 'SINGAPORE STEM INITIATIVE',
    client: 'INTL SCHOOLS',
    sector: 'education',
    description: 'Comprehensive robotics curriculum deployment across 3 international campuses. Hardware-software integrated learning.',
    metrics: { students: '500+', modules: '12', satisfaction: '4.8/5' },
    location: 'Singapore, SG'
  },
  {
    id: 4,
    title: 'MCN LIVESTREAM STUDIO',
    client: 'TOP MCN',
    sector: 'commercial',
    description: 'Interactive robotic assistants for high-traffic e-commerce livestreams. Dynamic product showcasing and audience engagement.',
    metrics: { gmv: '$1M+', engagement: '+200%', retention: 'High' },
    location: 'Hangzhou, CN'
  }
]

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredCases = activeFilter === 'all' 
    ? cases 
    : cases.filter(c => c.sector === activeFilter)

  return (
    <section id="cases" className={styles.cases}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>TRACK RECORD</span>
          <h2 className={styles.title}>CASE STUDIES</h2>
        </div>

        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            className={styles.grid}
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredCases.map(item => (
              <div key={item.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.sector}>{item.sector}</span>
                  <span className={styles.location}>{item.location}</span>
                </div>
                
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <h4 className={styles.client}>{item.client}</h4>
                
                <p className={styles.description}>{item.description}</p>
                
                <div className={styles.metrics}>
                  {Object.entries(item.metrics).map(([key, value]) => (
                    <div key={key} className={styles.metric}>
                      <span className={styles.metricValue}>{value}</span>
                      <span className={styles.metricLabel}>{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className={styles.partners}>
          <p className={styles.partnersLabel}>TRUSTED BY GLOBAL INNOVATORS</p>
          <div className={styles.logos}>
            <span>LI-NING</span>
            <span>FOTON</span>
            <span>UNITREE</span>
            <span>UBTECH</span>
            <span>BOSTON DYNAMICS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
