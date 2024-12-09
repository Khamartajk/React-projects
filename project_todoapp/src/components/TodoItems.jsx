import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {

  return(
    <>
      <div className="container text-center">

        {todoItems.map((item)=> <TodoItem todoName ={item.name} todoDate = {item.dueDate}></TodoItem> )}
             
      </div>   

    </>
  )
}

export default TodoItems;