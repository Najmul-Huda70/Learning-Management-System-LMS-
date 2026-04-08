"use client";
import React, { useMemo, useState } from "react";
import courses from "../../data/courses.json";
import Link from "next/link";
export default function Classroom() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [Value, setValue] = useState("");
  const [filters, setFilters] = useState({
    year: "All",
    semester: "All",
    type: "All",
  });

  const HandleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  // console.log(open);
  const handleFilterBtn = () => {
    setOpen(!open);
    HandleFilterChange("year", "All");
    HandleFilterChange("semester", "All");
    HandleFilterChange("type", "All");
  };

  const search = Value.toLowerCase();
  const filteredCourse = useMemo(() => {
    return courses.filter((c) => {
      const matchesSearch =
        !search ||
        [c.courseId, c.title, c.type, c.teacher, c.semester, c.year, c.credits]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesFilter =
        (filters.year === "All" || c.year.startsWith(filters.year)) &&
        (filters.semester === "All" ||
          c.semester.startsWith(filters.semester)) &&
        (filters.type === "All" || c.type.includes(filters.type));
      return matchesSearch && matchesFilter;
    });
  }, [search, filters]);
  // console.log(Value);

  const itemsPerPage: number = 12;
  const courseLength: number = filteredCourse.length;
  const totalPages: number = Math.ceil(courseLength / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCourse = filteredCourse.slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  return (
    <div className="m-5 p-4  rounded-lg shadow-sm">
      <h1 className="text-3xl sm:text-5xl text-center  text-blue-400 font-semibold">
        My Classroom
      </h1>
      <p className="text-md sm:text-lg text-center mt-2 text-gray-500">
        Manage and access your enrolled classrooms
      </p>
      <div className="flex flex-col  sm:flex-row sm:justify-between sm:items-center my-5 gap-4">
        <div className="w-full flex items-center h-11 text-lg bg-[#0f172a] text-[#d1d5db] rounded-lg shadow-md overflow-hidden px-2">
          <input
            type="text"
            name="search"
            defaultValue={Value}
            autoComplete="off"
            onChange={(e) => setValue(e.target.value)}
            id="input"
            placeholder="Search course id , title..."
            className="w-full h-full outline-none text-lg px-2  caret-blue-500"
          />
          <label htmlFor="input" className="px-2 cursor-text">
            <svg viewBox="0 0 512 512" className="w-3 fill-gray-500">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </label>
          <div className="h-4/5 w-0.5  bg-gray-800"></div>
          <button className="p-3 m-1 h-full rounded-md hover:bg-gray-800 transition">
            <svg viewBox="0 0 384 512" className="w-3 fill-blue-500">
              <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-24 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" />
            </svg>
          </button>
        </div>
        <div className="w-30">
          <button
            onClick={handleFilterBtn}
            className="
      px-6 py-1 rounded-lg min-h-[2.4em] min-w-[3em]
      flex items-center gap-2
      text-[18px] font-bold tracking-wide leading-none text-white/90
      bg-[linear-gradient(140deg,#0f172a_0%,#1e293b_50%,rgba(15,23,42,0.7)_100%)]
      shadow-[inset_0.4px_1px_4px_rgba(128,128,128,0.8)]
      transition-all duration-100 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-110
      hover:shadow-[inset_0.4px_1px_4px_rgba(128,128,128,1),2px_4px_8px_rgba(0,0,0,0.3)] hover:text-white
      hover:[text-shadow:0_0_10px_rgba(255,255,255,0.4)]
      active:scale-100  active:tracking-widest   active:text-white
      active:shadow-[inset_0.4px_1px_8px_rgba(128,128,128,1),0_0_8px_rgba(96,165,250,0.6)] active:[text-shadow:0_0_20px_rgba(255,255,255,1)]
      "
          >
            Filter
          </button>
        </div>
      </div>
      <div
        className={`${open ? "flex" : "hidden"} flex-col gap-6 my-8 items-center transition-all duration-300`}
      >
        {/* Year Filter Pills */}
        <div className="flex  flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Year
          </span>
          <div className="flex flex-wrap bg-[#0f172a] p-1 rounded-md sm:rounded-full border border-gray-800 shadow-lg">
            {["All", "1st", "2nd", "3rd", "4th"].map((year) => (
              <button
                key={year}
                onClick={() => HandleFilterChange("year", year)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 
            ${
              year === filters.year
                ? "bg-[#0A66C2] text-white shadow-[0_0_15px_rgba(10,102,194,0.4)]"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            }`}
              >
                {year === "All" ? "All Years" : `${year} Year`}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Semester Pills */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Semester
            </span>
            <div className="flex bg-[#0f172a] p-1 rounded-full border border-gray-800">
              {["All", "1st", "2nd"].map((sem) => (
                <button
                  key={sem}
                  onClick={() => HandleFilterChange("semester", sem)}
                  className={`px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all ${
                    sem === filters.semester
                      ? "bg-[#0A66C2] text-white shadow-[0_0_15px_rgba(10,102,194,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {sem === "All" ? "All" : `${sem} Sem`}
                </button>
              ))}
            </div>
          </div>

          {/* Course Type Pills */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Type
            </span>
            <div className="flex bg-[#0f172a] p-1 rounded-full border border-gray-800">
              {["All", "Theory", "Lab"].map((type) => (
                <button
                  key={type}
                  onClick={() => HandleFilterChange("type", type)}
                  className={`px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all ${
                    type === filters.type
                      ? "bg-[#0A66C2] text-white shadow-[0_0_15px_rgba(10,102,194,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
        {currentCourse.length ? (
          currentCourse.map((course, index) => {
            return (
              <div
                key={index}
                className="group relative  p-4 pb-15 rounded-xl bg-[#0f172a] text-white overflow-hidden 
      shadow-[inset_0_-16px_24px_rgba(255,255,255,0.15)]"
              >
                {/* Title */}
                <Link href={`/classroom/${course.courseId.toLowerCase()}`}>
                  <h2 className="text-md sm:text-lg font-bold text-center text-cyan-400 hover:underline cursor-pointer">
                    {course.courseId} : {course.title}
                  </h2>
                </Link>

                {/* Info */}
                <div className="mt-3 flex flex-wrap gap-2 text-sm sm:text-md font-medium text-gray-300">
                  <span>
                    <span className="text-green-400 ">Type:</span> {course.type}
                  </span>
                  <span>
                    <span className="text-yellow-400">Credits:</span>{" "}
                    {course.credits}
                  </span>
                  <span>
                    <span className="text-emerald-400">Prerequisites:</span>{" "}
                    {course.prerequisites || "N/A"}
                  </span>
                </div>

                {/* Teacher */}
                <div className="my-2 text-md  text-gray-300">
                  <span className="font-semibold text-white">
                    Course Teacher:
                  </span>{" "}
                  {course.teacher}
                </div>

                <div className="absolute bottom-2 left-0 right-0 p-2">
                  {/* Divider */}
                  <div className="w-full h-0.5 bg-gray-700 my-1"></div>

                  {/* Footer */}
                  <div className="flex gap-10  justify-between items-center text-xs sm:text-sm">
                    <span className="text-gray-400">
                      {course.year} {course.semester}
                    </span>

                    {/* Icons */}
                    <div className="flex gap-0.5">
                      <Link
                        href={`classroom/${course.courseId.toLowerCase()}/classwork`}
                      >
                        <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-700 cursor-pointer transition">
                          <i className="fa-solid fa-user"></i>
                        </div>
                      </Link>
                      <Link
                        href={`classroom/${course.courseId.toLowerCase()}/file`}
                      >
                        <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-700 cursor-pointer transition">
                          <i className="fa-regular fa-folder"></i>
                        </div>
                      </Link>
                      <div className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-700 cursor-pointer transition">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-gray-400 font-semibold text-center col-span-full">
            No Course Available
          </div>
        )}
      </div>
      {currentCourse.length ? (
        <div className="mt-5 flex text-xs sm:text-lg justify-between items-center">
          <div className="text-white font-bold">
            Showing {Math.min(startIndex + 1, courseLength)} to{" "}
            {Math.min(startIndex + itemsPerPage, courseLength)} of{" "}
            {courseLength} results
          </div>
          <div className="flex items-center gap-2 text-gray-800">
            <button
              className="hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className="btn btn-active btn-xs sm:btn-sm bg-[#0f172a] text-white tex-sm sm:text-lg font-bold p-2 px-2 sm:px-3">
              {Math.min(currentPage, courseLength)}
            </div>
            <button
              className="hover:bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage >= totalPages}
            >
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
