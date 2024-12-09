import Item from "./Item";

const FoodItems = ({items}) => {
  // let foodItems = ["Roti","Dal","Rice","Vegetables","Curd","Ghee","Milk"];

  return ( 
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem = {item} handleBuyButton={()=>console.log(`${item} is bought`)}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
