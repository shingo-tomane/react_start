import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickButton = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">お元気です</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
