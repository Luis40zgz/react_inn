import Header from './components/Header.jsx'
import Array from './components/array/Array.js';
import Calendar from './components/calendar/Calendar.jsx';
import User from './components/user/User.jsx';

function App() {
  const name = 'Luis';
  return (
    <>
    <Header my_name={name}></Header>
    <div>Hello {name}!!!</div>
    <Array />
    <Calendar/>
    {/*<User user={name}}/>*/}
    <User/>
    </>
  );
}

export default App;
