import logo from '../imgs/logo.png'
import style from '../styles/Header.module.css'
import { Link } from 'react-router-dom'

export function Header(){
    return (
        <header className={style.cabecalho}>
                <Link to='/'>
                    <img src={logo} alt='Logo do app' height='60px' />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/informacoes'>
                            Informações
                        </Link>
                    </li>
                </ul>
            </header>
    )
}