import React from 'react';
import './estilos.scss';

export default function BotaoGradiente(props){
    return(
        <button className='botao-gradiente' href={props.link}>{props.children}</button>
    )
}