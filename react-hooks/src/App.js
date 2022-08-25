import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import FuncHooksA from './components/FuncHooksA';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import ReducerCountTwo from './components/ReducerCounterTwo';
import ReducerCountOne from './components/ReducerCountOne';
import UseEffectOne from './components/UseEffectOne';

export const UserContext = React.createContext()
export const Channelcontext = React.createContext()

function App() {
  return (
    <div className="App">


      {/* Reducer */}

      <ReducerCountTwo/>
      {/* <ReducerCountOne/> */}


      {/* Funcional hooks */}
      {/* <UserContext.Provider value={'mukesh'}>
        <Channelcontext.Provider value={'Raj'}>
            <FuncHooksA/>
        </Channelcontext.Provider>
      </UserContext.Provider> */}

      {/* useffect using axios */}
      {/* <DataFetching/> */}

    {/* UseEffect */}
    {/* <UseEffectOne/> */}




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
