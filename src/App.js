import './App.css';
import Msg  from './Msg.js'

const Dsc = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">
      <Msg color='red' message='Estamos trabajando'/>
      <Msg color='green' message='En un curso'/>
      <Msg color='blue' message='De React'/>
      <Dsc />
    </div>
  );
}

export default App;
