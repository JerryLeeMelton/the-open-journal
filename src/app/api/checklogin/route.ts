import { NextRequest, NextResponse } from "next/server"
import * as jwt from "jsonwebtoken"

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  const token = req.cookies.get("auth_token")?.value

  if (token === undefined || token === null) {
    return NextResponse.json({ loggedIn: false, user: null }, { status: 200 })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    return NextResponse.json({ loggedIn: true, user: decoded }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ loggedIn: false }, { status: 200 })
  }
}
