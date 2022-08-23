import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import UseEffectOne from './components/UseEffectOne';

function App() {
  return (
    <div className="App">

    {/* UseEffect */}
    <UseEffectOne/>




        {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}

      {/* Exampl for hooks with in crement decremen Reset */}
      {/* <HookCounter2/> */}

      {/* Exmple for hooks in function */}
      {/* <HookCounter/> */}


      {/* Example for state using class */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
