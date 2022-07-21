import React from 'react'
import './estilos.scss'
import salaoVanyBuavaLogo from '../../assets/projetos/vanylogo.jpeg'
import blAcademiaLogo from '../../assets/projetos/blacademia.png'
import portFolioLogo from '../../assets/projetos/portfolio.png'
import BotaoSimples from '../botaoSimples'

export default function Projetos(){
    const projetos = [
        {
            titulo: 'Salão Vany Buava',
            descricao: <p>[Em desenvolimento] <br/> Este projeto foi feito para um salão de beleza da cidade em que eu moro e também foi a minha primeira oportunidade como freelancer <br/> HTML | CSS | JavaScript</p>,
            imagemFundo: salaoVanyBuavaLogo,
            link: 'https://salaovanybuava.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/salao-vany-buava'
        },
        {
            titulo: 'BL Academia',
            descricao: <p>Projeto de estudo para aplicar os conhecimentos de responsividade adiquiridos no curso da Alura <br/> HTML | CSS</p>,
            imagemFundo: blAcademiaLogo,
            link: 'https://blacademia.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/Projeto-BL-academia'
        },
        {
            titulo: 'Portfólio pessoal',
            descricao: <p>No meu portfolio apliquei meus primeiros conhecimentos em ReactJS</p>,
            imagemFundo: portFolioLogo,
            link: 'https://viniciusbleite-portfolio.netlify.app',
            github: 'https://github.com/Vinicius-B-Leite/portfolio'
        }
    ]

    return(
        <section className='projetos'>
            <h2>Projetos</h2>
            <div className="flex">
                {projetos.map(projeto => {
                    return(
                        <div className='card' key={projeto.titulo}>
                            <img src={projeto.imagemFundo} alt={projeto.titulo}/>
                            <h2>{projeto.titulo}</h2>
                            {projeto.descricao}
                            <BotaoSimples className="botao-projeto" link={projeto.github}>Github</BotaoSimples>
                            <BotaoSimples className="botao-projeto-inverso" link={projeto.link}>Abrir</BotaoSimples>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}