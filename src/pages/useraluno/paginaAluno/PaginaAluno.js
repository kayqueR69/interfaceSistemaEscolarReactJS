import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { HeaderAluno } from './HeaderAluno';
import { TabelaInfos } from './TabelaInfos';

export function PaginaAluno(){

    const { id, idTurma } = useParams()
    const [dados, setDados] = useState()

    useEffect(() => {
        
        fetch(`http://localhost:3001/aluno/infos/${id}/${idTurma}`, {
            method : 'GET', 
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setDados(data)
        }).catch(err => console.log(err))

    }, [id,idTurma])

    return (

        <div>

            {dados && (<HeaderAluno 
                nome={dados.dadosAluno.nome}
                id={dados.dadosAluno.id}
                idTurma={dados.dadosAluno.idTurma}
            />)}

            {dados && dados.disciplinas.length > 0 ? (<TabelaInfos materias={dados.disciplinas} />) : (
                <div style={{textAlign : 'center', marginTop : '4em'}}>
                    <h2>Nenhuma disciplina cadastrada</h2>
                </div>
            )}

        </div>

    )
}