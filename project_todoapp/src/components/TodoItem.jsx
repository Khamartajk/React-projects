const TodoItem = ({todoName,todoDate }) => {
   // let = " Buy Milk";
   // let  = "28/08/2023"

   return(
      <>
       <div className="container text-center">
          <div className="row">
              <div className="col-6">
                 {todoName}
              </div>
              <div className="col-4">
                 {todoDate}
              </div>
              <div className="col-2">
              <button type="button" className="btn btn-danger">Add</button>
              </div>        
        </div><br/>
       </div>
      
      </>
   )

}

export default TodoItem;