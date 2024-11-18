"use client"

import React, { useState } from "react"
import styles from "./CreatePost.module.css"
import Image from "next/image"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"
import "react-quill-new/dist/quill.bubble.css"

const CreatePost = () => {
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string>("")

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button
          className={styles.editorButton}
          onClick={() => {
            setAddMenuOpen(!addMenuOpen)
          }}
        >
          <Image src={"/plus.png"} alt="bold" width={16} height={16} />
        </button>
        {addMenuOpen && (
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
        <ReactQuill
          theme="bubble"
          value={content}
          onChange={setContent}
          placeholder="What are you thinking about?"
        />
      </div>
    </div>
  )
}

export default CreatePost
