import { useState } from 'react'
import { InputTexto } from '../../../../components/inputs/InputTexto'
import { BtnSubmit } from '../../../../components/botoes/BtnSubmit'

export function FormAlterarNome({handleSubmit}){

    const [nome, setNome] = useState();

    const handleOnChange = (e) => {
        setNome(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(nome)
    }


    return (
        <form onSubmit={submit}>

            <InputTexto
                text='Novo nome'
                type='text'
                name='nome'
                placeHolder='Insira seu nome aqui...'
                handleOnChange={handleOnChange}
            />

            <BtnSubmit text='Alterar'/>
        </form>
    )
}