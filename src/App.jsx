import AppName from "./components/AppName";
import AddTodo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItems=
  //   [
  //     {
  //       name:"Buy Milk",
  //       dueDate:'4/10/23'
  //     },
  //      {
  //       name:"Go to College",
  //       dueDate:'4/10/23'
  //     },
  //      {
  //       name:"Like this Video",
  //       dueDate:'Right Now'
  //     },
  //     {
  //       name:"Visit Tamhini with Praj",
  //       dueDate:'Next month'
  //     }

  //   ];

  const [todoItems, setTodoItems]=useState([]);

  const handleNewItem=(itemName, itemDueDate)=>{
    console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
  
    setTodoItems((currentValue)=> 
        [...currentValue,
        {name:itemName,
        dueDate:itemDueDate}
      ]);
  };

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);    
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 &&  <WelcomeMessage></WelcomeMessage> }
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
