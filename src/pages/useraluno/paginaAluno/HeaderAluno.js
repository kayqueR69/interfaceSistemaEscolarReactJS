import style from '../../../styles/aluno/HeaderAluno.module.css'

import { LinkButton } from '../../../components/botoes/LinkButton'
import { ButtonClick } from '../../../components/botoes/ButtonClick'
import { useNavigate } from 'react-router-dom'


export function HeaderAluno({nome,id,idTurma}) {

    const navigate = useNavigate()

    function deletarAluno() {
        fetch(`http://localhost:3001/aluno/deluser/${id}`,{
            method : 'DELETE',
            headers : {
                'Content-type' : 'application/json'
            }
        }).then(res => res.json()).then(data => {
            navigate('/loginaluno', {state : { menssagem : data.menssagem }})
        }).catch(err => console.log(err))
    }

    return (
        <header className={style.header}>

            <h1>Página do Aluno</h1>

            <div>
                <h3>Nome : {nome}#{id}</h3>
                <p>Turma : {idTurma}</p>

                <span>
                    {!idTurma && 
                        <LinkButton  source={`/vincularturma/${id}`} text='Vincular turma'/>
                    }
                    <LinkButton source={`/aluno/alterarnome/${id}/${idTurma}`} text='Alterar nome'/>
                    <ButtonClick handleClick={deletarAluno} text='Excluir conta'/>
                </span>
            </div>
            
        </header>
    )
}