import React, { useRef } from "react";
import useStickyElement from "./useStickyElement";
import Content from "./Content";

function App() {
  const myRef = useRef();

  const isSticky = useStickyElement({
    element: myRef,
    activeClass: "active-sticky"
  });

  return (
    <>
      <div className="parent-element">
        <div
          ref={myRef}
          className="sticky-header"
          style={{ padding: isSticky ? "2rem 0" : "1px 0 0 0" }}
        >
          <h1>Hey There</h1>
          <h1>Active sticky: {isSticky.toString()}</h1>

          <span className="animated-line" />
        </div>
        <Content />
      </div>
    </>
  );
}

export default App;
