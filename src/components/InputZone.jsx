import React from "react";

const InputZone = () => {
  return (
    <div>
      <div>
        <p className="h3 text-center bold">
          I am Smart T-Rex, I will detect celebrites in your pictures. Git me a
          try.
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-form d-flex justify-content-center p-3 rounded shadow">
            <input
              className="h4 p-2 w-75 d-flex justify-content-center"
              type="text"
            />
            <button className="w-25 h3 btn btn-info bold">DETECT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputZone;
