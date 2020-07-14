import React from "react";
import { download } from "../../Assets/svg/dynamic-svg";
import { contentPDF } from "./generatePDF";

function DownloadCV() {
  async function createPDF() {
    const pdfMake = (await import(/* webpackChunkName: "pdfMake" */ "pdfmake/build/pdfmake.min")).default;
    const pdfFonts = (await import(/* webpackChunkName: "pdfFonts" */ "pdfmake/build/vfs_fonts")).default;
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(contentPDF).open();
  }

  const handleDownloadCV = () => {
    createPDF();
  };

  return (
    <button
      className="my-5 bg-blue-600 hover:bg-blue-700 focus:outline-none text-white font-bold py-2 px-4 rounded-lg capitalize flex items-center font-sans tracking-wider text-xs"
      onClick={handleDownloadCV}>
      <span className="w-3 h-3 mr-3 text-white fill-current">{download}</span>download resume
    </button>
  );
}

export default DownloadCV;
