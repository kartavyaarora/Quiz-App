import Result from "./Components/Result";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  const { start, exit } = useContext(QuizContext);
  return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Router>   
                  <Routes>
                    <Route path='/' element={<Start />} />
                  </Routes>
                </Router>
                
            }
          </>
          : <Result />
      }
      
    </>
  );
}

export default App;
