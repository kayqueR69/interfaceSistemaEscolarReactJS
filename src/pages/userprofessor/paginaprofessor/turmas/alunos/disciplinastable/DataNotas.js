import { useEffect, useState } from "react";

import { LinkButton } from '../../../../../../components/botoes/LinkButton'

export function DataNotas({idAluno, idDisciplina}){

    const [nota, setNota] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/prof/getnota/${idAluno}/${idDisciplina}`, {
            method : 'GET', 
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {

            setNota(data)

        }).catch(err => console.log(err))

    }, [idAluno, idDisciplina])

    return (
        <>
            {nota && <>
                <td>{nota.nota1}</td>
                <td>{nota.nota2}</td>
                <td>{(nota.nota1 + nota.nota2) / 2}</td>
                <td>
                    <LinkButton source={`/atribuirnota/${idAluno}/${idDisciplina}`} text='Atribuir nota' />
                </td>
            </>}
        </>
    )
}