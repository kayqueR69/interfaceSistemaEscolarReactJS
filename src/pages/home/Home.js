import style from '../../styles/Home.module.css'

import { BotaoLogin } from '../../components/botoes/BtnLogin'
import { Footer } from '../../layouts/Footer'

export function Home() {
    return (
        <>
            <section className={style.container}>

                <h1>Sistema <span>escolar</span></h1>
                <p>Acesar como : </p>
                <div>
                    <BotaoLogin to='/loginaluno' text='Aluno'/>
                    <BotaoLogin to='/loginprofessor' text='Professor'/>
                </div>

            </section>

            <Footer/>
        </>
    )
}