import { useNavigate, useParams } from "react-router-dom"

import { FormAlterarDados } from "./FormAlter"

import style from '../../../../styles/professor/PaginaDeAlter.module.css'

export function PaginaDeAlteracaoProf(){

    const { id } = useParams()
    const navigate = useNavigate()

    function alterarProfessor(campo, valor) {

        fetch('http://localhost:3001/prof/alterar', {
            method : 'PUT',
            headers : {
                'Content-type':'application/json'
            }, 
            body : JSON.stringify({
                id : id,
                campo : campo,
                valor : valor
            })
        }).then(res => res.json()).then(data => {
            if (data.estado) {
                navigate(`/paginaprofessor/${id}`)
            }
        }).catch(err => console.log(err))
    }

    return (
        <section className={style.container}>
            <h1> Alterar informação </h1>

            <FormAlterarDados handleSubmit={alterarProfessor}/>
        </section>
    )
}