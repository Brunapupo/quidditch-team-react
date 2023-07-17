import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const teams = [
    {
      name: 'Gryffindor',
      primaryColor: '#ae0001',
      secondaryColor: '#740001',
    },
    {
      name: 'Slytherin',
      primaryColor: '#2a623d',
      secondaryColor: '#1a472a',
    },
    {
      name: 'Ravenclaw',
      primaryColor: '#222f5b',
      secondaryColor: '#0e1a40',
    },
    {
      name: 'Huffepuff',
      primaryColor: '#f0c75e',
      secondaryColor: '#ecb939',
    }
  ]

  const [players, setPlayers] = useState([])

  const aoNovoJogadorAdicionado = (player) => {
    // debugger
    setPlayers([...players, player])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(team => team.name)} aoJogadorCadastrado={player => aoNovoJogadorAdicionado(player)} />

      {teams.map(team => <Time
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        players={players.filter(player => player.team === team.name)}
      />)}

      <Rodape />

    </div>
  );
}

export default App; 
