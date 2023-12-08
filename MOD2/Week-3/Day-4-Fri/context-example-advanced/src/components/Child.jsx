import GrandChild from './GrandChild'

function Child() {
    return ( 
        <div>
            <span>Child</span><br />|
            <GrandChild />
        </div>
     );
}

export default Child;