import style from '../../styles/ButtonClick.module.css'

export function ButtonClick({handleClick, text, value}) {
    return (
        <button onClick={handleClick} className={style.button} value={value}>
            {text}
        </button>
    )
}