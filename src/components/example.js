
import React, {useRef} from 'react';

function Testhook(){
    const Addref = useRef(null);

    const Control = () =>{
        console.log('add control');
    }

    return(
        <>
            <h2>Useref hook</h2>
            <input type="text" placeholder="enter something" ref={Addref} />
            <button onClick={Control} >btn change</button>
        </>
    )
}

export default Testhook;