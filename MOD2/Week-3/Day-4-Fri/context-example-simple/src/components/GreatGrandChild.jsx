import { FamilyContext } from '../App'
import { useContext } from 'react'

function GreatGrandChild() {

    const { traits, changeTraits } = useContext(FamilyContext)

    console.log(traits)

    return ( 
        <div onClick={changeTraits}>
            <span style={traits}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;