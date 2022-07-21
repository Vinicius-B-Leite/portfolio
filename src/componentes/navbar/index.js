import React, { useState } from 'react'
import './estilos.scss'

export default function NavBar(props){
    const [mostrar, setMostrar] = useState(false)
    return(
        <header>
            <h1>{props.logo}</h1>
            <nav id={mostrar ? 'mostrar' : ''}>
                <div className='menu-hamburg' onClick={() => setMostrar(!mostrar)}>
                    <div className='um'></div>
                    <div className='dois'></div>
                    <div className='tres'></div>
                </div>
                <ul >
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Tecnologias</a></li>
                </ul>
            </nav>
        </header>
    )
}