import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(req: NextResponse) {
    const { searchParams } = new URL(req.url);

    const accessToken = searchParams.get("accessToken");
    const userId = searchParams.get("userId");
    const firstName = searchParams.get("firstName");
    const lastName = searchParams.get("lastName");
    const avatar = searchParams.get("avatar");

    if (!accessToken || !userId || !firstName || !lastName) throw new Error("Google oauth failed!");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-token`, {
        headers: {
            authorization: `Bearer ${accessToken}`,
        },
    });

    if (res.status === 401) throw new Error("jwt verification failed!");

    await createSession({
        user: {
            id: userId,
            firstName,
            lastName,
            avatar: avatar ?? undefined,
        },
        accessToken,
    });
    redirect("/");
}
