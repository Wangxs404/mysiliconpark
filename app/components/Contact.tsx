'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    inquiryType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit logic
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <span className={styles.label}>GET IN TOUCH</span>
            <h2 className={styles.title}>START YOUR<br/>INTEGRATION</h2>
            <p className={styles.desc}>
              Ready to deploy intelligent robotics in your operations? 
              Our team of solution architects is ready to assist.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <h4>HEADQUARTERS</h4>
                <p>Wangjing SOHO, Chaoyang District<br/>Beijing, China</p>
              </div>
              <div className={styles.detailItem}>
                <h4>GLOBAL INQUIRIES</h4>
                <p>contact@siliconpark.com<br/>+86 400-XXX-XXXX</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>First Name</label>
                <input type="text" className={styles.input} />
              </div>
              <div className={styles.group}>
                <label>Last Name</label>
                <input type="text" className={styles.input} />
              </div>
            </div>
            
            <div className={styles.group}>
              <label>Work Email</label>
              <input type="email" className={styles.input} />
            </div>

            <div className={styles.group}>
              <label>Company / Organization</label>
              <input type="text" className={styles.input} />
            </div>

            <div className={styles.group}>
              <label>Inquiry Type</label>
              <select className={styles.select}>
                <option value="">Select a topic...</option>
                <option value="rental">Fleet Rental</option>
                <option value="custom">Custom Development</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media / Press</option>
              </select>
            </div>

            <div className={styles.group}>
              <label>Message</label>
              <textarea className={styles.textarea} rows={4}></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
