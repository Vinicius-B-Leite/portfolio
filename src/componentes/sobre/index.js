import React, { useState } from 'react'
import './estilos.scss'

export default function Sobre(){
    const informacoes = [
        {
            titulo: 'Minha história',
            descricao: 'Eu sou um garoto de 16 anos e sou apaixonado por programação, animais e musculação. Descobri minha paixão nesta área aos 13 anos quando meu irmão mais velho me aconselhava a estudar sobre a profissão do futuro. Nesta época eu não levava muito a sério os estudos, pois queria programar somente para fazer hack de joguinhos, mas depois de entrar na Etec (ensino médio com técnico) me encontrei na programação web e desde então venho dando o meu melhor nos estudos para atingir meus objetivos.'
        },
        {
            titulo: 'Meus objetivos',
            descricao: 'Além da programação, desejo começar a investir o quanto antes e, talvez, empreender no futuro. Mas por agora quero aprimorar meus conhecimentos em programação para agregar um valor maior na empresas e, consequentemente, nas vidas das pessoas. Para que isso aconteça tenho que sempre estar estudando e me tornar minha melhor versão. Uma outra meta que eu tenho, além de conquistar uma oportunidade, é fazer o curso Full Stack do Programador Br para evoluir ainda mais.'
        },
        {
            titulo: '😃😃',
            descricao: 'Você se interessou? Vamos bater um papo!'
        }

    ]

    const [mostrarQual, setMostrarQual] = useState()
    const [ativado, setAtivado] = useState(false)
    return(
        <section className='sobre'>
            <h2 className='titulo-sobre'>Sobre</h2>
            <div className="conteiner">
                <div className='sobre-opcoes'>
                    <ul>
                        {informacoes.map((informacao, index) => {
                            return (
                                    <li key={informacao.titulo}>
                                        <button className={ativado && index === mostrarQual? 'opcao ativada' : 'opcao'} onClick={()=> {
                                            setMostrarQual(index)
                                            setAtivado(true)}
                                            }>
                                            <div className={ativado && index === mostrarQual? 'linha ativada' : "linha"}></div>
                                            <span className={ativado && index === mostrarQual? 'opcao-titulo ativado' : 'opcao-titulo'}>{informacao.titulo}</span>
                                        </button>
                                    </li>)
                            
                        })}
                    </ul>
                </div>
                <div className='sobre-descricao'>
                    <p>{mostrarQual > -1 ? informacoes[mostrarQual].descricao : 'Selecione algum item'}</p>
                </div>
            </div>
        </section>
    )
}