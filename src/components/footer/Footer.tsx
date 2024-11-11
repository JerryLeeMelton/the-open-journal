import React from "react"
import styles from "./Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="the-open-journal"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <h1 className={styles.logoText}>the open journal</h1>
        </div>
        <p className={styles.description}>
          The Open Journal is a blog about lorems ipsum dolor sit amet. Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor
          sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="facebook"
            className={styles.icon}
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram"
            className={styles.icon}
            width={18}
            height={18}
          />
          <Image
            src="/twitter.png"
            alt="twitter"
            className={styles.icon}
            width={18}
            height={18}
          />
          <Image
            src="/youtube.png"
            alt="youtube"
            className={styles.icon}
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.linksTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.linksTitle}>Tags</span>
          <Link href="/">Coding</Link>
          <Link href="/">Music</Link>
          <Link href="/">Film</Link>
          <Link href="/">Food</Link>
          <Link href="/">Gaming</Link>
          <Link href="/">Philosophy</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.linksTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
