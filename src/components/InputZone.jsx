import React, { useState } from "react";
import Swal from "sweetalert2";
import { MAX_SUPPORTED_IMAGE_URL_LENGTH } from "../utils/enum";

const InputZone = ({ setImgUrl }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmitImage = () => {
    if (inputValue.length > MAX_SUPPORTED_IMAGE_URL_LENGTH) {
      Swal.fire({
        icon: "error",
        title: "Image URL is too long",
        text: `Please input other image URL, maximun supported length is ${MAX_SUPPORTED_IMAGE_URL_LENGTH}`,
      });
      setInputValue("");
    } else if (inputValue.match(/(\.|\=)(jpeg|jpg|gif|png)/)) {
      setImgUrl(inputValue);
    } else {
      Swal.fire({
        icon: "error",
        title: "Detect failed",
        text: "Please input image URL containing image's format",
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <p className="h3 text-center bold">
          I am Smart T-Rex, I will detect international celebrites in your
          pictures. Git me a try.
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-form d-flex justify-content-center p-3 rounded shadow">
            <input
              className="h4 p-2 w-75 d-flex justify-content-center"
              type="text"
              value={inputValue}
              placeholder="Input Image URL"
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
