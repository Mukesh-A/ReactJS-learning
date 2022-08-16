import logo from './logo.svg';
import './App.css';
import Greet from './components/FunctionsC'
import ClassC from './components/ClassC';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import Stylesheet from './components/Stylesheet';


function App() {
  return (
    <div className="App">

      {/* Styling and basic css */}
    <Stylesheet primary={true} />

      {/* //ListRendering */}
      {/* <ListRendering/> */}

      {/* //BindingEvents */}

      {/* <EventBind/> */}


      {/* //Method send as props */}
      {/* <ParentComponent/> */}

      {/* Conditional Rendering */}
      {/* <ConditionalRendering/> */}


      {/* <FunctionClick/> */}

      {/* <Counter/> */}
      {/* => Props are immutable */}
      {/* => Name attribute which is passing to the greet functionC component ,
      their we have to revice it as props  */}
      {/* <Greet name="Mukesh AAAAAAAA" age="18">
        <p>Hello Hero</p>
      </Greet> */}


      {/* => In class component we can pass same attribute but we need not give any prameter like functional components to this directly in div give it as {this.props.name} */}
      {/* <ClassC name="Raj" age="28" />*/}

      {/* <Message />  */}
    </div>
  );
}

export default App;
