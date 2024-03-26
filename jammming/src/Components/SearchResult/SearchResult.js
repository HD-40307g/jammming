import React from "react";
import "./searchResult.module.css";
import Tracklist from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className="SearchResults">
            <Tracklist userSearchResult={props.userSearchResult} isRemoval={true} onAdd={props.onAdd} />
        </div>
        );
}

export default SearchResults;