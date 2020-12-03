import React from "react"
import style from "./Login.module.css"
import {useHistory} from "react-router-dom";

const LoginPage = (props) => {
    let history = useHistory();
    const signInAction = (e) => {
        e.preventDefault();
        let username = e.target.elements.usernameLogin.value;
        let password = e.target.elements.passwordLogin.value;
        e.target.elements.usernameLogin.value = "";
        e.target.elements.passwordLogin.value = "";
        history.push(
            "/home",
            {
                username: username,
                password: password,
                login: true
            }
        )
    }

    const signUpAction = (e) => {
        e.preventDefault();
        let username = e.target.elements.usernameSignup.value;
        let password = e.target.elements.passwordSignup.value;
        e.target.elements.usernameSignup.value = "";
        e.target.elements.passwordSignup.value = "";
        history.push(
            "/home",
            {
                username: username,
                password: password,
                login: true
            }
        )
    }

    return (
        <div className={style.login_wrap}>
            <div className={style.login_html}>
                <input id="tab-1" type="radio" name="tab" className={style.sign_in} checked/><label htmlFor="tab-1"
                                                                                             className={style.tab}>Sign
                    In</label>
                    <input id="tab-2" type="radio" name="tab" className={style.sign_up}/><label htmlFor="tab-2"
                                                                                         className={style.tab}>Sign Up</label>
                        <div className={style.login_form}>
                            <div className={style.sign_in_htm}>
                                <form action="" onSubmit={signInAction}>
                                    <div className={style.group}>
                                        <label htmlFor="user" className={style.label}>Username</label>
                                        <input id="user" type="text" name="usernameLogin" className={style.input}/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Password</label>
                                        <input id="pass" type="password" name="passwordLogin" className={style.input} data-type="password"/>
                                    </div>
                                    <div className={style.group}>
                                        <input type="submit" className={style.button} value="Sign In"/>
                                    </div>
                                </form>
                            </div>
                            <div className={style.sign_up_htm}>
                                <form action="" onSubmit={signUpAction}>
                                    <div className={style.group}>
                                        <label htmlFor="user" className={style.label}>Username</label>
                                        <input id="user" type="text" name="usernameSignup" className={style.input}/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Password</label>
                                        <input id="pass" type="password" name="passwordSignup" className={style.input} data-type="password"/>
                                    </div>
                                    <div className={style.group}>
                                        <input type="submit" className={style.button} value="Sign Up"/>
                                    </div>
                                </form>
                                <div className={style.hr}></div>
                                <div className={style.foot_lnk}>
                                   <label htmlFor="tab-1"><a>Already Member?</a> </label>
                                </div>
                            </div>
                        </div>
                </div>
         </div>
    )
}

export default LoginPage