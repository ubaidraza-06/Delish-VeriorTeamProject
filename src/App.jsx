import './App.css'
import {BrowserRouter as Router ,Routes,Route} from  "react-router-dom";
import HomeThree from './Pages/HomeThree';

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<HomeThree/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
