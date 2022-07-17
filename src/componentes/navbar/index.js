import React from 'react'
import './estilos.scss'

export default function NavBar(){
    return(
        <header>
            <h1> BL Original</h1>
            <nav>
                <div className='menu-hamburg on'>
                    <div className='um'></div>
                    <div className='dois'></div>
                    <div className='tres'></div>
                </div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Tecnologias</a></li>
                </ul>
            </nav>
        </header>
    )
}