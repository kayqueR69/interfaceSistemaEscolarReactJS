import { LinkButton } from "../../../../../components/botoes/LinkButton"
import { ButtonClick } from "../../../../../components/botoes/ButtonClick"

import style from '../../../../../styles/professor/TableDisciplinas.module.css'

export function TableDisciplinas({disciplinas}) {

    const excluirDisciplina = (e) => {

        fetch(`http://localhost:3001/prof/deldisciplina`, {
            method : 'DELETE',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({ id : e.target.value })
        }).then(res => res.json()).then(data => {
            if (data.deletado) {
                window.location.reload()
            } else {
                alert('erro ao excluir')
            }
        }).catch(err => console.log(err))

    }

    return (
        <table cellSpacing={0} className={style.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {disciplinas.map((disciplina, index) => (
                    <tr key={index}>
                        <td>{disciplina.nome}</td>
                        <td>{disciplina.descricao}</td>
                        <td>
                           <LinkButton source={`/alterardisc/${disciplina.id}`} text='Alterar' />
                        </td>
                        <td>
                            <ButtonClick value={disciplina.id} handleClick={excluirDisciplina} text='Excluir' />
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}