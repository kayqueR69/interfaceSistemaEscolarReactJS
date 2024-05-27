import { useState } from 'react'

import { InputTexto } from '../../../components/inputs/InputTexto'
import { BtnSubmit } from '../../../components/botoes/BtnSubmit'

export function LoginProfessorForm({handleSubmit}) {

    const [profesor, setProfessor] = useState({})

    const handleChange = (e) => {
        setProfessor({...profesor, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(profesor)
    }

    return (
        <form onSubmit={submit}>
            <InputTexto
                type='number'
                text='Id professor'
                placeHolder='Insira aqui seu id'
                name='id'
                handleOnChange={handleChange}
            />

            <InputTexto 
                type='text'
                text='Seu nome'
                placeHolder='Insira aqui seu nome'
                name='nome'
                handleOnChange={handleChange}
            />

            <BtnSubmit text='Acessar'/>
        </form>
    )

}