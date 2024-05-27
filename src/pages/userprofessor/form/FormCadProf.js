import { useState } from "react"

import { BtnSubmit } from '../../../components/botoes/BtnSubmit'
import { InputTexto } from '../../../components/inputs/InputTexto'

export function FormCadastroProf({handleSubmit}){

    const [professor, setProfessor] = useState({})

    const handleChange = (e) => {
        setProfessor({...professor, [e.target.name]:e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(professor)
    }

    return (
        <form onSubmit={submit}>

            <InputTexto
                type='text'
                text='Seu nome'
                placeHolder='Insira aqui seu nome'
                name='nome'
                handleOnChange={handleChange}
            />
            
            <InputTexto
                type='text'
                text='Sua especialização'
                placeHolder='Informe sua especialização'
                name='especializacao'
                handleOnChange={handleChange}
            />
            
            <BtnSubmit text='Cadastrar-se'/>

        </form>
    )
}