import { useState } from "react"

import style from '../../../styles/aluno/FormCadastro.module.css'

import { InputTexto } from '../../../components/inputs/InputTexto'
import { BtnSubmit } from '../../../components/botoes/BtnSubmit'

export function CadastroAlunoForm ({handleOnSubmit}) {

    const [nome,setNome] = useState('')

    const submit = (e) => {

        e.preventDefault()
        handleOnSubmit(nome)
    
    }

    const recebeNome = (e) => {
        setNome(e.target.value)
    }

    return (
        <form onSubmit={submit} className={style.form}>

            <InputTexto
                type='text'
                name='nome'
                text='Seu nome'
                placeHolder='Insira aqui seu nome'
                handleOnChange={recebeNome}
            />
            <BtnSubmit text='Cadastrar'/>

        </form>
    )
}