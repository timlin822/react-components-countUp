import {useState,useEffect} from 'react';

import './CountUp.css';

const CountUpItem=({subscriber})=>{
    const [count,setCount]=useState(0);
    const step=subscriber.number/300;

    const updateCount=()=>{
        if(count>=subscriber.number){
            return setCount(subscriber.number);
        }
        else{
            setCount(Math.ceil(count+step));
        }
    };

    useEffect(()=>{
        const timeoutId=setTimeout(()=>{
            updateCount(); 
        },5);

        return ()=>{
            clearTimeout(timeoutId);
        }
    },[count]);
    
    return (
        <div className="count-up-item">
            <div className="count-icon">{subscriber.icon}</div>
            <div className="count-number">{count}</div>
            <div className="count-text">Subscribers</div>
        </div>
    );
}

export default CountUpItem;