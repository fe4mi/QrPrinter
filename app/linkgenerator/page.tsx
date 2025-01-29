"use client";
import { CldImage } from 'next-cloudinary';



export default function Page() {
  return (
    <CldImage
      alt=''
      src="/public/papiertło.jpeg"   
      width="500"
      height="500"
      crop="auto"
    />
  );
}
