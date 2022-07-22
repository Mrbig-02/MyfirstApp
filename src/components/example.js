
import React, {useRef, useEffect} from 'react';

function Testhook(){
    const Addref = useRef(null);

    const Control = () =>{
        //console.log('add control');
       Addref.current.value = "";
    }

    useEffect(() =>{
        console.log('use effect right here')
    }, [])

    return(
        <>
            <h2>Useref hook</h2>
            <input type="text" placeholder="enter something" ref={Addref} />
            <button onClick={Control} >btn change</button>
            <p>Change something</p>
            <div> resault :</div>
        </>
    )
}

export default Testhook;