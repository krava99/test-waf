import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { globalApi } from "../../api";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  await globalApi.post("auth/logout", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logged out successfully" });
}
