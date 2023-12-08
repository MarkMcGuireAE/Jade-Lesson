import { useFamilyContext } from "../familyContext";

function GreatGrandChild() {

    const { traits } = useFamilyContext()

    return ( 
        <div>
            <span style={traits}>GreatGrandChild</span> <br />
        </div>
     );
}

export default GreatGrandChild;