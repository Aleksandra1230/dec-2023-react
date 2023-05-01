import React, {useEffect, useState} from 'react';
import {Users} from "./components/Users";
import Posts from "./components/Posts";

const App = () => {

    const [flag, setFlag] = useState(true);
    useEffect(()=> {

    }, [])
    return (
        <>

        <div>
            {flag && <Posts flag={flag}/>}
            <button onClick={()=>setFlag(prevState => !prevState )}>
                hide
            </button>
        </div>
        </>
    );
};

export default App;