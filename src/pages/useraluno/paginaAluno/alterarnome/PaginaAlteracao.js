import { useNavigate, useParams } from 'react-router-dom'
import style from '../../../../styles/aluno/alt.module.css'
import { FormAlterarNome } from './formAlterarNome'

export function PaginaAlterarNome(){

    const { id } = useParams()
    const navigate = useNavigate()

    function alterarNome(nome){

        fetch('http://localhost:3001/aluno/altnome',{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            }, body : JSON.stringify({ id : id, nome : nome})
        }).then(res => res.json()).then(data => {

            navigate(-1)
            
        }).catch(err => console.log(err))
    }

    return (
        <>
            <section className={style.box}>

                <h1>Alterar nome</h1>

                <FormAlterarNome handleSubmit={alterarNome}/>
            </section>
        </>
    )
}