import { Link } from "react-router-dom"
import { VscCode } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai"
import { VscCallOutgoing } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";

import code from '../images/coding.png'

function Navbar() {

        const [NavbarBlur, setNavbarBlur] = useState(false)

        const scrollHandler = () => {
                if (window.scrollY >= 20) {
                        setNavbarBlur(true)
                }
                else {
                        setNavbarBlur(false)
                }
        }

        // A partir de la escucha por si se scrollea, ponemos o no el "blur"
        window.addEventListener('scroll', scrollHandler)

        // Creamos funciones para mostrar u ocultar el menu cuando estamos en Telefonos
        const showMenu = () => {
                let bar = document.getElementsByClassName('bar')
                let ham = document.getElementsByClassName('NavbarLinks')

                bar[0].classList.toggle('barOne')
                bar[1].classList.toggle('barTwo')
                bar[2].classList.toggle('barThree')

                ham[0].classList.toggle('showNavbar')

        }
        const hideMenu = () => {
                let bar = document.getElementsByClassName('bar')
                let ham = document.getElementsByClassName('NavbarLinks')

                bar[0].classList.toggle('barOne')
                bar[1].classList.toggle('barTwo')
                bar[2].classList.toggle('barThree')

                ham[0].classList.toggle('showNavbar')
        }

        return (

                <nav className={NavbarBlur ? 'Navbar blur' : 'Navbar'}>

                        <img src={code} alt="" 

                                id="code"
                                title="Reload"
                                onClick={() => window.location.reload(true)}
                                className="Logo" />



                        <div className="Hamburger" onClick={showMenu}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                        </div>
                        <ul className="NavbarLinks">
                                <li onClick={hideMenu}>
                                        <Link to="/">
                                                <AiOutlineHome /> Home
                                        </Link>
                                </li>
                                <li onClick={hideMenu}>
                                        <Link to="/About">
                                                <BsPerson /> About
                                        </Link>
                                </li>
                                <li onClick={hideMenu}>
                                        <Link to="/Projects">
                                                <VscCode /> Projects
                                        </Link>
                                </li>
                                <li onClick={hideMenu}>
                                        {/* <Link to="/Contact">
                                                <VscCallOutgoing /> Contact
                                        </Link> */}

                                        <a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJfmrJhSGRsbxjCkMmPhbVPfgVHKpBZtsgdTWVCjZjgXDJkZHRbjbJnHrWLmCbVzJbrBNqV" target="_blank">
                                                <VscCallOutgoing /> Contact
                                        </a>
                                </li>
                        </ul>
                </nav>
        )
}

export default Navbar




