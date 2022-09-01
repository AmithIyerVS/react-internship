import logo from './logo.svg';
import './App.css';
import Example from './Example';
import Example2 from './Example2';
import Counter from './Counter';
import Diff from './Diff';
import Tables from './Tables';

function App() {
  const name="Student",Names="Students";
  const c1="NO",c2="Item",c3="Quantity";
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          third Assignment...!!!
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      <Example name={name} Names={Names}/>
      <Example2 c1={c1} c2={c2} c3={c3}/>
  </header> */} 
      {/* <Diff name="Amith"/> */}
      {/* <Counter />*/}
      <Tables />
    </div>

      
    
  );
}

export default App;
