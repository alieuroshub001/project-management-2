
'use client';

import { useState } from 'react';
import { FiEdit, FiTrash2, FiUserPlus, FiSearch } from 'react-icons/fi';
import HrLayout from '@/components/Hr Management/Layout';
import Image from 'next/image';

export default function Documents() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile.name);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Upload Document</h2>
      <div className="bg-card border border-border p-6 rounded-xl shadow space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full text-sm "
        />
        {selectedFile && (
          <div className="text-sm text-foreground">
            <p><strong>File:</strong> {selectedFile.name}</p>
            <p>Type: {selectedFile.type}</p>
          </div>
        )}
        <button
          onClick={handleUpload}
          className="bg-primary  px-6 py-2 rounded hover:bg-opacity-90"
        >
          Upload
        </button>
      </div>
    </div>
  );
}