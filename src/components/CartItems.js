import "./CartItems.css";
const CartItems = ({ title, price, quantity }) => {
  return (
    <div className="rectangle-parent">
      <div className="group-child" />
      <span className="span">{quantity}</span>
      <span className="nike-mens-joyride">{title}</span>
      <span className="run-flyknit-shoes">Run Flyknit shoes</span>
      <img className="group-item" alt="" src="/group-4.svg" />
      <span className="span1">{price}</span>
      <img className="group-inner" alt="" src="/rectangle-17@2x.png" />
      <button className="ellipse-parent">
        <div className="ellipse-div" />
        <img className="component-1-icon" alt="" src="/component-1.svg" />
      </button>
    </div>
  );
};

export default CartItems;
