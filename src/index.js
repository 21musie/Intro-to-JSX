import React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import UnorderedList from "./UnorderedList";

ReactDom.render(
  <div>
    <Heading />
    <UnorderedList />
  </div>,
  document.getElementById("root")
);
