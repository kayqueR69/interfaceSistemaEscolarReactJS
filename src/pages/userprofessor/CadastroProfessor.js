import { useNavigate } from 'react-router-dom'
import style from '../../styles/professor/CadastroProfessor.module.css'

import { FormCadastroProf } from './form/FormCadProf'

export function CadastroProfessor(){

    const navigate = useNavigate()

    function cadastroProfessor(professor) {

        fetch('http://localhost:3001/prof/cadastro', {
            method : 'POST',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify(professor)
        }).then(res => res.json()).then(data => {
            if (data.criado) {
                navigate('/loginprofessor', {state : {menssagem : `Cadastrado com sucesso! seu id é : ${data.infos.id}`}})
            } else {
                alert('Erro no cadastro')
            }
        }).catch(err => console.log(err))

    }

    return (

        <div className={style.container}>
            <h1>Seja bem-vindo a nossa escola!</h1>
            <p>Cadastre-se já!</p>
            <FormCadastroProf handleSubmit={cadastroProfessor}/>
        </div>

    )
}