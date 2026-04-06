"use client";
// import React, { use } from "react";
// import courses from "../../../data/courses.json";
import postsData from "../../../data/post.json";
// import Image from "next/image";
import {
  MoreVertical,
  Clock,
  Calendar,
  FileText,
  Download,
} from "lucide-react";

export default function CourseDetails(
  {
    // params,
  }: {
    params: Promise<{ id: string }>;
  },
) {
  // const { id } = use(params);

  // const course = courses.find(
  //   (item) => item.courseId.toLowerCase() === id.toLowerCase(),
  // );

  return (
    <>
      <div className="grid grid-cols-11 my-8 gap-7 justify-center items-start">
        {/* Search and Action Bar row-1 */}
        <div className="col-span-8 mx-auto z-0 w-full flex items-center h-11 text-lg bg-blue-600/3  text-[#d1d5db] rounded-lg shadow-md overflow-hidden px-2">
          <input
            type="text"
            name="search"
            autoComplete="off"
            // defaultValue={Value}
            // onChange={(e) => setValue(e.target.value)}
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
        {/* filter and create post */}
        <div className="col-span-3 flex z-0 justify-between items-center gap-4">
          <div className="w-30">
            <button
              // onClick={handleFilterBtn}
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

          <div className="text-xl">
            <button className="bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap">
              + Create Post
            </button>
          </div>
        </div>
        {/* row-2 */}
        {/* Main Post section */}
        <div className="col-span-8 mx-auto flex flex-col gap-5 w-full lg:w-2/3">
          {postsData.map((post) => {
            const isTeacher = post.position === "teacher";

            return (
              <div
                key={post.id}
                className="bg-blue-600/3 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-gray-700 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-inner">
                      {post.postedBy[0]}
                    </div>
                    <div>
                      <h3 className="text-gray-100 font-bold text-lg leading-tight">
                        {post.postedBy}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-[11px] font-medium tracking-wide uppercase">
                        <span
                          className={`px-2 py-0.5 rounded-md ${isTeacher ? "text-orange-400 bg-orange-400/10 border border-orange-400/20" : "text-blue-400 bg-blue-400/10 border border-blue-400/20"}`}
                        >
                          {post.position}
                        </span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <Clock size={12} /> {post.postTime}
                        </span>
                        <span className="text-gray-500 flex items-center gap-1">
                          <Calendar size={12} /> {post.postData}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-white p-2 hover:bg-gray-800 rounded-full transition-all">
                    <MoreVertical size={20} />
                  </button>
                </div>

                {/* Description */}
                <div className="text-gray-300 text-base leading-relaxed mb-4">
                  <p className="font-['Hind_Siliguri']">{post.description}</p>
                </div>

                {/* Post Image */}
                {/* {post.attachments?.hasImage && post.attachments?.imageUrl && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-gray-800">
                    <Image
                      src={post.attachments.imageUrl}
                      width={1200}
                      height={800}
                      alt="Post Content"
                      className="w-full h-auto object-contain max-h-100"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )} */}

                {/* Post Document */}
                {post.attachments && post.attachments.hasFile && (
                  <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4 flex items-center justify-between group hover:bg-gray-800/60 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                        <FileText size={24} />
                      </div>
                      <div className="max-w-37.5 md:max-w-xs">
                        <p className="text-sm font-semibold text-gray-200 truncate">
                          {post.attachments.fileName.split("/").pop()}
                        </p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-0.5">
                          PDF • {post.attachments.fileSize}
                        </p>
                      </div>
                    </div>
                    <a
                      href={post.attachments.fileUrl}
                      className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-lg transition-all"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar - Upcoming */}
        <div className="col-span-3 hidden lg:block w-full sticky top-20 z-0 bg-blue-600/3  border border-gray-800 rounded-2xl p-5">
          <h4 className="text-lg mb-3 font-semibold text-gray-100">Upcoming</h4>
          <p className="text-sm text-gray-400 mb-4">
            Woohoo, no work due soon!
          </p>
          <button className="w-full text-center py-2 text-sm font-medium text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all">
            View all
          </button>
        </div>
      </div>
    </>
  );
}
