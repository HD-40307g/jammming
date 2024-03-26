import React, {useState} from "react";
import "./searchBar.module.css";

function SearchBar (props) {

    const [term, setTerm] = useState("");

    function passTerm () {
        props.onSearch(term)
    }

    function handleTermChange (event) {
        setTerm(event.target.value)
    }

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
            <button className="SearchButton" onClick={passTerm} >SEARCH</button>
        </div>
        );
}

export default SearchBar;