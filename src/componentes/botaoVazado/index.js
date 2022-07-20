import React from "react";
import './estilos.scss'

export default function BotaoVazado(props){
    return(
        <a href={props.link} target="blanck" onClick={props.onClick} className="botao-vazado">{props.children}</a>
    )
}