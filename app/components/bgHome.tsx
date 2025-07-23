'use client';
import { useEffect, useState } from 'react';

const images = [
  '/img/bg1.png',
  '/img/bg2.png',
  '/img/bg3.png',
];

export default function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full h-90 bg-cover bg-center transition-all duration-2000"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >
      {/* Bisa tambahin konten di sini */}
    </div>
  );
}
