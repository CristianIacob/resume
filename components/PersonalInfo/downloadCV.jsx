import React from "react";
import { download } from "../../Assets/svg/dynamic-svg";

function DownloadCV() {
  return (
    <button className="my-5 bg-blue-600 hover:bg-blue-700 focus:outline-none text-white font-bold py-2 px-4 rounded-lg capitalize flex items-center font-sans tracking-wider text-xs">
      <span className="w-3 h-3 mr-3 text-white fill-current">{download}</span>download resume
    </button>
  );
}

export default DownloadCV;
