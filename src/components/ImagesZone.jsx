import React, { useRef, useState, useEffect } from "react";

const ImagesZone = ({ imgUrl, boundingBox, name, exact }) => {
  const imageRef = useRef(null);
  const [box, setBox] = useState(null);
  console.log(box);

  useEffect(() => {
    if (imageRef.current && boundingBox) {
      const { width, height } = imageRef.current;
      setBox({
        top: boundingBox.topRow * height,
        right: boundingBox.rightCol * width,
        bottom: boundingBox.bottomRow * height,
        left: boundingBox.leftCol * width,
      });
    }
  }, [imageRef.current, boundingBox]);

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
        {box && (
          <div
            className="bounding-box"
            style={{
              top: box.top,
              right: box.right,
              bottom: box.bottom,
              left: box.left,
            }}
          >
            <div className="bounding-box-concepts">
              <div className="bounding-box__concept">
                <div className="concept__name">{name}</div>
                <div className="concept__prediction-val">
                  {Math.floor(exact * 10000) / 100}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesZone;
