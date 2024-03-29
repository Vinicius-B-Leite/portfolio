import React from 'react'
import './estilos.scss'
import blAcademiaLogo from '../../assets/projetos/blacademia.png'
import portFolioLogo from '../../assets/projetos/portfolio.png'
import aluraStudies from '../../assets/projetos/alurastudies.png'
import pokedex from '../../assets/projetos/pokedex.png'
import BotaoSimples from '../botaoSimples'
import devmedia from '../../assets/projetos/devmedia.png'

export default function Projetos(){
    const projetos = [
        {
            titulo: 'BL Academia',
            descricao: <p className='legenda-paragrafo'>Projeto de estudo para aplicar os conhecimentos de responsividade adiquiridos no curso da Alura <br/> HTML | CSS</p>,
            imagemFundo: blAcademiaLogo,
            link: 'https://blacademia.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/Projeto-BL-academia'
        },
        {
            titulo: 'Portfólio pessoal',
            descricao: <p className='legenda-paragrafo'>No meu portfólio, apliquei meus primeiros conhecimentos em ReactJS.</p>,
            imagemFundo: portFolioLogo,
            link: 'https://viniciusbleite-portfolio.netlify.app',
            github: 'https://github.com/Vinicius-B-Leite/portfolio'
        },
        {
            titulo: 'Alura Studies',
            descricao: <p className='legenda-paragrafo'>Neste projeto da Alura aprendi a utilizar o TypeScript no React <br/>HTML | CSS | TypeScript | React</p>,
            imagemFundo: aluraStudies,
            link: 'https://alura-studies-typescript.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/alura-studies'
        },
        {
            titulo: 'Pokedex',
            descricao: <p className='legenda-paragrafo'>Este foi o meu primeiro projeto intregado com uma API. Decidi usar o pokeapi.co parra fazer o "Hello, world!" desse up nos meus projetos. <br/> HTML | SCSS | JS | React | Axios</p>,
            imagemFundo: pokedex,
            link: 'https://pokedex-vbl.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/pokedex'
        },
        {
            titulo: 'Prova Devmedia',
            descricao: <p className='legenda-paragrafo'>Projeto desenvolvido a partir da prova técnica da Devmedia, mas adaptei para os meus conhecimentos atuais. <br/> HTML | SCSS | TypeScript | React</p>,
            imagemFundo: devmedia,
            link: 'https://prova-tecnica-devmedia.netlify.app/',
            github: 'https://github.com/Vinicius-B-Leite/devmedia-prova'
        }
    ]

    return(
        <section className='projetos' id="projetos">
            <h2 className='projeto-titulo'>Projetos</h2>
            <div className="flex">
                {projetos.map(projeto => {
                    return(
                        <figure className='card' key={projeto.titulo}>
                            <img className='card-img' src={projeto.imagemFundo} alt={projeto.titulo}/>
                            <figcaption className='card-legenda'>
                                <h3 className='legenda-titulo'>{projeto.titulo}</h3>
                                {projeto.descricao}
                            </figcaption>
                            <BotaoSimples className="botao-projeto" link={projeto.github}>Github</BotaoSimples>
                            <BotaoSimples className="botao-projeto-inverso" link={projeto.link}>Abrir</BotaoSimples>
                        </figure>
                    )
                })}
            </div>
        </section>
    )
}