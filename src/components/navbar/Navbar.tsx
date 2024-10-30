import React from "react"
import styles from "./Navbar.module.css"
import Image from "next/image"
import Link from "next/dist/client/link"
import AuthLinks from "../authLinks/AuthLinks"
import ThemeToggle from "../themeToggle/ThemeToggle"

const Navbar: React.FC = () => {
  const socialIconSize: number = 24

  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="facebook"
          width={socialIconSize}
          height={socialIconSize}
        />
        <Image
          src="/instagram.png"
          alt="instagram"
          width={socialIconSize}
          height={socialIconSize}
        />
        <Image
          src="/youtube.png"
          alt="youtube"
          width={socialIconSize}
          height={socialIconSize}
        />
      </div>
      <div className={styles.logo}>the open journal</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
