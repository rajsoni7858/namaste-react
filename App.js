import React from "react";
import ReactDOM from "react-dom/client";

//JSX (transpiled before it reaches  the JS)- PARCEL - Babel

//React Element
const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

//React Functional Component
//Component Conmposition
const HeadingComponent = () => (
  <div className="container">
    {123151}
    <Title></Title>
    <h1>Namaste React Functional Component</h1>
  </div>
);

//

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
