'use client'

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>siliconpark</span>
            <p>Embodied Intelligence Integrator</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.col}>
              <h4>SOLUTIONS</h4>
              <a href="#">Fleet Rental</a>
              <a href="#">Custom Dev</a>
              <a href="#">Training</a>
            </div>
            <div className={styles.col}>
              <h4>COMPANY</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Partners</a>
            </div>
            <div className={styles.col}>
              <h4>LEGAL</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">SLA</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2024 siliconpark TECHNOLOGY CO., LTD. ALL RIGHTS RESERVED.</p>
          <div className={styles.social}>
            <a href="#">LINKEDIN</a>
            <a href="#">TWITTER/X</a>
            <a href="#">YOUTUBE</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
