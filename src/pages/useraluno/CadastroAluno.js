import style from '../../styles/aluno/CadastroAluno.module.css'

import { CadastroAlunoForm } from './form/FormCadastro'
import { useNavigate } from 'react-router-dom'

export function CadastroAluno() {

    const navigate = useNavigate()

    function cadastrarAluno(nome){

        fetch('http://localhost:3001/aluno/cadastro', {
            method:'POST',
            headers: {
                'Content-type':'application/json'
            }, body : JSON.stringify({nome : nome})
        }).then(res => res.json()).then(data => {
            
            navigate(`/vincularturma/${data.infos.id}`, {state : {cadastrado : true}})
            
        }).catch(err => console.log(err))

    }

    return (
        <section className={style.container}>

            <h1>Cadastre-se!</h1>
            <p>Venha estudar com a gente!</p>
                    
            <CadastroAlunoForm handleOnSubmit={cadastrarAluno}/>

        </section>
    )
}