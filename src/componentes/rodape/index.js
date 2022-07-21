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
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Github</a></li>
                <li>viniciusbleite21@gmail.com</li>
            </ul>
        </footer>
        
    )
}