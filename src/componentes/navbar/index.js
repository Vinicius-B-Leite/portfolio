import React, { useState } from 'react'
import './estilos.scss'

export default function NavBar(props){

    const links = [
        {
            para: '#home',
            nome: 'Home'
        },
        {
            para: '#sobre',
            nome: 'Sobre'
        },
        {
            para: '#projetos',
            nome: 'Projetos'
        },
        {
            para: '#tecnologias',
            nome: 'Tecnologias'
        }
    ]
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
                    {
                        links.map(link => {
                            return <li key={link.nome}><a onClick={() => setMostrar(false)} href={link.para}>{link.nome}</a></li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}