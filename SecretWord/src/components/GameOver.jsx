//CSS
import './GameOver.css'


const GameOver = ({retry}) => {

  return (

    <div>
        <h1>Game Over</h1>
        <button onClick={retry}>Tentar Novamente ???</button>
    </div>
  )
}

export default GameOver