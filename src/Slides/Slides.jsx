import React, {useState} from "react"
import style from "./Slides.module.css"
import ArrowButton from "./ ArrowButton";

const Slides = (props) => {

    const [select, setSelect] = useState(0);
    const [backgroundImage, setBackGroundImage] = useState({
                                                    backgroundImage: 'url(' + props.news[0].image + ')'
                                                })

    const clickDot = (e, index) => {
        e.stopPropagation()
        setSelect(index);
        setBackGroundImage({backgroundImage: 'url(' + props.news[select + 5].image + ')'})
        console.log(backgroundImage)
    }

    const clickButton = (e, isRight) => {
        e.stopPropagation()
        if(isRight === true) {
            if(select === 4) {
                setSelect(0)
            } else {
                setSelect(select + 1)
            }
        } else {
            if(select === 0) {
                setSelect(4)
            } else {
                setSelect(select - 1)
            }
        }

        setBackGroundImage({backgroundImage: 'url(' + props.news[select].image + ')'})
    }

    const click = () => {
        window.open(props.news[select].url, "_blank")
    }


return (
    <div className={style.container} style={backgroundImage} onClick={click}>
        <div className={style.cover}>
            <div className={style.left_arrow}>
                <ArrowButton isRight = {false} onClick = {(e) => clickButton(e, false)}/>
            </div>
            <div className={style.right_arrow}>
                <ArrowButton isRight = {true} onClick = {(e) => clickButton(e, true)}/>
            </div>
            <div className={style.text}>{props.news[select].title}</div>
            <ul className={style.dots}>
                <li  className={select == 0 ? style.dotSelected : style.dotUnSelected} onClick={(e) => clickDot(e, 0)}/>
                <li  className={select == 1 ? style.dotSelected : style.dotUnSelected} onClick={(e) => clickDot(e, 1)}/>
                <li  className={select == 2 ? style.dotSelected : style.dotUnSelected} onClick={(e) => clickDot(e, 2)}/>
                <li  className={select == 3 ? style.dotSelected : style.dotUnSelected} onClick={(e) => clickDot(e, 3)}/>
                <li  className={select == 4 ? style.dotSelected : style.dotUnSelected} onClick={(e) => clickDot(e, 4)}/>
            </ul>
        </div>
   </div>

)
}

export default Slides