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
import Inline from './components/Inline';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import HigherOrder from './components/HigherOrder';
import  HigherOrdertwo  from './components/HigherOrdertwo';
import UpdatedComponent from './components/HigherOrderThree';
import RenderProps from './components/RenderProps';
import ContextA from './components/ContextA';


 
function App() {
  return (
    <div className="App">

      {/* React Context */}

      <ContextA/>

      {/* Render Props */}
      {/* // we can pass function also in props */}
      {/* <RenderProps render={(isLoggedIn)=> isLoggedIn ? "Mukesh" : "Guest"}/> */}

      {/* <RenderProps render={(count, incrementCount) =>(
        <HigherOrder count={count} incrementCount= {incrementCount} />
      )}/>

       <RenderProps render={(count, incrementCount) =>(
        <HigherOrdertwo count={count} incrementCount= {incrementCount} />
      )}/> */}

      {/* HigherOrder */}

      {/* <HigherOrder/>
      <HigherOrdertwo/>  */}

      {/* <UpdatedComponent/> */}

      {/* errorsHandalingMethods */}
      
      {/* <Hero heroName="superman"/>
      <Hero heroName="batman"/>
      <Hero heroName="joker"/> */}

      {/* PortalDemo */}
      {/* <PortalDemo/> */}

      {/* Purecomponent */}
      {/* <ParentComp/> */}

      {/* Fragments */}
      {/* <FragmentDemo/> */}

      {/* Lifecycle */}
      {/* <LifecycleA/> */}

    {/* Form */}
    {/* <Forms/> */}


      {/* Styling and basic css */}
    {/* <Stylesheet primary={true} /> */}
    {/* <Inline/> */}

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
