"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://127.0.0.1:8000/upload", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  alert(data.message);
};

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Upload Documents
        </h1>

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

          <div className="font-semibold">
            {file.name}
          </div>
        </div>
      )}

      <button
               onClick={handleUpload}
               className="rounded-lg bg-black px-4 py-2 text-white"
       >  
           Upload
       </button>
    </div>
  );
}