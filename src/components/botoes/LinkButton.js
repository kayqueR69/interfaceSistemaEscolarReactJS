import { Link } from "react-router-dom";
import style from '../../styles/LinkButton.module.css'

export function LinkButton({text, source}) {
    return (
        <Link to={source} className={style.btnLink}>
            {text}
        </Link>
    )
}