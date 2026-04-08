import React from "react";

export default function loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className="bg-[#0D1117] border border-gray-800 rounded-2xl p-6 animate-pulse"
        >
          {/* Course ID & Title */}
          <div className="h-6 bg-gray-800 rounded-md w-3/4 mb-4"></div>
          {/* Info Rows */}
          <div className="space-y-3">
            <div className="h-4 bg-gray-800 rounded w-1/2"></div>
            <div className="h-4 bg-gray-800 rounded w-2/3"></div>
            <div className="h-4 bg-gray-800 rounded w-1/3"></div>
          </div>
          {/* Footer Icons */}
          <div className="mt-8 flex justify-between">
            <div className="h-4 bg-gray-800 rounded w-20"></div>
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
              <div className="w-5 h-5 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
