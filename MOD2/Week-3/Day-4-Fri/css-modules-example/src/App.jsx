import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homepage from './pages/home/Index'
import Header from './pages/header/Header';
import Last from './pages/last/Last';

function App() {

  return (
    <>
<Router>
<Routes>
  <Route path="/" element={  <Homepage/>}/>
  <Route path="/Header" element={  <Header/>}/>
  <Route path="/last" element={  <Last/>}/>
</Routes>
</Router>
 
    </>
  )
}

export default App
