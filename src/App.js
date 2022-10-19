import React from "react";
import Clock from "./Clock";

function App({ loggedIn }) {
  if (!loggedIn) {
    return null;
  } else {
    return <Clock />;
  }
}

export default App;
