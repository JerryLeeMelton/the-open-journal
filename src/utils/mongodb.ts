import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_DB_URI

if (!MONGODB_URI) {
  throw new Error("MONGO_DB_URI is not defined in .env file")
}

interface Cached {
  conn: mongoose.Connection | null
  promise: Promise<mongoose.Connection> | null
}

let cached: Cached = (global as any).mongoose || { conn: null, promise: null }

const dbConnect = async (): Promise<mongoose.Connection> => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const options: mongoose.ConnectOptions = {
      bufferCommands: false,
    }

    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongooseConnection) => mongooseConnection.connection)
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
