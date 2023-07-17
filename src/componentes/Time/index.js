import Jogador from '../Jogador'
import './Time.css'

const  Time = (props) => {
    const css = {backgroundColor: props.secondaryColor}

    //Tudo que está dentro do return é JSX
    return (
        (props.players.length > 0) && <section className='time' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>    
            <div className='jogadores'>
                {props.players.map(player => <Jogador key={player.name} name={player.name} position={player.position} image={player.image}/>)}
            </div>
        </section>
    )
}

export default Time
