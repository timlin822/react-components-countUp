import CountUp from 'components/countUp/CountUp';

import SUBSCRIBERS_DATA from 'data/SubscribersData';

import './App.css';

function App() {
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="center">
          {SUBSCRIBERS_DATA.map(subscriber=>(
            <CountUp keys={subscriber.id} subscriber={subscriber} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;