import React, {useState} from "react"
import style from "./CompanyInfo.module.css"

const CompanyInfo = (props) => {
    const [subscribe, setSubscribe] = useState(false);

    const click = () => {
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
                   <div onClick={click} className={subscribe === true ? style.heartSub : style.heartUnSub}></div>
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
