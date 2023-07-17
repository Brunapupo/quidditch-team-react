/* eslint-disable no-undef */
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

import './Formulario.css'

const Formulario = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    //evento
    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            name: name, 
            position: position,
            image: image,
            team: team         
        })
        //limpa o formulário
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>fill in your data to join the quidditch team</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Name"
                    placeholder="Type your name"
                    valor={name}
                    aoAlterado={valor => setName(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Position"
                    placeholder="Type your position"
                    valor={position}
                    aoAlterado={valor => setPosition(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Image"
                    placeholder="Enter image address"
                    valor={image}
                    aoAlterado={valor => setImage(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true}
                label="Teams" 
                itens={props.teams}
                valor={team} 
                aoAlterado={valor => setTeam(valor)}
                />
                <Botao>
                    Create card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario