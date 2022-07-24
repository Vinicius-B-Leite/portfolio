import React from "react";
import './estilos.scss';

export default function Rodape(props){
    return(
        <footer className="rodape">
            <h2 className="rodape-titulo">{props.logo}</h2>
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Tecnologias</li>
            </ul>

            <ul>
                <li><a href="https://github.com/Vinicius-B-Leite" target="blank">LinkedIn</a></li>
                <li><a href="https://www.linkedin.com/in/vinicius-leite-9369b9245/" target="blank">Github</a></li>
                <li>viniciusbleite21@gmail.com</li>
            </ul>
        </footer>
        
    )
}