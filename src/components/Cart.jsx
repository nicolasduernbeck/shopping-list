export default function Cart({ items }) {
  const totalPrice = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  return (
    <div className="cart">
      <h1>Total Price: $ {totalPrice.toFixed(2)}</h1>
    </div>
  );
}
