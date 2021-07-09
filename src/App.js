import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import ToDoList from './components/ToDoList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';


function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Sucess</h1>
      <Inline />
      <StyleSheet primary={true}/>
      {/*<ToDoList />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
     <Counter increment={1}/>
      <Message />
      <Greet name="Jitender" heroName="Iron Man">
       <p>This is children Props</p>
     </Greet>
     <Greet name="Pooja" heroName="Wonder woman">
       <button>Action</button>
     </Greet>
     <Greet name="Ruchi" heroName="Kiyara"/>
     <Welcome name="Jitender" heroName="Iron Man">
       <p>This is children Props</p>
     </Welcome>
     <Welcome name="Pooja" heroName="Wonder woman">
       <button>Action</button>
     </Welcome>
     <Welcome name="Ruchi" heroName="Kiyara"/>
     <Hello /> */}
    </div>
  );
}

export default App;
