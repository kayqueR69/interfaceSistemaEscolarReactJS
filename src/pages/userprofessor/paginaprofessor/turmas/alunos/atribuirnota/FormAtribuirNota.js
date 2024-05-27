import { useState } from "react"

import { InputTexto } from '../../../../../../components/inputs/InputTexto'
import { BtnSubmit } from '../../../../../../components/botoes/BtnSubmit'

import style from '../../../../../../styles/professor/FormAtrib.module.css'

export function FormAtribuirNota({handleSubmit}){

    const [valor, setValor] = useState()
    const [numNota, setNumNota] = useState()

    const AtribuirValor = (e) => {
        setValor(e.target.value)
    }

    const AtribuirNumNota = (e) => {
        setNumNota(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()

        if (numNota) {
            handleSubmit(numNota, valor)
        } else {
            alert('Selecione uma nota para dar um valor')
        }
    }

    return (
        <form onSubmit={submit} className={style.form}>

            <div>
                <h3>Escolha uma nota</h3>
                <span>
                    <label htmlFor="opc1">Nota 1</label>
                    <input
                        type="radio"
                        id="opc1"
                        value={1}
                        name="notas"
                        onChange={AtribuirNumNota}
                    />
                </span>

                <span>
                    <label htmlFor="opc2">Nota 2</label>
                    <input
                        type="radio"
                        id="opc2"
                        value={2}
                        name="notas"
                        onChange={AtribuirNumNota}
                    />
                </span>
            </div>

            <InputTexto
                text='Valor da nota'
                placeHolder='Insira aqui a nota'
                type='number'
                handleOnChange={AtribuirValor}
            />

            <BtnSubmit text='Enviar'/>
        </form>
    )
}