import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

const App = () => {
  
  //  let foodItems = ["Paratha","Dal","Rice","Vegetables","Curd","Ghee","Milk"];


  let [foodItems,setFoodItems] = useState(["Paratha","Dal","Rice","Vegetables"])  

  let [textToShow,setTextState] = useState("Food Item Entered by User");
  
  console.log(`Current value of textState:${textToShow}`)


  const onKeyDown =(event) =>{
    if (event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
    console.log(event.target.value);
    setTextState(event.target.value);
  }

  return (
    <>
     <Container>
        <h1 className="food-heading">Healthy Food List </h1>
        {/* {errorMessage} */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>
     
    </>
  );
};

export default App;
