import style from '../../../styles/professor/HeaderProf.module.css'

import { LinkButton } from '../../../components/botoes/LinkButton'
import { ButtonClick } from '../../../components/botoes/ButtonClick'

import { useNavigate } from 'react-router-dom'

export function HeaderProfessor({infos}){

    const navigate = useNavigate()

    function criarTurma(){

        fetch('http://localhost:3001/prof/criarturma', {
            method : 'POST',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify({ idProfessor : infos.id})
        }).then(res => res.json()).then(data => {

            if(data.status) {
                window.location.reload()
            }
            
        }).catch(err => console.log(err))

    }

    function deletarProfessor(){
        fetch(`http://localhost:3001/prof/deleteuser/${infos.id}`, {
            method : 'DELETE',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {

            if(data.estado) {
                navigate('/loginprofessor', {state : {menssagem : 'Usuario deletado', delete : true}})
            } else {
                alert('Erro ao deletar conta')
            }

        }).catch(err => console.log(err))
    }

    return (
        <header className={style.head}>
            <h1>Pagina do professor</h1>
            <div>
                
                <article>
                    <h2>Nome : {infos.nome}#{infos.id}</h2>
                    <p>Especialização : {infos.especializacao}</p>
                </article>

                <span>

                    <ButtonClick handleClick={criarTurma} text='Criar turma'/>
                    <LinkButton source={`/prof/alterar/${infos.id}`} text={'Alterar dados'}/>
                    <ButtonClick handleClick={deletarProfessor} text='Excluir Conta'/>

                </span>
            </div>
        </header>
    )
}