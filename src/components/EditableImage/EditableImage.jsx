"use client";

import { CldUploadButton } from "next-cloudinary";

import Image from "next/image";
import { useState } from "react";

const EditableImage = ({ link, setLink }) => {
  const [myUrl, setUrl] = useState(link);
  const handleImageUpload = (result) => {
    const info = result.info;

    if ("secure_url" in info) {
      const url = info.secure_url;
      setUrl(url);
      setLink(url);
    }
  };
  return (
    <>
      {link && (
        <Image
          className="rounded-lg w-full h-full mb-1"
          src={myUrl}
          width={250}
          height={250}
          alt={"avatar"}
        />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-500 rounded-lg mb-1">
          No image
        </div>
      )}
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer w-full"
        onSuccess={handleImageUpload}
      >
        <div className="flex gap-3 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p className="text-sm">Upload Image</p>
        </div>
      </CldUploadButton>
    </>
  );
};

export default EditableImage;
