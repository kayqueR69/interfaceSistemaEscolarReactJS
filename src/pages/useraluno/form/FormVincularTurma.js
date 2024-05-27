import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { InputTexto } from "../../../components/inputs/InputTexto"
import { BtnSubmit } from "../../../components/botoes/BtnSubmit"
import { FlashMsgLogin } from "../../../components/mensgens/AlertCadastro"

import style from '../../../styles/aluno/FormVincularTurma.module.css'

export function FormVincularTurma({idAluno, cad}){

    const navigate = useNavigate();

    const [idTurma, setIdTurma] = useState()
    const [msg, setMsg] = useState('')
    const [visible, setVisible] = useState(false)

    function alterarVisibilidade() {
        setTimeout(() => {
            setVisible(false)
        },3000)
    }

    function matricula(e) {

        e.preventDefault()

        fetch('http://localhost:3001/aluno/matricula', {
            
            method:'PUT',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({
                id : idAluno, idTurma : idTurma
            })

        }).then(res => res.json()).then(data => {

            if (data.status) {
                if (cad) {
                    navigate('/loginaluno', {state : { menssagem : ' Cadastrado com Sucesso !'}})
                } else {
                    navigate(-1)
                }
            } else {
                setVisible(true)
                setMsg('Está turma não existe!')
                alterarVisibilidade()
            }

        }).catch(err => console.log(err))
    }

    const receberId = (e) => {
        setIdTurma(e.target.value)
    }

    return (
         <form onSubmit={matricula} className={style.form}>

            {visible && <FlashMsgLogin customClass='error' msg={msg}/>}

            <InputTexto
                text='Insira aqui o id da turma : '
                type='number'
                name='idTurma'
                id='idTurma'
                placeHolder='Insira aqui o id da turma'
                handleOnChange={receberId}
            />
            <BtnSubmit text='matricular-se'/>

        </form>
    )
}