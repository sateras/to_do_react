import React, {useState} from "react";
import {BsPlusLg} from "react-icons/bs";


const TodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    function addTodo (title) {
        setTodos(prav => [
          {
            id: new Date(),
            title: title,
            isCompleted: false,
            isEdit: false
          },
          ...prav
        ])
        setTitle('')
      }

    return(
        <div className="flex p-1">
            <BsPlusLg className=" ml-2 mr-1"/>
            <input onChange={e => setTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && addTodo(title)} value={title} placeholder='Add a task' type={'text'} 
            className=" rounded-lg border-none outline-none bg-zinc-800"/>
        </div>
    )
}

export default TodoField