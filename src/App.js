import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Add from './components/Add';
import Todo from './components/Todo';

function App() {
  const [task, setTask] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todoArray, setTodoArray ] = useState([]);

  // const todoTask = {
  //   text: task,
  //   complete: false
  // }

  return (
    <div className="App">
      <Header />
      <Add todoArray={todoArray} setTodoArray={setTodoArray} />
      <div className='todo-list'>
      {todoArray.map((task, index) => {
        return <Todo 
          key={index}
          index={index}
          task={task}
          todoArray = {todoArray}
          setTodoArray = {setTodoArray}
          />
      })}

      </div>
    </div>
  );
}

export default App;
