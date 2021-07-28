import React, { useState } from "react";
import Swal from "sweetalert2";
import { MAX_SUPPORTED_IMAGE_URL_LENGTH } from "../../utils/enum";

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
        title: "Recognize failed",
        text: "Please input image URL containing image's format",
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <div>
        <p className="h3 text-center bold">
          I am Smart T-Rex, I will recognize international celebrites in your
          images.
        </p>
        <p className="h3 text-center bold">Git me a try.</p>
        <div className="d-flex justify-content-center">
          <div className="input-form input-recognize d-flex justify-content-center p-3 rounded shadow">
            <input
              className="h6 p-2 w-75"
              type="text"
              value={inputValue}
              placeholder="Input Image URL"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="w-25 h3 btn btn-info bold"
              onClick={handleSubmitImage}
            >
              Recognize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputZone;
