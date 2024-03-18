import Header from './components/Header.jsx'
import Array from './components/array/Array.js';
import ArrayState from './components/array_state/ArrayState.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Parent from './components/children/Parent.jsx';
import Counter from './components/counter/Counter.jsx';
import Timer from './components/timer/Timer.jsx';
import User from './components/user/User.jsx';
import Fetch from './fetch/Fetch.jsx';

function App() {
  const name = 'Luis';
  /*return (
    <>
    <Parent/>
    <Header my_name={name}></Header>
    <div>Hello {name}!!!</div>
    <Array />
    <Calendar/>
    <User/>
    <br/>
    <Counter />
    <br/>
    <ArrayState />
    <br/>
    <Timer />
    </>
  );*/
  return (
    <>
  <Parent />
  <Fetch />
    </>
  )
}

export default App;
