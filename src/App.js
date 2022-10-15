/* import player1 from "../src/Archivos/player1.txt"
import FileSaver from 'file-saver' */
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Admin from "./admin"
import View from "./view"



export default function App() {
  /* useEffect(() => {
    fetch(player1)
    .then((r) => r.text())
    .then(text => setPlayer1(text))
  }, [])

  */
  
 /*  var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    FileSaver(blob, "./Archivos/player1.txt"); */
   
  return  <div className="app">
        <Router>
            <Routes>
                <Route path="/" element={<Admin/>}></Route>
                <Route path="/view" element={<View/>}></Route>
            </Routes>
        </Router>
        
    </div>
}