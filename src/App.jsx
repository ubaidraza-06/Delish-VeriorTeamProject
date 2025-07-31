import './App.css'
import {BrowserRouter as Router ,Routes,Route} from  "react-router-dom";
import HomeThree from './Pages/HomeThree';
import About from './Pages/About'
import Contact from './Pages/Contact';

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/HomeThree' element={<HomeThree/>}/>
        <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      
    </Router>

    </>
  )
}

export default App
