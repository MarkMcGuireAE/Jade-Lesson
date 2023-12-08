import Child from './Child'

function Parent() {
    return ( 
        <div>
            <span>Parent</span><br/>|
            <Child />
        </div>
     );
}

export default Parent;