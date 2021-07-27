import React, { useState, useEffect } from "react";
import Select from "react-select";

import { capitalizeString } from "../../utils/helpers";

const InputZone = ({ celebrities, setName }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleSetName = () => {
    if (selectedOption) setName(selectedOption.value);
    else console.log("erradadad");
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
          I am Smart T-Rex, select recognized celebrity, I will show all
          submitted images containing that celebrity
        </p>
        <div className="d-flex justify-content-center">
          <div className="input-form input-recogtrie d-flex justify-content-center p-3 rounded shadow">
            <Select
              className="h6 w-75"
              value={selectedOption}
              onChange={handleChange}
              options={options}
              placeholder="Choose recognized celebrity"
            />
            <button
              className="w-25 h3 btn btn-info bold"
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
