import style from '../../styles/FlashMsgLogin.module.css'

export function FlashMsgLogin({msg, customClass}) {
    return (
        <div className={`${style.boxMsg} ${style[customClass]}`}>
            <p>{msg}</p>
        </div>
    )
}