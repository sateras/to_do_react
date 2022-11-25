import {BsCheck2, BsTrashFill, BsPencilFill, BsCheckAll} from 'react-icons/bs';
function TodoComponent ({todo, selectTodo, removeTodo, editTodoChange, editTodo}) {
    return (
        <div className='flex p-2'>
            {
            todo.isEdit
            ?
            <span className='flex w-full py-1 bg-zinc-700  rounded-xl p-3'>
                <div className={`${todo.isCompleted? ' bg-pink-400': ''} text-gray-900 border-2 rounded-xl border-pink-400 mr-1 h-6 w-6`}>
                    {todo.isCompleted && <BsCheck2 size = {24}/>} 
                </div>            
                
                <span> 
                    <input value={todo.title} 
                    onKeyDown={e => e.key === 'Enter' && editTodo(todo.id)}
                    onChange={e => editTodoChange(todo.id, e)}
                    className=' rounded-md bg-zinc-600 w-full' />
                </span>
                
            </span>
            :
            <button onClick={() => selectTodo(todo.id)} className='flex w-full py-1 bg-zinc-700  rounded-xl p-3'>
                <div className={`${todo.isCompleted? ' bg-pink-400': ''} text-gray-900 border-2 rounded-xl border-pink-400 mr-1 h-6 w-6`}>
                    {todo.isCompleted && <BsCheck2 size = {24}/>} 
                </div>            
                {todo.isCompleted ? <div className='line-through'>
                    {todo.title}
                </div> : todo.title}
            </button>
            }
            {
            todo.isEdit
            ?
            <button onClick={() => editTodo(todo.id)} className=' w-1/12 ml-2'>
                <div className=' w-full h-full bg-green-600 hover:bg-green-800 rounded-xl flex items-center justify-center'>
                    <BsCheckAll size={28}/>
                </div>
            </button>
            :
            <span className=' w-1/6 ml-2 flex'>
            <button onClick={() => editTodo(todo.id)} className=' flex-1'>
                <div className=' w-full h-full bg-orange-600 hover:bg-orange-800 rounded-xl flex items-center justify-center'>
                    <BsPencilFill/>
                </div>
            </button>
            <button onClick={() => removeTodo(todo.id)} className=' flex-1 ml-2'>
                <div className=' w-full h-full bg-red-600 hover:bg-red-800 rounded-xl flex items-center justify-center'>
                    <BsTrashFill/>
                </div>
            </button>
            </span>
            }
        </div>
    )   
    
}

export default TodoComponent;