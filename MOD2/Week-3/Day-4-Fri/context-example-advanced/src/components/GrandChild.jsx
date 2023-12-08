import GreatGrandChild from "./GreatGrandChild";

function GrandChild() {
    return ( 
        <div>
            <span>GrandChild</span> <br/> |
            <GreatGrandChild />
        </div>
     );
}

export default GrandChild;