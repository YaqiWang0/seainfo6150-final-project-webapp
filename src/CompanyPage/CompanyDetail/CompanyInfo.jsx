import React, {useState, useEffect} from "react"
import style from "./CompanyInfo.module.css"

const CompanyInfo = (props) => {
    const [subscribe, setSubscribe] = useState(false);
    let sub = ""
    if(props.login.userId !== undefined && props.login.userId !== "") {
        props.firebase.user(props.login.userId).on('value',(snapshot) => {
            sub = snapshot.val();
        })
    }



    const click = () => {
        if(subscribe === false) {
            props.firebase.user(props.login.userId).child(props.info[0].symbol).set("sub")

        } else {
            props.firebase.user(props.login.userId).child(props.info[0].symbol).remove();
        }
        setSubscribe(!subscribe)
    }

    return (
        <div className={style.containerTotal}>
           <div className={style.textInfo}>
               <div className={style.title}>{props.info[0].companyName}</div>
               <div className={style.sub}>
                   <div className={style.stockPriceBlock}>
                       <div className={props.info[0].changes >= 0 ? style.price_red : style.price_green}>{`$${props.info[0].price}`}</div>
                       <div className={props.info[0].changes >= 0 ? style.stock_red : style.stock_green}>{props.info[0].changes >=0 ? `(+ ${props.info[0].changes})` : `( ${props.info[0].changes})`}</div>
                   </div>
                   <div className={props.login.userId === undefined || props.login.userId === "" ? style.hide : style.show}>
                   <div onClick={click} className={sub !== null && sub !== "" && sub[props.info[0].symbol] !== undefined ? style.heartSub : style.heartUnSub}></div>
                       </div>
               </div>
           </div>
            <br/>
            <div className={style.container}>
              <img src={props.info[0].image} alt = {props.info[0].companyName} className={style.pic}/>
                <div className={style.text_block}>
                    <div className={style.quote_left}>"</div>
                    <div className={style.des}>{props.info[0].description}</div>
                    <div className={style.quote_right}>"</div>
                </div>
            </div>
        </div>

    )
}
export default CompanyInfo
