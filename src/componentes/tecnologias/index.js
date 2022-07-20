import React, { useState } from "react";
import './estilos.scss'
import css from '../../assets/tecnologias/css-removebg-preview.png'
import html from '../../assets/tecnologias/html-removebg-preview.png'
import js from '../../assets/tecnologias/js.jpg'
import react from '../../assets/tecnologias/react-removebg-preview.png'
import sass from '../../assets/tecnologias/sass-removebg-preview.png'
import embreve from '../../assets/projetos/embreve.png'

export default function Tecnologias(){
    const tecnologias = [
        {
            nome: 'HTML',
            descricao: 'html',
            imagem: html
        },
        {
            nome: 'CSS',
            descricao: 'css',
            imagem: css
        },
        {
            nome: 'JavaScript',
            descricao: 'js',
            imagem: js
        },
        {
            nome: 'Sass',
            descricao: 'sass',
            imagem: sass
        },
        {
            nome: 'React',
            descricao: 'react',
            imagem: react
        }
    ]
    const [mostrarDescricao, setMostrarDescricao] = useState()
    return(
        <section className="tecnologias">
            <div class="conteiner">
                <div className="tecnologias-grid">
                    {tecnologias.map((tecnologia, index) => {
                        return (
                            <div className="card"
                             key={tecnologia.nome}
                             onMouseEnter={()=>{
                                setMostrarDescricao(index)
                             }}>
                                <img src={tecnologia.imagem}/>
                            </div>

                        )
                    })}
                    
                </div>
                <div className="descricao">
                    <h3>Tecnologia</h3>
                    <p>{mostrarDescricao >= 0 ?
                         tecnologias[mostrarDescricao].descricao 
                         :
                        'Clique ou passe o mouse por cima de uma tecnologia' }</p>
                </div>
            </div>
        </section>
    )
}