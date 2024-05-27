import styles from '../../styles/BtnSubmit.module.css'

export function BtnSubmit({text}) {
    return (
        <input type="submit" value={text} className={styles.btn}/>
    )
}