import React from "react"
import styles from "./Navbar.module.css"
import Image from "next/image"
import Link from "next/dist/client/link"

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
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
