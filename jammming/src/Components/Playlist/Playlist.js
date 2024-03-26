import React from "react";
import "./playlist.module.css";
import Tracklist from "../Tracklist/Tracklist";


function Playlist(props) {

    function handleChange ({target}) {
        props.onNameChange(target.value)
    }

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handleChange} />
            <Tracklist userSearchResult={props.playlistTracks} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
);
}

export default Playlist;