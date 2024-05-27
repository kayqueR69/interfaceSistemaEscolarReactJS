import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import style from '../../styles/aluno/LoginAluno.module.css'

import { LoginAlunoForm } from "./form/FormLogin";
import { FlashMsgLogin } from "../../components/mensgens/AlertCadastro";

export function LoginAluno() {

    const navigate = useNavigate()
    const location = useLocation()
    const [msg, setMsg] = useState('')
    const [visible, setVisible] = useState(true)
    const [classMsg, setClassMsg] = useState('error')

    useEffect(() => {
        if(location.state?.menssagem) {
            setMsg(location.state.menssagem)
            setClassMsg('cadastro')
        }
    }, [location])

    function alterarVisibilidade(){
        setTimeout(() => {
            setVisible(false)
        }, 3000)
    }

    function validacaoLogin(aluno) {

        fetch('http://localhost:3001/aluno/login', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body : JSON.stringify(aluno)
        }).then(res => res.json()).then(data => {

            if (!data.log) {
                setMsg('Usuario ou senha inválidos')
                setVisible(true)
                alterarVisibilidade()
            } else {
                navigate(`/aluno/${data.infos.id}/${data.infos.idTurma}`)
            }

        }).catch(err => {

            if(err) {
                alert('Erro no login !')
            }

        })

    }

    useEffect(() => {
        alterarVisibilidade()
    }, [])

    return (

        <section className={style.container}>
            <h1>Login Aluno</h1>

            { visible && msg && (<FlashMsgLogin msg={msg} customClass={classMsg}/>)}

            <LoginAlunoForm handleOnSubmit={validacaoLogin}/>

            <Link to='/cadastroaluno'>
                Não tem uma conta? Cadastre-se!
            </Link>

        </section>

    )
}