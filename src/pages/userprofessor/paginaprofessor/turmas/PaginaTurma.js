import { useNavigate, useParams } from "react-router-dom";

import { Disciplinas } from "./disciplinas/Diciplinas";
import { Alunos } from "./alunos/Alunos";
import { LinkButton } from "../../../../components/botoes/LinkButton";
import { ButtonClick } from "../../../../components/botoes/ButtonClick";

import style from '../../../../styles/professor/PaginaTurma.module.css'

export function PaginaTurma() {

    const {id, idProfessor} = useParams()
    const navigate = useNavigate()

    function deletarTurma() {
        fetch('http://localhost:3001/prof/delturma', {
            method : 'DELETE',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({ id : id})
        }).then(res => res.json()).then(data => {
            if (data.deletada) {
                navigate(`/paginaprofessor/${idProfessor}`)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>

            <section className={style.container}>

                <header>
                    <h1>Turma : {id}</h1>

                    <span>
                        <ButtonClick text='Deletar turma' handleClick={deletarTurma}/>
                        <LinkButton source={`/adicionardisc/${id}/${idProfessor}`} text='Adicionar disciplina'/>
                    </span> 

                </header>

                <hr />

                <Disciplinas idTurma={id}/>

                <Alunos idTurma={id}/>

            </section>

        </>
    )
}