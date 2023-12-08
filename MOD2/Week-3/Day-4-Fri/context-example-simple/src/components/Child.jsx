import GrandChild from './GrandChild'

function Child({ traits }) {
    return ( 
        <div>
            <span>Child</span><br />|
            <GrandChild traits={traits} />
        </div>
     );
}

export default Child;