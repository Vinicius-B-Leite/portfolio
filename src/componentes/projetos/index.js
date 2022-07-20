import React, { useState } from 'react'
import './estilos.scss'
import salaoVanyBuavaLogo from '../../assets/projetos/vanylogo.jpeg'
import blAcademiaLogo from '../../assets/projetos/blacademia.png'
import portFolioLogo from '../../assets/projetos/portfolio.png'
import embreve from '../../assets/projetos/embreve.png'
import BotaoVazado from '../botaoVazado'

export default function Projetos(){
    const projetos = [
        {
            titulo: 'Salão Vany Buava',
            ano: 2022,
            imagemFundo: salaoVanyBuavaLogo,
            link: 'https://salaovanybuava.netlify.app/'
        },
        {
            titulo: 'BL Academia',
            ano: 2022,
            imagemFundo: blAcademiaLogo,
            link: 'https://blacademia.netlify.app/'
        },
        {
            titulo: 'Portfolio',
            ano: 2022,
            imagemFundo: portFolioLogo,
            link: ''
        },
        {
            titulo: 'Em breve',
            ano: '??',
            imagemFundo: embreve,
            link: ''
        }
    ]

    var [limite, setLimite] = useState(2)
    return(
        <section className='projetos'>
            <div className="conteiner">
                <h2>Projetos</h2>
                <div className='caixa'>
                    {projetos.map((projeto, index) => {
                        return(
                            <div
                             className='caixa-items'
                             onClick={() => window.open(projeto.link, "_blank")}
                             key={projeto.titulo} 
                             id={(projetos.length -1) > limite && index >= limite + 1 ? 'esconder' : ''}
                             style={index % 2 != 0 ? {flexDirection: 'row-reverse'} : {flexDirection:  'row'}}>
                                <img src={projeto.imagemFundo} alt={`imagem do projeto ${projeto.titulo}`}/>
                                <h3>{projeto.titulo}</h3>
                                <h3>{projeto.ano}</h3>
                            </div>
                            )
                    })}
                </div>
                <BotaoVazado onClick={
                    () => limite <= 2 ? setLimite(() => limite += projetos.length - limite) : setLimite(() => limite -= 1)
                    }>
                        {limite > 2 ? "Ver menos" : "Ver mais"}
                </BotaoVazado>
            </div>
        </section>
    )
}