import React from "react";
import "./App.module.css";

import SearchBar from "/jammming/src/Components/SearchBar/SearchBar";
import SearchResult from "/jammming/src/Components/SearchResult/SearchResult";
import Playlist from "/jammming/src/Components/Playlist/Playlist";

function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
