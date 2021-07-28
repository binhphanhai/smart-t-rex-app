import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Select from "react-select";

import { capitalizeString } from "../../utils/helpers";

const InputZone = ({ celebrities, setName, isLoading }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleSetName = () => {
    if (selectedOption) setName(selectedOption.value);
    else
      Swal.fire({
        icon: "error",
        title: "Invalid celebrity",
        text: "Please select celebrity",
      });
  };

  useEffect(() => {
    setOptions(
      celebrities.map((celeb) => ({
        value: celeb,
        label: capitalizeString(celeb),
      }))
    );
  }, [celebrities]);

  return (
    <div>
      <div>
        <p className="h3 text-center bold">
          I am Smart T-Rex, please select recognized celebrity,
        </p>
        <p className="h3 text-center bold">
          I will show all submitted images containing that celebrity
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-form input-recogtrie rounded shadow row justify-content-center">
            <Select
              className="col-12 col-md-9 mt-2"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="Choose recognized celebrity"
              isLoading={isLoading}
            />
            <button
              className="col-6 col-md-3 h3 btn btn-info bold mt-2"
              onClick={handleSetName}
            >
              Get images
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputZone;
