import style from '../styles/Footer.module.css'

import { FaBookOpen } from "react-icons/fa"

export function Footer(){
    return (
        <footer className={style.footer}>

            <span><FaBookOpen/></span>
            <p><span>SYSTESC</span> &copy; 2024</p>
            
        </footer>
    )
}