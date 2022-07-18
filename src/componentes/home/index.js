import React from 'react';
import NavBar from '../navbar';
import './estilos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import BotaoGradiente from '../botaoGradiente';
import BotaoVazado from '../botaoVazado';


export default function Home(){
    return(
        <>
            <div className='hero'>
                <NavBar/>   
                <div class="hero-detalhes">
                    <h1>Vinicius Leite</h1>
                    <h2>Desenvolvedor Front-end e futuro Full-Stack</h2>
                    <div class="conteiner">
                        <BotaoGradiente link="https://github.com/Vinicius-B-Leite">Git Hub</BotaoGradiente>
                        <BotaoVazado link="https://github.com/Vinicius-B-Leite">LinkedIn</BotaoVazado>
                    </div>
                </div>
                <h3>Scroll Down <FontAwesomeIcon icon={faArrowDown} className="icon"/> </h3>
            </div>
        </>
    )
}