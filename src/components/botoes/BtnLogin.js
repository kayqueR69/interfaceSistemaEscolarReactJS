import { Link } from "react-router-dom";
import style from '../../styles/BtnLogin.module.css'

export function BotaoLogin ({to, text}) {
    return (
        <Link to={to} className={style.btn}>
            {text}
        </Link>

    )
}