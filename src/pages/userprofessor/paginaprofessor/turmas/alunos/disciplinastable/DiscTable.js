import { useEffect, useState } from "react";

import { DataNotas } from "./DataNotas";

export function RowDisciplinas({idAluno,idTurma}) {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/prof/getdisciplinas/${idTurma}`, {
            method : 'GET',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setDisciplinas(data)
        }).catch(err => console.log(err))
    }, [idTurma])

    return (
        <>
            {
                disciplinas.map((disciplina, index) => (
                    <tr key={index}>
                        <td>{disciplina.nome}</td>
                        <DataNotas idAluno={idAluno} idDisciplina={disciplina.id}/>
                    </tr>
                ))
            }
        </>
    )
}