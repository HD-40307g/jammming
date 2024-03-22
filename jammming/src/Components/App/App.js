import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/*Search Bar Component*/}
        <div className={styles.["App-playlist"]}>
          {/*Search Result Component*/}
          {/*Playlist Component*/}
        </div>
      </div>
    </div>
  );
}

export default App;
