import React, { useState } from "react";
import Swal from "sweetalert2";

const InputZone = ({ setImgUrl }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmitImage = () => {
    if (inputValue.match(/\.(jpeg|jpg|gif|png)$/)) setImgUrl(inputValue);
    else {
      Swal.fire({
        icon: "error",
        title: "Detect failed",
        text: "This is not an image URL, please check again",
      });
      setInputValue("");
    }
  };

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
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="w-25 h3 btn btn-info bold"
              onClick={handleSubmitImage}
            >
              DETECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputZone;
