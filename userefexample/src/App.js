import logo from './logo.svg';
import './App.css';
import UseRefHooks from './components/UseRefHooks';
import ClassTimer from './components/ClassTimer';
import FunRef from './components/FunRef';

function App() {
  return (
    <div className="App">

      {/* useRef hooks using function */}
      <FunRef/>

      {/* useRef hooks using class */}
      {/* <ClassTimer/> */}

      {/* UseRefHooks */}
      {/* <UseRefHooks/> */}
    </div>
  );
}

export default App;
