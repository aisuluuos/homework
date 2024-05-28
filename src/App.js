import React, { useState } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ClickButton from "./components/ClickButton";
import ResetBtn from "./components/ResetBtn";
const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const resetClickCount = () => {
    setClickCount(0);
  };
  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div className="app">
      <h1 className="title">Отслеживание кликов</h1>
      <ClickCounter clickCount={clickCount} />
      <ClickButton onClick={incrementClickCount} />
      <ResetBtn onClick={resetClickCount} />
    </div>
  );
};

export default App;
