import React from 'react';
import NavBar from '../navbar';
import './estilos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default function Home(){
    return(
        <>
            <NavBar/>
            <div className='hero'>
                <div className='hero-titulo'>
                    <h1>Vinicius Leite</h1>
                </div>
                <h2>Desenvolvedor Front-end <br/>e futuro FullStack</h2>
                <h3>Scroll Down <FontAwesomeIcon icon={faArrowDown} className="icon"/> </h3>
                
            </div>
        </>
    )
}