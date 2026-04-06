"use client";
import React, { use } from "react";
import courses from "../../../data/courses.json";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CourseHeader({
  params,
}: {
  params: Promise<{ CourseCode: string }>;
}) {
  const { CourseCode } = use(params);
  const course = courses.find(
    (item) => item.courseId.toLowerCase() === CourseCode.toLowerCase(),
  );
  const pathname = usePathname();
  // active link style
  const linkStyle = (path: string) =>
    `px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
      pathname === path
        ? "text-cyan-400 border-b-2 border-cyan-400 bg-cyan-900/20"
        : "text-gray-400 hover:text-white hover:bg-gray-800"
    }`;
  return (
    <div className="space-y-4">
      <nav className="flex gap-1 px-4 mb-4 border-b border-gray-800">
        <Link
          href={`/classroom/${CourseCode}`}
          className={linkStyle(`/classroom/${CourseCode}`)}
        >
          Stream
        </Link>
        <Link
          href={`/classroom/${CourseCode}/classwork`}
          className={linkStyle(`/classroom/${CourseCode}/classwork`)}
        >
          Classwork
        </Link>
        <Link
          href={`/classroom/${CourseCode}/file`}
          className={linkStyle(`/classroom/${CourseCode}/file`)}
        >
          File Explorer
        </Link>
      </nav>
      <h1 className="text-5xl text-center mt-5 text-blue-400 font-semibold">
        {course?.title} ({course?.courseId})
      </h1>
      <h3 className="text-lg text-center mt-2 text-gray-500">
        {course?.year} {course?.semester}
      </h3>

      <div className="flex justify-between flex-wrap text-gray-600 text-lg gap-2">
        <div className="text-gray-600">
          <span className="text-lg text-gray-400 font-semibold">
            Course Teacher:
          </span>{" "}
          {course?.teacher}
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <span>
            <span className="text-green-600">Type:</span> {course?.type}
          </span>
          <span>
            <span className="text-yellow-600">Credits:</span> {course?.credits}
          </span>
          <span>
            <span className="text-emerald-600">Prerequisties:</span>{" "}
            {course?.prerequisites ? course?.prerequisites : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
