import { NextRequest, NextResponse } from "next/server"
import * as jwt from "jsonwebtoken"

export const loginMiddleware = (req: NextRequest) => {
  const token = req.cookies.get("auth_token")?.value

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.next()
  } catch (error) {
    console.error("Error verifying token:", error)
    return NextResponse.json(
      { message: "Forbidden: Invalid Token" },
      { status: 403 }
    )
  }
}

export const config = {
  matcher: ["/protected/:path*"],
}
