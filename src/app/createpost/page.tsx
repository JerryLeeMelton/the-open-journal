"use client"

import React, { useState } from "react"
import styles from "./CreatePost.module.css"
import Image from "next/image"
import ReactQuill from "react-quill-new"
import "react-quill-new/dist/quill.snow.css"
import "react-quill-new/dist/quill.bubble.css"
import { useRouter } from "next/navigation"
import { useUserAuth } from "@/context/UserAuthContext"

const categories = [
  { name: "Coding", slug: "coding" },
  { name: "Music", slug: "music" },
  { name: "Film", slug: "film" },
  { name: "Food", slug: "food" },
  { name: "Gaming", slug: "gaming" },
  { name: "Philosophy", slug: "philosophy" },
]

const CreatePost = () => {
  const router = useRouter()
  const { loggedIn } = useUserAuth()
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false)
  const [publishLoading, setPublishLoading] = useState<boolean>(false)

  const [postTitle, setPostTitle] = useState<string>("")
  const [postContent, setPostContent] = useState<string>("")
  const [postAuthor, setPostAuthor] = useState<string>("Jerry")
  const [postTags, setPostTags] = useState<string[]>([])

  if (!loggedIn) {
    router.push("/")
    return <div>You are not logged in!</div>
  }

  const handleTagChange = (slug: string) => {
    setPostTags((prevTags) => {
      if (prevTags.includes(slug)) {
        return prevTags.filter((tag) => tag !== slug)
      } else {
        return [...prevTags, slug]
      }
    })
  }

  const handlePublish = async () => {
    if (
      postTitle === "" ||
      postContent === "" ||
      postTitle == null ||
      postContent == null
    ) {
      alert("Please fill title and content")
      return
    }

    setPublishLoading(true)

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          author: postAuthor,
          tags: postTags,
          published: new Date(),
        }),
      })

      if (response.ok) {
        router.push("/")
      } else {
        const errorData = await response.json()
        alert(
          `An unexpected error occurred while publishing the post: ${errorData.message}`
        )
      }
    } catch (error) {
      console.error("Error publishing post:", error)
      alert(
        "An unexpected error occurred while publishing the post. Please try again."
      )
    } finally {
      setPublishLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      {/* Title Input */}
      <input
        type="text"
        placeholder="Title"
        className={styles.titleInput}
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
      />
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
          className={styles.editorInput}
          theme="bubble"
          value={postContent}
          onChange={setPostContent}
          placeholder="What are you thinking about?"
        />
      </div>
      {/* Tags Input */}
      <div className={styles.tagsContainer}>
        <h4>Post Tags:</h4>
        <div className={styles.tagsList}>
          {categories.map((category) => (
            <div
              key={"tag-selector-" + category.slug}
              className={styles.tagCheckboxContainer}
            >
              <label className={styles.tagCheckbox}>
                <input
                  type="checkbox"
                  value={category.slug}
                  checked={postTags.includes(category.slug)}
                  onChange={() => handleTagChange(category.slug)}
                />
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        className={styles.publishButton}
        disabled={!postTitle || !postContent || !postAuthor || publishLoading}
        onClick={handlePublish}
      >
        {publishLoading ? "Publishing..." : "Publish"}
      </button>
    </div>
  )
}

export default CreatePost
