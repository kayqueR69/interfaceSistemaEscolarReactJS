import { useEffect, useState } from 'react'

import style from '../../../../../styles/professor/Alunos.module.css'

import { RowDisciplinas } from './disciplinastable/DiscTable'

export function Alunos({ idTurma }){

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/prof/alunos/${idTurma}`, {
            method : 'GET',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setAlunos(data.alunos)
        }).catch(err => console.log(err))
    }, [idTurma])

    return (
        <div className={style.box}>
            <h2>Alunos</h2>
            {
                alunos.map((aluno, index) => (
                    <table cellSpacing={0} key={index}>
                        <thead>
                            <tr>
                                <th colSpan={5}>{aluno.nome}</th>
                            </tr>
                            <tr>
                                <th>Disciplina</th>
                                <th>Nota 1</th>
                                <th>Nota 2</th>
                                <th>Media</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RowDisciplinas idTurma={idTurma} idAluno={aluno.id}/> 
                        </tbody>
                    </table>
                ))
            }
        </div>
    )

}