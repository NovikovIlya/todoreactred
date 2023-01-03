import React from 'react'
import { useState } from 'react'



function CreateTodoField({setTodos}){
    function addTodo(title) {
        setTodos(prev =>[
            {
            _id: new Date(),
            title,
            isCompleted: false,
            },...prev
        ])
        setTitle('')
        
    }

    const [title, setTitle] = useState('')
    console.log(title)
    return (
        <>
            <button onClick={()=>addTodo(title)}>Добавить</button>
            
            <div className='mt-9 flex items-center mb-4 rounded-2xl border-zinc-800 border-2 w-100 justify-between'>
                <input 
                    type="text" 
                    onChange={event=> setTitle(event.target.value)}  
                    value={title}
                    onKeyPress={event=> event.key === 'Enter' && addTodo(title)}
                    placeholder='Add task'
                    className='bg-transparent w-full border-none outline-none p-2 '
                    />
            </div>
        </>
    )
}

export default CreateTodoField