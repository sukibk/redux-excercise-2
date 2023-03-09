import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../../store/counter";

const Cart = (props) => {
    const items = useSelector(state => state.counter.items)
    const itemDispatcher = useDispatch();

    const addItemHandler = (item) =>{
        itemDispatcher(counterActions.addItem({item: item}))
    }

    const removeItemHandler = (item) => {
        itemDispatcher(counterActions.removeItem({item: item}))
    }

    const itemsToDisplay = items.map(item => <CartItem key={item.id} item={{id: item.id ,title: item.name,
    quantity: item.totalAmount, total: item.totalAmount * item.price,
    price: item.price}} onAdd = {addItemHandler} onRemove={removeItemHandler} />)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {itemsToDisplay}
      </ul>
    </Card>
  );
};

export default Cart;
