/*
  Warnings:

  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" VARCHAR(200) NOT NULL;

-- CreateTable
CREATE TABLE "Major" (
    "major_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "major_name" VARCHAR(40) NOT NULL,
    "major_des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Major_pkey" PRIMARY KEY ("major_id")
);

-- CreateTable
CREATE TABLE "Course" (
    "course_id" SERIAL NOT NULL,
    "course_name" VARCHAR(255) NOT NULL,
    "course_des" TEXT NOT NULL,
    "major_id" INTEGER NOT NULL,
    "author_id" INTEGER NOT NULL,
    "course_avatar_url" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "chapter_id" SERIAL NOT NULL,
    "chapter_name" VARCHAR(200) NOT NULL,
    "chapter_des" TEXT NOT NULL,
    "course_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("chapter_id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "lesson_id" SERIAL NOT NULL,
    "lesson_name" VARCHAR(255) NOT NULL,
    "lesson_des" TEXT NOT NULL,
    "lesson_video_url" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("lesson_id")
);

-- CreateTable
CREATE TABLE "UserLesson" (
    "user_id" INTEGER NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "next_lesson_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserLesson_pkey" PRIMARY KEY ("user_id","lesson_id")
);

-- AddForeignKey
ALTER TABLE "Major" ADD CONSTRAINT "Major_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_major_id_fkey" FOREIGN KEY ("major_id") REFERENCES "Major"("major_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLesson" ADD CONSTRAINT "UserLesson_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLesson" ADD CONSTRAINT "UserLesson_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "Lesson"("lesson_id") ON DELETE RESTRICT ON UPDATE CASCADE;
