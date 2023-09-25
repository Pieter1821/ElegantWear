const CardItem = ({ cardItem }) => {
  const { name, quantity } = cardItem;
  return (
    <div>
      <h2> {name} </h2>
      <span>{quantity} available</span>
    </div>
  );
};

export default CardItem;
