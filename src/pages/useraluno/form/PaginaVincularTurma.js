import { FormVincularTurma } from "./FormVincularTurma"
import { ListaTurma } from '../../../components/listaturma/ListaTurma'
import { MsgCadastro } from '../../../components/mensgens/MsgCadastro'

import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"

import style from '../../../styles/aluno/PaginaVincTurma.module.css'

export function PaginaVincularTurma(){

    const [dadosTurma, setDadosTurma] = useState([])
    const { idAluno } = useParams()
    const [cadastrado, setCadastrado] = useState(false)
    const location = useLocation()


    useEffect(()=> {

        fetch('http://localhost:3001/aluno/verturmas',{
            method:'GET',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => { 

            setDadosTurma(data)

        }).catch(err => console.log(err))

        if (location.state?.cadastrado) {
            setCadastrado(true)
        }
    
    }, [location.state?.cadastrado])

    return (

        <div className={style.box}>

            <h1>Vincular-se a uma Turma</h1>

            {cadastrado && <MsgCadastro idAluno={idAluno}/>}
            <ListaTurma dados={dadosTurma}/>
            <FormVincularTurma idAluno={idAluno} cad={cadastrado}/>
            
        </div>

    )
}