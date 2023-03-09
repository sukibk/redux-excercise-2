import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../../store/counter";

const MainHeader = (props) => {
    const items = useSelector(state => state.counter.items);
    const dispatchTogle = useDispatch();

    const totalItems = items.reduce((curVal, item) =>  curVal + item.totalAmount, 0)

    const toggleCartHandler = () => {
        dispatchTogle(counterActions.toggleIsShown())
    }

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton value={totalItems} onClick={toggleCartHandler}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
