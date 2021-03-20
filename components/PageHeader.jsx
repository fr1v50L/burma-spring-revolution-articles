import React from "react";

export default function PageHeader({ imgUrl, altText, pageName }) {
  return (
    <React.Fragment>
      <div className="md:flex md:justify-center md:items-center my-4">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-2 md:ml-0 md:mr-4 md:mb-0"
          src={imgUrl}
          alt={altText}
        />
        <h1 className="text-lg font-bold text-center">{pageName}</h1>
      </div>
    </React.Fragment>
  );
}
