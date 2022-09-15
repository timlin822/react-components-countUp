import CountUpItem from './CountUpItem';

import SUBSCRIBERS_DATA from 'data/SubscribersData';

import './CountUp.css';

const CountUp=()=>{
    return (
        <div className="count-up">
            {SUBSCRIBERS_DATA.map(subscriber=>(
                <CountUpItem key={subscriber.id} subscriber={subscriber} />
            ))}
        </div>
    );
}

export default CountUp;