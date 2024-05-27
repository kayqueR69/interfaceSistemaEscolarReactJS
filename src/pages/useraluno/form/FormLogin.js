import { useState } from "react";

import style from '../../../styles/aluno/FormLogin.module.css'

import { InputTexto } from "../../../components/inputs/InputTexto";
import { BtnSubmit } from "../../../components/botoes/BtnSubmit";

export function LoginAlunoForm ({handleOnSubmit}){

    const [aluno,setAluno] = useState({})

    const submit = (e) => {
        e.preventDefault()
        handleOnSubmit(aluno)
    }

    const setCampo = (e) => {
        setAluno({...aluno,[e.target.name]: e.target.value})
    }


    return (
        <form onSubmit={submit} className={style.form}>

            <InputTexto
                type='number'
                name='id'
                placeHolder='Insira seu id'
                text='Id aluno'
                handleOnChange={setCampo}
            />

            <InputTexto
                type='text'
                name='nome'
                placeHolder='Insira seu nome aqui'
                text='Seu nome'
                handleOnChange={setCampo}
            />

            <BtnSubmit text='Acessar'/>

        </form>
    )
}