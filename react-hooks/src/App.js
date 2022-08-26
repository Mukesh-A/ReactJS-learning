import React, {useReducer} from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import FuncHooksA from './components/FuncHooksA';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
import ReducerContextA from './components/ReducerContextA';
import ReducerContextB from './components/ReducerContextB';
import ReducerContextC from './components/ReducerContextC';
import ReducerCountTwo from './components/ReducerCounterTwo';
import ReducerCountOne from './components/ReducerCountOne';
import UseEffectOne from './components/UseEffectOne';

export const CountContext = React.createContext()

export const UserContext = React.createContext()
export const Channelcontext = React.createContext()

// const initalState = 0
// const reducer = (state, action)=>{
//   switch(action.type){
//       case 'increment' :
//           return { ...state, firsCounter: state.firsCounter + action.value}
//       case 'decrement' :
//           return {...state,firsCounter: state.firsCounter - action.value}

//       case 'increment2' :
//           return {...state,secondCounter: state.secondCounter + action.value}
//       case 'decrement2' :
//           return {...state,secondCounter: state.secondCounter - action.value}
//       case 'reset' :
//           return initalState
//       default: 
//           return state
//   }
// }

function App() {

  // const [count, dispatch] = useReducer(reducer,initalState)
  return (
    <div className="App">

      {/* Reducer Context */}
    {/* <CountContext.Provider>

      <ReducerContextA/>
      <ReducerContextB/>
      <ReducerContextC/>
    </CountContext.Provider> */}
      


      {/* Reducer */}

      {/* <ReducerCountTwo/> */}
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
