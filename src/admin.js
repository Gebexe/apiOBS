import React, { useEffect, useState } from "react"

export default function Admin () {

    const [Player1, setPlayer1] = useState('')
    const [Player2, setPlayer2] = useState('')
    const [Score1, setScore1] = useState('')
    const [Score2, setScore2] = useState('')
   /*  const navigate = useNavigate()  */
   /*  const Navegar = () => {
        return <Navigate to="/view" Player1 = {Player1}/>
    } */
    fetch("http://localhost:3000/player1",)
    useEffect(() =>{localStorage.setItem('Data', [Player1, Player2, Score1, Score2])},
    [Player1, Player2, Score1, Score2])
    return <div>
     
    <h1>Player 1 </h1>
    <input className="player1" placeholder="Player 1" value={Player1}
     onChange={(e) => {setPlayer1(e.target.value)}} ></input>
      <input className="score1" placeholder="0" value={Score1}
     onChange={(e) => {setScore1(e.target.value)}} ></input>
     <h1>Player 2 </h1>
    <input className="player2" placeholder="Player 2" value={Player2}
     onChange={(e) => {setPlayer2(e.target.value)}} ></input>
       <input className="score2" placeholder="0" value={Score2}
     onChange={(e) => {setScore2(e.target.value)}} ></input>
     <a href="/view" target='_blank'><button>vista</button></a>
  
     </div>
     
}

/* export function View2() {

  const [value, setValue] = useState([]);


useEffect(() => {
  const value2 = setInterval(() => {
    const value = localStorage.getItem('Data');
    setValue(value.split(','));
  }, 500);
  return () => clearInterval(value2)

  
}, []);
  const [Player1, Player2, Score1, Score2 ] = value

  return  <div>
    <p>{Player1} {Score1} vs {Score2} {Player2}</p>
    </div> 
 
} */