import React from "react";
import imgSrc from "./assets/background.jpg";
import { Button } from "react-bootstrap";
const Lazy = React.lazy(() => import("./components/Lazy"));
// import Lazy from "./components/Lazy";

const App = () => {
  const [isShowed, setIsShowed] = React.useState(false);
  return (
    <div>
      <h1>AAAAAAAAAA cay qua</h1>
      <p>abcawsoihoihoih iohoihio</p>
      <Button variant="secondary" onClick={() => setIsShowed(true)}>
        Click me!!!
      </Button>
      {isShowed && (
        <React.Suspense fallback="...">
          <Lazy></Lazy>
        </React.Suspense>
      )}
    </div>
  );
};

export default App;
