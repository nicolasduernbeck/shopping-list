export default function Item({ name, price, id, onAddToCart }) {
  return (
    <div className="box">
      <h1>{name}</h1>
      <h2>{price}$</h2>
      <button onClick={() => onAddToCart(id)}>Add</button>
    </div>
  );
}
