import style from '../../styles/aluno/ListaTurma.module.css'
import { LinkButton } from '../botoes/LinkButton'

export function ListaTurma ({dados}) {

    return (
        <section className={style.container}>
            {dados[0] && 
                dados.map((dado, index)=> (

                    <div key={index}>

                        <h3>Id turma : {dado.turma.id}</h3>

                        {dado.materias[0] && (
                            <>
                                <h3>Lista de materias</h3>
                                <ul>
                                    {dado.materias.map((materia, chave) => (
                                        <li key={chave} >{materia.nome}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        {!dado.materias[0] && (
                            <p>
                                ainda não há <br />
                                Nenhuma dicisciplina
                            </p>
                        )}

                    </div>

                ))
            }
            {!dados[0] && (
                <span className={style.typeErro}>

                    <p>Nenhuma turma cadastrada volte depois</p>
                    <LinkButton text='Voltar para login' source='/login aluno'/>

                </span>
            )}

        </section>
    )

}