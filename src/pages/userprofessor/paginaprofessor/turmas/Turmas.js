import { useEffect, useState } from "react";

import style from '../../../../styles/professor/Turma.module.css'
import { CardsTurma } from "./CardTurma";

export function Turmas({id}) {

    const [turmas, setTurmas] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/prof/getturmas/${id}`, {
            method : 'GET',
            headers : {
                'Content-type':'application/json'
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setTurmas(data)
        }).catch(err => console.log(err))
    }, [id])

    return (

        <div className={style.box}>
            <h2>Minhas turmas</h2>

            {turmas.length > 0 ? (

                <section>
                    <CardsTurma listaTurma={turmas}/>
                </section>
                
            ) : (<p>Você ainda não está vinculado a nenhuma turma</p>)}

        </div>
    )
}