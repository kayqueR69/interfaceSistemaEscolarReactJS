import { useNavigate, useParams } from "react-router-dom";
import { FormAlterarDisciplina } from "./FormAlterar";

import style from '../../../../../styles/professor/PaginaAlterar.module.css'

export function PaginaAlterarDisc() {

    const { id } = useParams()
    const navigate = useNavigate()

    function alterarDisciplina(campo, valor) {
        fetch('http://localhost:3001/prof/updatedisciplina', {
            method : 'PUT',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({
                id : id,
                campo : campo,
                valor : valor
            })
        }).then(res => res.json()).then(data => {
            if (data.estado) {
                navigate(-1)
            } else {
                alert( 'Nenhuma disciplina alterada' )
            }
        }).catch(err => console.log(err))
    } 

    return (
        <div className={style.box}>

            <h1>Alterar disciplina</h1>

            <FormAlterarDisciplina handleSubmit={alterarDisciplina}/>

        </div>
    )
}