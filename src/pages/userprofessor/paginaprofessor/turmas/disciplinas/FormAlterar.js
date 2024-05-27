import { InputTexto } from "../../../../../components/inputs/InputTexto";
import { BtnSubmit } from '../../../../../components/botoes/BtnSubmit'
import { InputSelect } from '../../../../../components/inputs/InputSelect'

import { useState } from "react";

import style from '../../../../../styles/professor/FormAlterar.module.css'

export function FormAlterarDisciplina({handleSubmit}) {

    const [campo, setCampo] = useState('')
    const [valor, setValor] = useState('')

    const opcoes = [{name : 'Nome', value : 'nome'}, {name : 'Descrição', value : 'descricao'}]

    const atribuirCampo = (e) => {
        setCampo(e.target.value)
    }

    const handleChange = (e) => {
        setValor(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(campo, valor)
    }

    return (

        <form onSubmit={submit} className={style.form}>

            <InputSelect
                text='Selecione Uma opção'
                opcoes={opcoes}
                handleChange={atribuirCampo}
            />

            <InputTexto
                text='Novo valor'
                name='valor'
                placeHolder='Insira um novo valor aqui'
                type='text'
                handleOnChange={handleChange}
            />

            <BtnSubmit text='Alterar'/> 

        </form>
    )
}