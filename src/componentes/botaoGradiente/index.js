import React from 'react';
import './estilos.scss';

export default function BotaoGradiente(props){
    return(
        <a className='botao-gradiente' target="blank" href={props.link}>{props.children}</a>
    )
}