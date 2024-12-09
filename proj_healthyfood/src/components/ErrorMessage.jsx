const ErrorMessage = ({items}) => {
  // let foodItems = ["Roti", "Dal", "Rice", "Vegetables", "Curd", "Ghee", "Milk"];

  return <>{items.length === 0 && <h3>I am Still Hungry</h3>}</>;
};

export default ErrorMessage;
