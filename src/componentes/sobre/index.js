import React, { useState } from 'react'
import './estilos.scss'

export default function Sobre(){
    const informacoes = [
        {
            titulo: 'Minha histórias',
            descricao: 'Eu sou um garoto de 16 anos e sou apaixonado por programação, animais e musculação. Descobri minha paixão em criar programas aos 13 anos quando meu irmão mais velho me aconselhava a estudar isso e que seria a profissão do futuro. Nesta época eu não levava muito a sério os estudos, pois queria programar somente para fazer hack de joguinhos, mas depois de entrar na Etec (ensino médio com técnico) me encontrei na programação web e desde então venho dando o meu melhor nos estudos para atingir meus objetivos.'
        },
        {
            titulo: 'Meus objetivos',
            descricao: 'Pensando em longo prazo, meu maior objetivo é atingir a independência financeira através de investimento e um possível empreendedorismo. Mas para agora quero aprimorar meus conhecimentos em programação para agregar um valor maior na empresas e, consequentemente, na vida das pessoas. Para que isso aconteça tenho que sempre estar estudando e me tornando a minha melhor versão. Um desejo que eu tenho, além de conquistar uma oportunidade, é fazer o curso Full Stack do Programador Br para aprender mais e conquistar os meus objetivos já falados.'
        },
        {
            titulo: '😃😃😃😃😃',
            descricao: 'Você se interessou? Vamos bater um papo!'
        }

    ]

    const [mostrarQual, setMostrarQual] = useState()
    const [ativado, setAtivado] = useState(false)
    return(
        <section className='sobre'>
            <h2>Sobre</h2>
            <div className="conteiner">
                <div className='sobre-opcoes'>
                    <ul>
                        {informacoes.map((informacao, index) => {
                            return <>
                                    <li key={informacao} onClick={()=> {
                                        setMostrarQual(index)
                                        setAtivado(true)}
                                        }>
                                        <div className={ativado && index === mostrarQual ? "linha ativado" : "linha"}></div>
                                        <span className={ativado && index === mostrarQual ? "titulo-ativado" : ''}>{informacao.titulo}</span>
                                    </li>
                                </>
                            
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