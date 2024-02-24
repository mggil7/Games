import './CirclesOnScreen.css'
import React, {useState} from 'react'

const CirclesOnScreen = () => {

    const [ pontos, setPontos ] = useState([]);

    const handleLimpar = () => {
        setPontos(['']);

    }

    const addDots = (e) => {
        const newDots = {
            clientX : e.clientX,
            clientY: e.clientY
        }

        setPontos((prev)=>[...prev, newDots])

    }


  return (

<>
    <div id='topGame'>

     <button onClick={handleLimpar}>LIMPA</button>
      
        
    </div>
   
    <div id="pageGame" onClick={addDots}>

        {pontos.map((ponto,index) => {
            return (
                <div key={index}
                style = {{
                    left: ponto.clientX,
                    top: ponto.clientY,
                    position:'absolute',
                    width:'20px',
                    height:'20px',
                    borderRadius:'50%',
                    backgroundColor: 'blue'
                }}></div>
            )
        })}
        
    </div>

</>
  )
}

export default CirclesOnScreen