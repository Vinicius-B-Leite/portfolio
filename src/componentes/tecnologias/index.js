import React, { useState } from "react";
import './estilos.scss'
import css from '../../assets/tecnologias/css-removebg-preview.png'
import html from '../../assets/tecnologias/html-removebg-preview.png'
import js from '../../assets/tecnologias/js.jpg'
import react from '../../assets/tecnologias/react-removebg-preview.png'
import sass from '../../assets/tecnologias/sass-removebg-preview.png'

export default function Tecnologias(){
    const tecnologias = [
        {
            nome: 'HTML',
            descricao: 'Esta linguagem de programação é a porta de entrada para muitas pessoas neste mundo, como foi para mim, também. Eu zelo pela acessibilidade e pela semântica em meus projetos.',
            imagem: html
        },
        {
            nome: 'CSS',
            descricao: 'O CSS é, de longe, o meu favorito da triade do front-end, pois é nele em que deixamos as páginas bonitas e glamurosas, assim podendo chamar mais ou menos atenção do público. É nele, também, que nós, programadores, criamos interfaces que se adaptam a qualquer dispostivo.',
            imagem: css
        },
        {
            nome: 'JavaScript',
            descricao: 'O JavaScript é o cérebro da nossa aplicação, contendo toda a interatividade com o usuário e funções do nosso site. Sinceramente, eu tenho um carinho muito grande por essa linguagem de programação, porque com ela é possível programar para o front, back e mobile(android e ios). Esta é a enorme vantagem dela: reaproveitar os conhecimentos para atingir outras áreas.',
            imagem: js
        },
        {
            nome: 'Sass',
            descricao: 'Com o Sass, a agilidade de estilizar as páginas aumentou muito. Ele resolveu o meu problema da leitura do CSS que, por muitas vezes, ficam enormes e impossíveis de se compreender. Esta foi a grande sacada para facilitar esta parte do processo e deixar muito mais prazerosa a programação.',
            imagem: sass
        },
        {
            nome: 'React',
            descricao: 'ReactJS é o meu primeiro e único framework front end que eu estudo. Estou no começo nesse mundo novo e estou adorando a facilidade de integrar o HTML com o JavaScript como se fossem um só. Pretendo me aprofundar bastante neste framework e, quem sabe, me aventurar pelo React Native.',
            imagem: react
        }
    ]
    const [qualDescricao, setQualDescricao] = useState()
    return(
        <section className="tecnologias">
            <div className="conteiner">
                <div className="tecnologias-grid">
                    {tecnologias.map((tecnologia, index) => {
                        return (
                            <button className="card"
                             key={tecnologia.nome}
                             onMouseEnter={()=>setQualDescricao(index)} onClick={()=>setQualDescricao(index)}>
                                <img className="card-img" src={tecnologia.imagem} alt={tecnologia.nome}/>
                            </button>

                        )
                    })}
                    
                </div>
                <div className="descricao">
                    <h3 className="descricao-titulo">{qualDescricao  >= 0 ? tecnologias[qualDescricao].nome : "Tecnologia"}</h3>
                    <p className="descricao-desc">{qualDescricao >= 0 ?
                         tecnologias[qualDescricao].descricao 
                         :
                        'Clique ou passe o mouse por cima de uma tecnologia' }</p>
                </div>
            </div>
        </section>
    )
}