"use client"

import { useState } from "react"
import styles from "./CreatePost.module.css"
import Image from "next/image"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const CreatePost = () => {
  const [openAddMenu, setOpenAddMenu] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.editorButton}>
          <Image src={"/plus.png"} alt="bold" width={16} height={16} />
        </button>
        {openAddMenu && (
          <div className={styles.addMenu}>
            <button className={styles.addMenuButton}>
              <Image src={"/image.png"} alt="bold" width={16} height={16} />
            </button>
            <button className={styles.addMenuButton}>
              <Image src={"/external.png"} alt="bold" width={16} height={16} />
            </button>
            <button className={styles.addMenuButton}>
              <Image src={"/video.png"} alt="bold" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill theme="bubble" />
      </div>
    </div>
  )
}

export default CreatePost
