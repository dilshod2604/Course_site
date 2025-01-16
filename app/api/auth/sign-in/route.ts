import bcrypt from "bcrypt";
import { client } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    //проверка user
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json({ error: "User is not found" }, { status: 401 });
    }
    //проверка паролья
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Please write the correct password" },
        { status: 401 }
      );
    }
    //сохранить user.id в cookies
    const res = NextResponse.json(user, { status: 200 });
    res.cookies.set("user_id", user.id, {
      path: "/",
      maxAge: 24 * 60 * 60 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return res;
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
};
