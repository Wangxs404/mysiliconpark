import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'siliconpark - Embodied AI & Robotics Solutions',
  description: 'siliconpark is a premier embodied AI integrator specializing in robotics rental, custom development, and enterprise solutions. Partnering with Unitree and other global leaders.',
  keywords: 'robotics, embodied AI, humanoid robots, robot dogs, Unitree, robotics rental, enterprise robotics',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Michroma&family=Orbitron:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
