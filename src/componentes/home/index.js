import React from 'react';
import NavBar from '../navbar';
import './estilos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import BotaoGradiente from '../botaoGradiente';
import BotaoVazado from '../botaoVazado';


export default function Home(props){
    return(
            <main className='hero' id='home'>
                <a className='pularNavegação' href='#hero-detalhes'>Pular para o conteúdo principal</a>
                <NavBar logo={props.logo}/>   
                <div className="hero-detalhes" id='hero-detalhes'>
                    <h2 className='saudacao'>Eae, eu sou o </h2>
                    <h1 className='titulo-animado'>Vinicius B.  Leite</h1>
                    <h2 className='profissao'>Desenvolvedor <span lang='en'>Front-end</span> e futuro <span lang='en'>Full-Stack</span></h2>
                    <div className="conteiner-botao">
                        <BotaoGradiente link="https://github.com/Vinicius-B-Leite">Git Hub</BotaoGradiente>
                        <BotaoVazado link="https://www.linkedin.com/in/vinicius-leite-9369b9245/">LinkedIn</BotaoVazado>
                    </div>
                </div>
                <h3 className='scrool-down' lang='en'>Scroll Down <FontAwesomeIcon icon={faArrowDown} className="icon"/> </h3>
            </main>
    )
}