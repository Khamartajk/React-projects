import "bootstrap/dist/css/bootstrap.min.css"
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";


const App = () => {
  const todoItems =[
    {
      name: "Buy Milk",
      dueDate: "28/08/2023",
    },

    {
      name: "Go to market",
      dueDate: "29/08/2023",
    },

    {
      name: "Go to college",
      dueDate: "30/08/2023",
    },

    {
      name: "Go to Bangalore",
      dueDate: "10/09/2023",
    },
];

  return (
    <>
      <div class="container text-center">
         <AppName></AppName>
         <AddTodo></AddTodo>
         <TodoItems todoItems={todoItems}></TodoItems>
      </div>
    </>
  );
};

export default App;
