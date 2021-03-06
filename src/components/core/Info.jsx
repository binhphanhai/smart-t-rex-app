import React from "react";
import { useGetUser } from "../../utils/userProvider";

const Info = () => {
  const user = useGetUser();
  return (
    <div>
      <div className="text-primary text-center h3 welcome-message">
        {`Hi ${user.name}, your current entry count is...`}
      </div>
      <div className="text-primary text-center h1">{user.entries}</div>
    </div>
  );
};

export default Info;
