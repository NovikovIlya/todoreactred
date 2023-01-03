import React from 'react'
import Check from './Check'
import cn from 'classnames'
import { BsTrash } from 'react-icons/bs'

function TodoItem({ todo, changeTodo, removeTodo }) {
    return (
        <div 
            className='flex items-center mb-4 rounded-2xl bg-zinc-800 w-100 justify-between'
            >
            
                <button onClick={() => changeTodo(todo._id)} className='flex items-center w-96'>
                    <Check isCompleted={todo.isCompleted}/>
                    <span className={cn({
                        'line-through': todo.isCompleted,
                    })}>{todo.title}
                    </span>
                </button>

                <button onClick={() => removeTodo(todo._id)}>
                    <BsTrash size={22} className='text-gray-600 mr-3  hover:text-red-700'/>
                </button>
        </div>
    )
}

export default TodoItem