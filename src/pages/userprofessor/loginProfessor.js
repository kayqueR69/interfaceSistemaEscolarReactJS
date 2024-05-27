import style from '../../styles/professor/LoginProfessor.module.css'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { LoginProfessorForm } from './form/FormLoginProf'
import { FlashMsgLogin } from '../../components/mensgens/AlertCadastro' 

export function LoginProfessor(){

    const location = useLocation()

    const navigate = useNavigate()
    const [msg, setMsg] = useState()
    const [customClass, setCustomClass] = useState('error')
    const [visible, setVisible] = useState(false)

    function alterarVisibilidade() {
        setTimeout(() => {
            setVisible(false)
        }, 2000)
    }

    useEffect(() => {
        if(location.state?.menssagem) {
            setMsg(location.state?.menssagem)
            setCustomClass('cadastro')
            setVisible(true)
            if(location.state.delete) {
                alterarVisibilidade()
            }
        }
    },[location.state?.menssagem, location.state?.delete])

    function entrarComoProf(profesor) {

        fetch('http://localhost:3001/prof/login', {
            method : 'POST',
            headers : {
                'Content-type':'application/json'
            }, body : JSON.stringify(profesor)
        }).then(res => res.json()).then(data => {
            
            if ( data.log ) {
                navigate(`/paginaprofessor/${data.infos.id}`)
            } else {
                setVisible(true)
                setMsg(' Usuario ou senhas inválidos! ')
                alterarVisibilidade()
            }

        }).catch(err => console.log(err))

    }

    return (
        <div className={style.container}>

            <h1>Login Professor</h1>

            {visible && <FlashMsgLogin customClass={customClass} msg={msg}/>}
            
            <LoginProfessorForm handleSubmit={entrarComoProf}/>

            <Link to='/cadastroprofessor'>
                Não tem uma conta? Cadastre-se!
            </Link>

        </div>
    )
}