import React from "react";
import './estilos.scss';

export default function BotaoSimples(props) {
    return (
            <button className={`botaoSimples ${props.className}`} onClick={() => window.open(props.link, '_blank')} target='blank'>
                {props.children}
            </button>
    )
}