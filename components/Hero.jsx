import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Hero() {
  const imageInfo = [
    {
      id: uuidv4(),
      link: "/we-resist",
      imgUrl: "/we-resist-burma.jpg",
      altText: "We Resist - Burma Logo",
    },
    {
      id: uuidv4(),
      link: "/hell-hound",
      imgUrl: "/hell-hound.jpg",
      altText: "Hell Hound Logo",
    },
    {
      id: uuidv4(),
      link: "/bbp-resistance",
      imgUrl: "/bbp-resistance.jpg",
      altText: "BBP - Resistance Logo",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-black bg-opacity-75 py-8 px-4 md:px-32 md:py-32">
        <h1 className="text-red-600 text-center text-lg md:text-5xl font-bold mb-8">
          Burma Spring Revolution Articles
        </h1>
        <h1 className="text-red-600 text-center text-lg font-bold mb-16">
          ဗမာ့နွေဦးတော်လှန်ရေးစာစဉ်
        </h1>
        <div className="md:flex items-center justify-center">
          {imageInfo.map((ii) => (
            <a key={ii.id} href={ii.link}>
              <img
                className="w-32 h-32 rounded-full mx-auto mt-8 md:mx-8"
                src={ii.imgUrl}
                alt={ii.altText}
              />
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
