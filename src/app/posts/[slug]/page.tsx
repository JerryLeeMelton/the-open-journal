import React from "react"
import styles from "./singlePostPage.module.css"
import Menu from "@/components/Menu/Menu"
import Image from "next/image"

const SinglePostPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is that title!</h1>
          {/* USER INFO AREA ================================== */}
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src={"/p1.jpeg"}
                alt="user image"
                fill
                className={styles.userAvatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.postDate}>2024.11.11</span>
            </div>
          </div>
        </div>
        {/* HERO IMAGE AREA ================================== */}
        <div className={styles.imageContainer}>
          <Image
            src={"/p1.jpeg"}
            alt="post image"
            fill
            className={styles.heroImage}
          />
        </div>
      </div>
      {/* CONTENT AREA ================================== */}
      <div className={styles.contentContainer}>
        <div className={styles.post}>
          <div className={styles.postContent}>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies
              efficitur arcu diam egestas pharetra augue finibus. Nam habitasse
              arcu vehicula vehicula rutrum. Et nam convallis ullamcorper
              suspendisse turpis dictumst. Volutpat in ante accumsan dolor
              mauris eros adipiscing. Etiam ac etiam, proin ligula dignissim
              nunc lacus. Nostra tempor cubilia nullam sollicitudin pharetra
              penatibus vitae. Leo ex phasellus nulla, torquent tempus mus. Urna
              arcu himenaeos viverra nisi maximus fringilla.
            </p>
            <p>
              Neque dignissim turpis curae aliquam ultricies. Sodales suscipit
              ridiculus mus penatibus ad amet et. Laoreet enim varius sed fusce
              vel litora interdum. Dui varius torquent risus facilisis senectus
              in ac etiam mollis. Enim ac porttitor lacinia, facilisi dictum
              cras ut. Nostra mattis turpis dis curabitur, quis rhoncus nostra.
              Lobortis nunc facilisi fringilla rutrum praesent commodo porttitor
              ex. Natoque congue lacus fames interdum, habitasse per integer
              pharetra. Cubilia nullam magna ultricies, dolor eros rhoncus
              maecenas sem.
            </p>
            <p>
              Nunc porta quisque porta tortor class. Congue interdum egestas
              per, taciti phasellus malesuada. Ridiculus amet elit maecenas quis
              hendrerit tristique. Posuere placerat et; mollis fames primis
              sociosqu. Fames adipiscing at sit inceptos himenaeos vivamus
              litora. Adipiscing dictum libero ex dignissim aenean, hendrerit
              curabitur orci. Per ornare elit inceptos ipsum ex montes gravida
              ipsum.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePostPage
