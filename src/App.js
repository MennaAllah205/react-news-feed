import React from "react";
import "./App.css";

import NewsList from "./Components/NewsList";

const App = () => {
  return (
    <div className="App">
      <span className="logo">📰 News App</span>

      <header>
        <h1>Top News Headlines</h1>
      </header>
      <NewsList />
    </div>
  );
};

export default App;
