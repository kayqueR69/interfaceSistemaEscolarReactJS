import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { InputTexto } from '../../../../../components/inputs/InputTexto'
import { BtnSubmit } from '../../../../../components/botoes/BtnSubmit'

import style from '../../../../../styles/professor/PaginaAddDisc.module.css'

export function AdicionarDisciplina() {

    const { idTurma, idProfessor } = useParams()

    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()

    const navigate = useNavigate()

    const atribuirNome = (e) => {
        setNome(e.target.value)
    }

    const atribuirDesc = (e) => {
        setDescricao(e.target.value)
    }

    const subimt = (e) => {
        e.preventDefault()

        fetch('http://localhost:3001/prof/adddisciplina', {
            method : 'POST',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({
                idTurma : idTurma,
                nome : nome,
                descricao : descricao
            })
        }).then(res => res.json()).then(data => {
            navigate(`/turma/${idTurma}/${idProfessor}`)
        }).catch(err => console.log(err))
    }

    return (
        <div className={style.box}>

            <h1>Adicionar disciplina</h1>

            <form onSubmit={subimt}>
                <InputTexto
                    text='Nome da disciplina'
                    nome='nome'
                    placeHolder='Insira aqui um nome'
                    type='text'
                    handleOnChange={atribuirNome}
                />
                <InputTexto
                    text='Descrição da disciplina'
                    nome='descricao'
                    placeHolder='Insira aqui uma descrição'
                    type='text'
                    handleOnChange={atribuirDesc}
                />
                <BtnSubmit text='Criar Disciplina'/>

            </form>
        </div>
    )
}