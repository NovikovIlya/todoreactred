import React from 'react'
import TodoItem from './item/Todoitem'
import CreateTodoField from './create-todo-filed/CreateTodoField';

const data = [
    // {   
    //     _id: 'aed',
    //     title: 'Finish the essay colloboration',
    //     isCompleted: false,
    // },
    // {
    //     _id: 'zxc',
    //     title: 'Read next chapter of the book',
    //     isCompleted: false,
    // },
    // {
    //     _id: 'asdl',
    //     title: 'Send the finished assigned',
    //     isCompleted: false,
    // },
];



const Home = () =>{
    const [todos, setTodos] = React.useState(data)

    function changeTodo(id) {
        const copy = [...todos]
        const current = copy.find(t => 
            t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => setTodos([...todos].filter(t => 
        t._id != id))

    


    console.log(todos)


    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className='text-2xl  font-bold text-center mb-10'>Todo for junior</h1>
            {
                todos.map((todo) => (
                    <TodoItem key={todo._id} todo = {todo} changeTodo={changeTodo} removeTodo={removeTodo}  />
                ))
            }

            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home