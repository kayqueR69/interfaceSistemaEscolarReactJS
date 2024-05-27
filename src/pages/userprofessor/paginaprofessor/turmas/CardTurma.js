import { Link } from "react-router-dom"
import style from '../../../../styles/professor/CardTurma.module.css'

export function CardsTurma({listaTurma}) {
    return (
        <>
            {
                listaTurma.map((turma, index )=> (
                    <div key={index} className={style.card}>
                        <p>Turma id : <strong>{turma.id}</strong></p>
                        <Link to={`/turma/${turma.id}/${turma.idProfessor}`}>
                            Vizualizar
                        </Link>
                    </div>
                ))
            }
        </>
    )
}