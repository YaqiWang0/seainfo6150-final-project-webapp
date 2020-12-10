import React, {useEffect, useState} from "react"
import style from "./UserProfile.module.css"

const UserProfile = (props) => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        props.firebase.user(props.userId).once('value', async (snapshot) => {
            let ob = snapshot.val();
            if(ob !== null && ob["username"] !== null && ob["username"] === undefined)
                setUsername(ob["username"])
        });
    }, []);
    return (
        <div className={style.container}>
            <div className={style.picBack}>
            <div className={style.pic}/>
            </div>
            <div className={style.username}>{username}</div>
            <div className={style.username}>{props.email}</div>
            <div className={style.userId}>{props.userId}</div>
        </div>
    )
}

export default UserProfile