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
            descricao: 'lembrar de colocar texto do html',
            imagem: html
        },
        {
            nome: 'CSS',
            descricao: 'lembrar de colocar texto do css',
            imagem: css
        },
        {
            nome: 'JavaScript',
            descricao: 'lembrar de colocar texto do js',
            imagem: js
        },
        {
            nome: 'Sass',
            descricao: 'lembrar de colocar texto do sass',
            imagem: sass
        },
        {
            nome: 'React',
            descricao: 'lembrar de colocar texto do react',
            imagem: react
        }
    ]
    const [qualDescricao, setQualDescricao] = useState()
    return(
        <section className="tecnologias">
            <div class="conteiner">
                <div className="tecnologias-grid">
                    {tecnologias.map((tecnologia, index) => {
                        return (
                            <div className="card"
                             key={tecnologia.nome}
                             onMouseEnter={()=>{
                                setQualDescricao(index)
                             }}>
                                <img src={tecnologia.imagem}/>
                            </div>

                        )
                    })}
                    
                </div>
                <div className="descricao">
                    <h3>{qualDescricao  >= 0 ? tecnologias[qualDescricao].nome : "Tecnologia"}</h3>
                    <p>{qualDescricao >= 0 ?
                         tecnologias[qualDescricao].descricao 
                         :
                        'Clique ou passe o mouse por cima de uma tecnologia' }</p>
                </div>
            </div>
        </section>
    )
}