import { useParams } from 'react-router-dom'
import { HeaderProfessor } from './HeaderProf'
import { useEffect, useState } from 'react'
import { Turmas } from './turmas/Turmas'

export function PaginaProfessor() {

    const { id } = useParams()

    const [infos, setInfos] = useState()

    useEffect(() => {

        fetch(`http://localhost:3001/prof/getinfos/${id}`, {
            method : 'GET',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            setInfos(data)
        }).catch(err => console.log(err))

    }, [id])

    return (
        <>

            {infos && <HeaderProfessor infos={infos}/>} 

            <hr />

            {infos &&  <Turmas id={id}/>}

            <hr />

        </>
    )
}