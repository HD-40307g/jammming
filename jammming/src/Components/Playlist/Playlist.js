import React from "react";
import "./playlist.module.css";
import Tracklist from "/jammming/src/Components/Tracklist/Tracklist";


function Playlist() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            <Tracklist />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
);
}

export default Playlist;