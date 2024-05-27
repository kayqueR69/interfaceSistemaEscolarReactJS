import style from '../../styles/msgCadastro.module.css'

export function MsgCadastro({idAluno}) {
    return (
        <div className={style.msg}>
            <span>Você foi cadastrado, seu id é :</span><span><strong>{idAluno}</strong></span>
       </div>
    )
}