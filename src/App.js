
import './App.css';
import React, {useState} from "react";
import Todo from './components/Todo';
import Button from '@material-ui/core/Button';
import { FormControl, Input, } from '@material-ui/core';




function App()  {
    const [todos, SetTodos] = useState([]);
    const [input, SetInput] = useState('');
    // const [remove, SetRemove] =useState('');
   

    // const itemEvent = (event) => {
    //     SetInput(event.target.value);
    // };
const addTodo = (event)=> {
 event.preventDefault();
  SetTodos([...todos, input]);
  SetInput ('');
};

// const deleteTodo = (index)  => {
//     let newTodos = todos
//     newTodos.splice(index,1);
//     SetnewTodos([...newTodos]);
//     ;
// };

    return (  
          <div className="container">
                <div>
                 <h1> ToDo List</h1>
                <form>
                    {/* <input value ={input}  placeholder="Add a Items" onChange={event => SetInput(event.target.value)}/> */}
             
                    <FormControl>
                        <Input  value ={input}  placeholder="Add a Items" onChange={event => SetInput(event.target.value)}/>
                    </FormControl>
                   
                    <Button disabled = {!input} type="submit" onClick={addTodo} variant="contained" color="Add Todo">
                    Add Todo 
                    </Button>
                    {/* <button type="submit" onClick={addTodo}> Add Todo </button> */}
                </form>

                {/* <div className="del-button" onClick={()=>deleteTodo(index)}>Delete </div> */}
                <ul>
                    {todos.map((todo, index)  => (
                     <Todo text={todo}/>
                    // <li>{todo}</li>
                    ))}
                </ul>
                </div>
       </div>
);
};



export default App; 