import "./OrderAmount.css";
const OrderAmount = ({ total, totalAmount }) => {
  return (
    <div className="rectangle-group">
      <div className="group-child1" />
      <div className="order-summary">Order Summary</div>
      <span className="order">Order</span>
      <span className="span2">{total}</span>
      <span className="span3">$6</span>
      <span className="span4">{totalAmount}</span>
      <span className="delivery">Delivery</span>
      <span className="total">Total</span>
      <img className="group-child2" alt="" src="/line-5@2x.png" />
    </div>
  );
};

export default OrderAmount;
