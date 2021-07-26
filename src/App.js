import React from "react";
import imgSrc from "./assets/background.jpg";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <h1>AAAAAAAAAA cay qua</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos
        delectus voluptatem ab repellat saepe eos molestiae cupiditate, omnis
        doloremque, necessitatibus totam consectetur porro sint quam libero
        aperiam? Laborum, quaerat?
      </p>
      <Button variant="secondary">acs</Button>
      <img alt="" src={imgSrc} />
    </div>
  );
};

export default App;
