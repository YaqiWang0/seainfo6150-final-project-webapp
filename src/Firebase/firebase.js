import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCBcPf2qCe4gcUgEeZBpdowfPs_l5HDNsI",
    authDomain: "fall2020-6bd75.firebaseapp.com",
    databaseURL: "https://fall2020-6bd75.firebaseio.com",
    projectId: "fall2020-6bd75",
    storageBucket: "fall2020-6bd75.appspot.com",
    messagingSenderId: "671808993553",
    appId: "1:671808993553:web:87adf307e12583f441f4b0",
    measurementId: "G-79CEYSDSE9"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }


    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    user = (uid) => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}

export default Firebase;
