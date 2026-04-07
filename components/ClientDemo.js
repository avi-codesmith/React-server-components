"use client";

// import RSCDemo from "./RSCDemo";

// import { useState } from "react";

export default function ClientDemo({ children }) {
  console.log("ClientDemo rendered");
  // const [count, setCount] = useState(0);
  // function handleCount() {
  //   setCount((prev) => prev + 1);
  // }
  return (
    <div className="client-cmp">
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      {children}
      {/* <p>
        <button onClick={handleCount}>Increase</button>
        <span>{count}</span>
      </p> */}
      {/* <RSCDemo /> not alowed */}
    </div>
  );
}
