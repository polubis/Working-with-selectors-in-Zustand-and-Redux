import React, { useState } from "react";
import "./styles.css";
import { Zustand } from "./zustand/Zustand";
import { Redux } from "./redux/Redux";

export default function App() {
  const [active, setActive] = useState<"zustand" | "redux">("zustand");

  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      {active} is active
      <button onClick={() => setActive("zustand")}>Zustand</button>
      <button onClick={() => setActive("redux")}>Redux</button>
      {active === "zustand" && <Zustand />}
      {active === "redux" && <Redux />}
    </div>
  );
}
