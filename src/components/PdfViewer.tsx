import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Define consistent version for all PDF.js related packages
const PDF_VERSION = "3.11.174";
const pdfWorkerUrl = `https://unpkg.com/pdfjs-dist@${PDF_VERSION}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => (
  <div className="h-full w-full bg-[#F9FAFB]">
    <Worker workerUrl={pdfWorkerUrl}>
      <Viewer
        fileUrl={fileUrl}
        defaultScale={1}
        renderLoader={(percentages: number) => (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">
              Loading document... {Math.round(percentages)}%
            </div>
          </div>
        )}
      />
    </Worker>
  </div>
);

export default PdfViewer;
