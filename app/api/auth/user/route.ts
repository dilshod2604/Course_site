import { client } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const userCookie = await (await cookies()).get("user_id");
    if (!userCookie?.value) {
      return NextResponse.json(
        { error: "ID пользователя не найден" },
        { status: 401 }
      );
    }

    const user = await client.user.findFirst({
      where: {
        id: userCookie.value,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Пользователь не найден в базе данных" },
        { status: 404 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении пользователя:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request) => {
  try {
    const { name, avatar } = await req.json();

    const userCookie = await (await cookies()).get("user_id");
    if (!userCookie?.value) {
      return NextResponse.json(
        { error: "ID пользователя не найден" },
        { status: 401 }
      );
    }

    const userUpdate = await client.user.update({
      where: {
        id: userCookie.value,
      },
      data: {
        name,
        avatar,
      },
    });

    return NextResponse.json(userUpdate, { status: 200 });
  } catch (error) {
    console.error("Ошибка при обновлении профиля пользователя:", error);
    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
};