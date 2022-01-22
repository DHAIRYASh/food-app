import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContent from '../../../store/cart-content';
const MealItem = (props) => {
  const cartCtx = useContext(CartContent);
  const price = `Rs ${props.price}`;
  const addToCartHandler = amount =>{

cartCtx.addItem({
    id:props.id,
    name:props.name,
    amount:amount,
    price:props.price
});
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
