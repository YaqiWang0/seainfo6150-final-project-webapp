import React, { useState }from "react"
import style from "./Login.module.css"
import {useHistory, Link} from "react-router-dom";

const LoginPage = (props) => {
    let history = useHistory();
    const [loginStatus, setLoginStatus] = useState(true);
    const [signUpStatus, setSignUpStatus] = useState(false);

    const signInAction = (e) => {
        e.preventDefault();
        let email = e.target.elements.usernameLogin.value;
        let password = e.target.elements.passwordLogin.value;
        e.target.elements.usernameLogin.value = "";
        e.target.elements.passwordLogin.value = "";
        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(authUser.user.uid)
                history.push(
                    "/",
                    {
                        email: email,
                        userId: authUser.user.uid,
                        login: true
                    })
            })
            .catch(error => {
                setLoginStatus(error.message)
            });
    }

    const signUpAction = (e) => {
        e.preventDefault();
        let username = e.target.elements.username.value;
        let email = e.target.elements.emailSignup.value;
        let password = e.target.elements.passwordSignup.value;
        let confirmedPassword = e.target.elements.passwordConfirm.value;
        let phoneNumber = e.target.elements.phoneNumber.value;

        const phoneNumberRegex = RegExp('^(\\+\\d{1,2}\\s?)?1?\\-?\\.?\\s?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');

        if (password !== confirmedPassword) {
            setSignUpStatus("Please confirm your password correctly")
            return;
        }

        if (!phoneNumberRegex.test(phoneNumber)) {
            setSignUpStatus("Wrong format phone number")
            return;
        }

        props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                setSignUpStatus("Sign up successfully");
                props.firebase.user(authUser.user.uid).child("username").set(username)
            })
            .catch(error => {
                setSignUpStatus(error.message)
            });
    }

    return (
        <div className={style.login_wrap}>
            <div className={style.login_html}>
                <div className={style.home}>
                    <div>HOME</div>
                    <Link className={style.pic} to = "/"></Link>
                </div>
                <input id="tab-1" type="radio" name="tab" className={style.sign_in} checked = {loginStatus} onChange={() => setLoginStatus(!loginStatus)}/><label htmlFor="tab-1"
                                                                                             className={style.tab}>Sign
                    In</label>
                    <input id="tab-2" type="radio" name="tab" className={style.sign_up} checked={signUpStatus} onChange={() => setSignUpStatus(!signUpStatus)}/><label htmlFor="tab-2"
                                                                                         className={style.tab}>Sign Up</label>
                        <div className={style.login_form}>
                            <div className={style.sign_in_htm}>
                                <form action="" onSubmit={signInAction}>
                                    <div className={style.group}>
                                        <label htmlFor="user" className={style.label}>Email</label>
                                        <input id="user" type="email" name="usernameLogin" className={style.input} required/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Password</label>
                                        <input id="pass" type="password" name="passwordLogin" className={style.input} data-type="password" required/>
                                    </div>
                                    <div className={style.group}>
                                        <input type="submit" className={style.button} value="Sign In"/>
                                    </div>
                                </form>
                                <div className={style.hr}></div>
                                <div className={style.foot_lnk}>
                                    <label> {loginStatus} </label>
                                </div>
                            </div>
                            <div className={style.sign_up_htm}>
                                <form action="" onSubmit={signUpAction}>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>User Name</label>
                                        <input id="pass" type="text" name="username" className={style.input} required/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="user" className={style.label}>Email</label>
                                        <input id="user" type="email" name="emailSignup" className={style.input} required/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Password</label>
                                        <input id="pass" type="password" name="passwordSignup" className={style.input} data-type="password" required/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Confirm Password</label>
                                        <input id="pass" type="password" name="passwordConfirm" className={style.input} data-type="password" required/>
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="pass" className={style.label}>Phone Number</label>
                                        <input id="pass" type="text" name="phoneNumber" className={style.input} />
                                    </div>
                                    <div className={style.group}>
                                        <label htmlFor="tab-2">
                                        <input type="submit" className={style.button} value="Sign Up"/>
                                        </label>
                                    </div>
                                </form>
                                <div className={style.hr}></div>
                                <div className={style.foot_lnk}>
                                    <label> {signUpStatus} </label>
                                   <label htmlFor="tab-1"><a>Already Member?</a> </label>
                                </div>
                            </div>
                        </div>
                </div>
         </div>
    )
}

export default LoginPage