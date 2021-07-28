import React from "react";

const ImagesGrid = ({ imageUrls }) => {
  return (
    <div className="images-grid rounded d-flex flex-wrap align-items-start align-content">
      {imageUrls.map((src) => (
        <img
          key={src}
          className="rounded m-2"
          alt=""
          src={src}
          width="300px"
          height="auto"
        />
      ))}
    </div>
  );
};

export default ImagesGrid;
