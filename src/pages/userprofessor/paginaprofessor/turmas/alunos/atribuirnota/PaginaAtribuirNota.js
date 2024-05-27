import { useNavigate, useParams } from "react-router-dom"

import style from '../../../../../../styles/professor/Pag.module.css'

import { FormAtribuirNota } from "./FormAtribuirNota"

export function PaginaAtribuirNota(){

    const { idAluno, idDisciplina } = useParams()
    const navigate = useNavigate()

    function AtribuirNota(numNota, valor) {
        fetch('http://localhost:3001/prof/atribuirnota', {
            method : 'PUT', 
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({
                idAluno : idAluno,
                idDisciplina : idDisciplina,
                numNota : numNota,
                valor : valor
            })
        }).then(res => res.json()).then(data => {
            navigate(-1)
        }).catch(err => console.log(err))
    }

    return (
        <div className={style.box}>
            <h1>Atribuir nota</h1>
            <FormAtribuirNota handleSubmit={AtribuirNota}/>
        </div>
    )
}