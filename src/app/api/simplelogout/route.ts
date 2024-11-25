import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  console.log("simplelogout  route!  :  req == ", req)

  const response = NextResponse.json({ message: "Logout successful!" })
  response.headers.set(
    "Set-Cookie",
    `auth_token=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict`
  )

  return response
}
