import React, { useEffect, useState } from 'react';
import ScoreBroad2 from './assets/ScoreBroad2.png';
import { styles } from './styles';


export default function View (){

    const [value, setValue] = useState([]);
  
  
  useEffect(() => {
    const value2 = setInterval(() => {
      const value = localStorage.getItem('Data');
      setValue(value.split(','));
    }, 500);
    return () => clearInterval(value2)
  
    
  }, []);
    const [Player1, Player2, Score1, Score2 ] = value
    document.body.style = 'background:#0000FF;';
  
    return <div style={styles.body}>
       <img src={ScoreBroad2} alt='scoreboard' style={styles.imagen}></img> 
      <p style={styles.textoplayer1}>{Player1}</p>
      <p style={styles.textoplayer2}>{Player2}</p>
      <p style={styles.score1}>{Score1}</p>
      <p style={styles.score2}>{Score2}</p>
      </div> 
   
  }