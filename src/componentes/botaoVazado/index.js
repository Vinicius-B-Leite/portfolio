import React from "react";
import './estilos.scss'

export default function BotaoVazado(props){
    return(
        <a href={props.link} onClick={props.onClick} className="botao-vazado">{props.children}</a>
    )
}