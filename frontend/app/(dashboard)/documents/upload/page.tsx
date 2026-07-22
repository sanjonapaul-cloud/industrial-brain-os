"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
const [uploadResult, setUploadResult] = useState<any>(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || "Upload failed.");
        return;
      }

      setUploadResult(data);

console.log(data);
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Upload Documents</h1>

        <p className="text-muted-foreground">
          Upload industrial PDF documents.
        </p>
      </div>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files?.length) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {file && (
        <div>
          Selected File:
          <div className="font-semibold">{file.name}</div>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Upload
      </button>
      {uploadResult && (
  <div className="rounded-lg border border-green-300 bg-green-50 p-4 mt-4">
    <h3 className="font-semibold text-green-700">
      ✅ Upload Successful
    </h3>

    <div className="mt-2 text-sm space-y-1">
      <p>
        <strong>File:</strong> {uploadResult.original_filename}
      </p>

      <p>
        <strong>Pages:</strong> {uploadResult.page_count}
      </p>

      <p>
        <strong>Chunks:</strong> {uploadResult.chunk_count}
      </p>

      <p>
        <strong>Status:</strong> {uploadResult.status}
      </p>
    </div>
  </div>
)}
    </div>
  );
}