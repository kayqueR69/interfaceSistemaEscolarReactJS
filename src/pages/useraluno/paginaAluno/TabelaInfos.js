import { useEffect, useState } from 'react'

import style from '../../../styles/aluno/TabelaInfos.module.css'

export function TabelaInfos({materias}) {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        if (materias) {
            setDisciplinas(materias)
        }
    }, [materias])

    return (
        <section className={style.container}>

            <h2>Tabela de disciplinas</h2>

            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Media</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas &&
                        disciplinas.map((disciplina, index) => (
                            <tr key={index}>
                                <td>{disciplina.nome}</td>
                                <td>{disciplina.descricao}</td>
                                <td>{disciplina.notas.nota1}</td>
                                <td>{disciplina.notas.nota2}</td>
                                <td>{disciplina.notas.media}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </section>
    )
}