import { NextRequest, NextResponse } from "next/server"
import * as jwt from "jsonwebtoken"

type LoginRequest = {
  username: string
  password: string
}

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const body = (await req.json()) as LoginRequest
    const { username, password } = body

    if (
      username === process.env.JERRY_USERNAME_SECRET &&
      password === process.env.JERRY_PASSWORD_SECRET
    ) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
      })

      const response = NextResponse.json({ message: "Login successful!" })
      response.headers.set(
        "Set-Cookie",
        `auth_token=${token}; HttpOnly; Secure; Path=/; Max-Age=604800; SameSite=Strict`
      )

      return response
    }

    return NextResponse.json(
      { message: "Invalid login credentials" },
      { status: 401 }
    )
  } catch (error) {
    console.error("Error processing login request:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    )
  }
}
