-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "name" TEXT,
    "isAgree" BOOLEAN,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImage" TEXT,
    "price" TEXT NOT NULL,
    "isFree" BOOLEAN NOT NULL,
    "creatorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCourses" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCourses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lessons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "coverImage" TEXT NOT NULL,
    "video" TEXT NOT NULL,
    "coursesId" TEXT,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteCourses" (
    "id" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "coursesId" TEXT NOT NULL,

    CONSTRAINT "FavoriteCourses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCourses" ADD CONSTRAINT "UserCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCourses" ADD CONSTRAINT "UserCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lessons" ADD CONSTRAINT "Lessons_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCourses" ADD CONSTRAINT "FavoriteCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteCourses" ADD CONSTRAINT "FavoriteCourses_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
