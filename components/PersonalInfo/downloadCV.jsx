import React from "react";
import { download } from "../../Assets/svg/dynamic-svg";

function DownloadCV() {
  return (
    <a
      href="cristian_iacob_resume.pdf"
      download
      className="my-5 text-gray-700 shadow hover:shadow-md hover:no-underline focus:outline-none font-bold py-2 px-4 rounded-lg capitalize flex items-center font-sans text-xs">
      <span className="w-3 h-3 mr-3 text-gray-700 fill-current">{download}</span>download resume
    </a>
  );
}

export default DownloadCV;
