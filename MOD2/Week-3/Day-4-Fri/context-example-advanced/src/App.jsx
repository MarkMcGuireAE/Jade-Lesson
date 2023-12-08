import './App.css'
import Parent from './components/Parent'

import { useFamilyContext } from './familyContext'

function App() {

  const { traits, changeTraits } = useFamilyContext()

  return (
    <div>
      <button onClick={changeTraits}>Change</button><br/><br/>
     <span style={traits}>App</span><br />|
        <Parent />
    </div>
  )
}

export default App
