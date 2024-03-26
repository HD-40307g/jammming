import React from "react";
import "./Tracklist.module.css";
import Track from "../Track/Track";

function Tracklist (props) {
    return (
        <div className="Tracklist">
            {props.userSearchResult.map((track) => (
                <Track track={track} key={track.id} isRemoval={props.isRemoval} onAdd={props.onAdd} onRemove={props.onRemove} />
            ))}
        </div>
    );
}

export default Tracklist;