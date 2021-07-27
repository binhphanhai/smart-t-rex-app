import React from "react";

const ImagesZone = ({ imgUrl }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="mt-2 mb-2">
        <img id="inputimage" alt="" src={imgUrl} width="600px" heigh="auto" />
      </div>
    </div>
  );
};

export default ImagesZone;
