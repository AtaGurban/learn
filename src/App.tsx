import React from "react";
import Card, { CardVariants } from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariants.outline}
      >
        <button>Button</button>
      </Card>
    </div>
  );
};

export default App;
