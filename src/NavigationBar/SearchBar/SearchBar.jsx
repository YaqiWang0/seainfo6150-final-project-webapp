import React, { useEffect, useState} from "react"
import  style from "./SearchBar.module.css"
import { useHistory, useLocation } from "react-router-dom";

const SearchBar = (props) => {
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState();

    let history = useHistory();
    let location = useLocation();

    console.log(location.pathname)
    const handleSubmit = e => {
        e.preventDefault();
        console.log(location.pathname)
        history.push(
            "/search",
            {
                data: e.target.elements.search.value,
                login: props.login,
                credential : props.credential
            }
        )
    }

    return (
        <div>
            <form action="" className= {style.searchBar} onSubmit={handleSubmit}>
                <input type="search" name="search" pattern=".*\S.*" required/>
                    <button className={style.searchBtn} type="submit">
                        <span>Search</span>
                    </button>
            </form>
       </div>
    )
}

export default SearchBar