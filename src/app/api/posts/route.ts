import { NextRequest, NextResponse } from "next/server"
import dbConnect from "@/utils/mongodb"
import Post from "@/models/Post"

type PostRequest = {
  title: string
  content: string
  author: string
  tags?: string[]
  published: Date
}

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect()

    const posts = await Post.find({}).sort({ published: -1 })

    return NextResponse.json({ posts }, { status: 200 })
  } catch (error) {
    console.error("Error fetching posts:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await dbConnect()

    const body = (await req.json()) as PostRequest

    const { title, content, author, tags, published } = body

    if (!title || !content || !author || !published) {
      return NextResponse.json(
        {
          message: "Title, content, author, and published fields are required",
        },
        { status: 400 }
      )
    }

    const newPost = await Post.create({ title, content, author, tags })

    return NextResponse.json(
      {
        post: newPost,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating new post:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
