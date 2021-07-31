import React from "react";
import Masonry from "react-masonry-css";

const ImagesGrid = ({ resource }) => {
  const imageUrls = resource.read();
  return (
    <Masonry
      breakpointCols={{
        default: 5,
        1800: 4,
        1300: 3,
        900: 2,
        500: 1,
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {imageUrls.map((src) => (
        <div key={src}>
          <img className="gallery-item rounded" alt="" src={src} />
        </div>
      ))}
    </Masonry>
  );
};

export default React.memo(ImagesGrid);
