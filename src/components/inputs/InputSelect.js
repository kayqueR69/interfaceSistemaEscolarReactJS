import style from '../../styles/InputSelect.module.css'

export function InputSelect({text, handleChange, opcoes}) {
    return (
        <div className={style.select}>
                
            <h3>{text}</h3>

            <select defaultValue={''} onChange={handleChange}>
                <option value={''} disabled> {text} </option>
                {opcoes && opcoes.map((opcao, index) => (
                    <option value={opcao.value} key={index}>{opcao.name}</option>
                ))}
            </select>

        </div>
    )
}