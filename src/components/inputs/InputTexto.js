import styles from '../../styles/InputTexto.module.css'

export function InputTexto({name, type, text, placeHolder, handleOnChange}) {
    return (
        <div className={styles.box}>
            <label htmlFor={name}>{text}</label>
            <input 
                type={type}
                step={0.01}
                name={name}
                id={name}
                placeholder={placeHolder}
                onChange={handleOnChange}
                required 
            />
        </div>
    )
}