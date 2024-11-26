import mongoose, { Document, Model, Schema } from "mongoose"

interface IPost extends Document {
  title: string
  content: string
  author: string
  tags?: string[]
  published: Date
}

const PostSchema: Schema<IPost> = new Schema({
  title: { type: String, required: true, trim: true, minlength: 1 },
  content: { type: String, required: true },
  author: { type: String, required: true, trim: true },
  tags: { type: [String], required: false },
  published: { type: Date, required: true, default: Date.now },
})

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema)

export default Post
