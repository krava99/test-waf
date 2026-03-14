import { NextResponse } from "next/server";
import { globalApi } from "../api";
import { cookies } from "next/dist/server/request/cookies";
import { isAxiosError } from "axios";

// export async function GET() {
//   try {
//     console.log("qweqweqwqwe");
//     const res = await globalApi.get("/users");
//     const data = res.data;
//     console.log(data);
//     return NextResponse.json(data);
//   } catch (error) {
//     const axiosError = error as ApiError;

//     return NextResponse.json(
//       {
//         error: axiosError.response?.data?.error ?? axiosError.message,
//       },
//       {
//         status: axiosError.response?.status,
//       },
//     );
//   }
// }

export async function GET() {
  try {
    const cookieStore = await cookies();

    const res = await globalApi("/users", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 500 },
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
