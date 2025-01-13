import { client} from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const { email, password, name, isAggree } = data;

    // Проверка, существует ли пользователь
    const isUserExist = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExist) {
      return NextResponse.json(
        { message: "The user with this email already exists" },
        { status: 400 }
      );
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = await client.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        isAggree,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
    console.log(error);
    
  }
};
