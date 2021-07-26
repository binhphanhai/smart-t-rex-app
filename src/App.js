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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos
        delectus voluptatem ab repellat saepe eos molestiae cupiditate, omnis
        doloremque, necessitatibus totam consectetur porro sint quam libero
        aperiam? Laborum, quaerat?afeqw
      </p>
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
