import React, {useState} from "react"
import SearchBar from "./SearchBar/SearchBar";
import UserButton from "./UserButton/UserButton";
import style from "./NavigationBar.module.css"
import { useHistory, useLocation } from "react-router-dom";

const NavigationBar  = (props) => {
    //TODO: add login
    let history = useHistory();
    let location = useLocation();
    const [loggedIn, setLoggedIn] = useState(props.login.login);
    const [loginCredential, setLoginCredential] = useState({
                                                                       username: props.login.username,
                                                                       password: props.login.password
                                                                     });

    const handleLogOut  = () => {
        setLoggedIn(false)
        setLoginCredential({
            username: "",
            password: ""
        })
        if(location.pathname !== "/home") {
            history.push(
                "/home",
                {login: false}
            )
        }
    }

    const onLogin = () => {
        history.push(
            "/login_sign_up"
        )
    }

    const getUser = () => {
        history.push(
            "/user",
            {login: {
                login: loggedIn,
                username: loginCredential.username,
                password: loginCredential.password
                }}
        )
    }
    const userText = "USER"
    const loginText = "LOGIN"
    const logoutText = "LOGOUT"



    return (
        <div className={style.container}>
            <SearchBar login = {loggedIn} credential = {loginCredential}/>
            <div className={style.buttons}>
            <div className = {loggedIn == true ? style.hide : style.show}>
                <UserButton text = {loginText} onClick = {onLogin}/>
            </div>
            <div className = {loggedIn == true ? style.show : style.hide}>
                <UserButton text = {userText} onClick = {getUser}/>
            </div>
            <div className = {loggedIn == true ? style.show : style.hide}>
                <UserButton text = {logoutText} onClick = {handleLogOut}/>
            </div>
            </div>
        </div>
    )
}

export default NavigationBar

