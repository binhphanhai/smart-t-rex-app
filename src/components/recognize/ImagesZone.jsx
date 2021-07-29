import React, { useRef, useState, useEffect } from "react";

const ImagesZone = ({ imgUrl, celebrities }) => {
  const imageRef = useRef(null);
  console.log("render imasdnput zone");

  return (
    <div className="d-flex justify-content-center">
      <div className="absolute mt-2 mb-2">
        <img
          ref={imageRef}
          id="inputimage"
          alt=""
          src={imgUrl}
          width="600px"
          heigh="auto"
        />
        {imageRef.current !== null &&
          celebrities.length > 0 &&
          celebrities.map((celeb) => (
            <div
              key={celeb.id}
              className="bounding-box"
              style={{
                top: celeb.boundingBox.topRow * imageRef.current.height,
                right: celeb.boundingBox.rightCol * imageRef.current.width,
                bottom: celeb.boundingBox.bottomRow * imageRef.current.height,
                left: celeb.boundingBox.leftCol * imageRef.current.width,
              }}
            >
              <div className="bounding-box-concepts">
                <div className="bounding-box__concept">
                  <div className="concept__name">
                    {celeb.prediction > 0.1 ? celeb.name : "Unknown"}
                  </div>
                  {celeb.prediction > 0.1 && (
                    <div className="concept__prediction-val">
                      {Math.floor(celeb.prediction * 10000) / 100}%
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(ImagesZone);
