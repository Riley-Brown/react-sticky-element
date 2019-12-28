# React hook for detecting active sticky position

Useful for wanting to style a `position: sticky` element differently once it is in a sticky state.

[Code sandbox demo](https://codesandbox.io/s/elegant-violet-2h760?fontsize=14&hidenavigation=1&module=%2Fsrc%2FuseStickyElement.jsx&theme=dark)

![](./demo.gif)

# Basic hook usage

```jsx
import React, { useRef } from "react";
import useStickyElement from "./useStickyElement";

const myRef = useRef();
const isSticky = useStickyElement({
  element: myRef,
  activeClass: "active-sticky"
});

return (
  <div className="parent-element">
    <div
      ref={myRef}
      className="sticky-header"
      style={{
        position: "sticky",
        padding: isSticky ? "2rem 0" : "1px 0 0 0"
      }}
    >
      <h1>Active sticky: {isSticky.toString()}</h1>
    </div>
  </div>
);
```

# Arguments

Arguments passed to `useStickyElement()` invocation

### `element`

An element observed by the hook to detect an active sticky position state

- Type: `string` or `React.useRef`
- Required: `true`

  example:

  ```jsx
  const myRef = React.useRef();
  const isSticky = useStickyElement({ element: myRef });
  ```

  or

  ```jsx
  const isSticky = useStickyElement({
    element: ".class-or-id-in-your-component"
  });
  ```

  <hr>

### `activeClass`

Toggles class to element when in an active sticky state

- Type: `string`
- Required: `false`
