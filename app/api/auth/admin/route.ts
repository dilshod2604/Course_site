import { client } from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const adminCookie = await (await cookies()).get("user_id");
    if (!adminCookie?.value) {
      return NextResponse.json(
        { error: "ID администратора не найден" },
        { status: 401 }
      );
    }

    const admin = await client.user.findFirst({
      where: {
        id: adminCookie.value,
        role: "ADMIN", 
      },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Администратор не найден в базе данных" },
        { status: 404 }
      );
    }

    return NextResponse.json(admin, { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении администратора:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: Request) => {
  try {
    const { name, avatar } = await req.json();

    const adminCookie = await (await cookies()).get("user_id");
    if (!adminCookie?.value) {
      return NextResponse.json(
        { error: "ID администратора не найден" },
        { status: 401 }
      );
    }

    const admin = await client.user.findFirst({
      where: {
        id: adminCookie.value,
        role: "ADMIN",
      },
    });

    if (!admin) {
      return NextResponse.json(
        { error: "Администратор с таким ID не найден или не является администратором" },
        { status: 404 }
      );
    }

    const adminUpdate = await client.user.update({
      where: {
        id: adminCookie.value,
      },
      data: {
        name,
        avatar,
      },
    });

    return NextResponse.json(adminUpdate, { status: 200 });
  } catch (error) {
    console.error("Ошибка при обновлении данных администратора:", error);
    return NextResponse.json(
      { message: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
};