import React, {useState} from "react"
import SearchBar from "./SearchBar/SearchBar";
import UserButton from "./UserButton/UserButton";
import style from "./NavigationBar.module.css"
import { useHistory, useLocation } from "react-router-dom";
import LoginPage from "../LoginAndSignUp/LoginPage";
import {FirebaseContext} from "../Firebase";

const NavigationBar  = (props) => {
    //TODO: add login
    let history = useHistory();
    let location = useLocation();
    const [loggedIn, setLoggedIn] = useState(props.login.login);
    const [loginCredential, setLoginCredential] = useState({
                                                                       email: props.login.email,
                                                                       userId: props.login.userId,
                                                                     });

    const handleLogOut  = (firebase) => {
        firebase.doSignOut();
        setLoggedIn(false)
        setLoginCredential({
            userId: "",
            email: ""
        })
        if(location.pathname !== "/") {
            history.push(
                "/",
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
                email: loginCredential.email,
                userId: loginCredential.userId
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
                <FirebaseContext.Consumer>
                    {firebase =>
                        <UserButton text = {logoutText} onClick = {() => handleLogOut(firebase)}/>
                    }
                </FirebaseContext.Consumer>
            </div>
            </div>
        </div>
    )
}

export default NavigationBar

