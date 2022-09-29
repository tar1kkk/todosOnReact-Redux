import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask, deleteTask, doDone } from './redux/reducers/tasks';
import { doImportant } from './redux/reducers/tasks';



function App() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.tasks.todos);
  const [task, setTask] = useState('');

  return (
    <div className='App'>
      <div>
        <input value={task} type='text' onChange={(e) => setTask(e.target.value)} />
        <button onClick={() => {
          dispatch(addTask(task))
          setTask('')
        }}>
          Add
        </button>
      </div>
      <ul>
        {todos.map((item) => (
          <li key={item.id} style={{ margin: '20px 0', color: item.isDone ? 'green' : '', background: item.isImportant ? 'red' : '' }}>{item.title}
            <button style={{ marginLeft: '0 40px' }} onClick={() => dispatch(deleteTask(item.id))} type='button'>Delete</button>
            <button style={{ marginLeft: '0 40px' }} onClick={() => dispatch(doImportant(item.id))} type='button'>Важный</button>
            <button style={{ marginLeft: '0 40px' }} onClick={() => dispatch(doDone(item.id))} type='button'>Выполнен</button>
          </li>
        ))}
      </ul>
      <div>
        <input type='search' />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
