import { useState } from 'react';
import './App.css';
import TodoField from './components/todoField';
import TodoComponent from './components/todoitem';

var todoData = [
  {
    id: 1,
    title: 'Закончить уборку',
    isCompleted: false,
    isEdit: false
  },
  {
    id: 2,
    title: 'Закончить ToDo шку',
    isCompleted: false,
    isEdit: false
  },
  {
    id: 3,
    title: 'Закончить то что надо занончить',
    isCompleted: false,
    isEdit: false,
  }
]

function App() {
  const [todos, setTodos] = useState(todoData)

  function removeTodo (id) {
    const copy = [...todos]
    const index = copy.findIndex(f => f.id === id)
    copy.splice(index,1)
    setTodos(copy)
  }
  function selectTodo (id) {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }
  function editTodo (id) {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isEdit = !current.isEdit
    setTodos(copy)
  }
  function editTodoChange (id, event) {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.title = event.target.value
    setTodos(copy)
    }

  return (
    <div className="App bg-zinc-900 text-white h-screen ">
      <h1 className='font-bold p-4 text-2xl'>
        My ToDo
      </h1>
      <div className='bg-zinc-800 p-5 m-2 rounded-md'>
      <TodoField setTodos={setTodos}/>
        {
        todos.map(todo => <TodoComponent key = {todo.id} todo = {todo}
         selectTodo = {selectTodo} 
         removeTodo = {removeTodo}
         editTodo = {editTodo}
         editTodoChange = {editTodoChange}
         />)
         }
      </div>
      
    </div>
  );
}

export default App;
