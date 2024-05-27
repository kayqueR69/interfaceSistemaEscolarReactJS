import { useEffect, useState } from 'react'

import { TableDisciplinas } from './TableDisciplinas'

import style from '../../../../../styles/professor/Disciplinas.module.css'

export function Disciplinas({idTurma}) {

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

        <div className={style.box}>

            <h1>Disciplinas</h1>

            { disciplinas.length > 0 ? (
                    <TableDisciplinas disciplinas={disciplinas}/>
                ) : (
                    <p>Nenhuma disciplina cadastrada</p>
                )
            }
        </div>

    )
}