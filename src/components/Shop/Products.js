import ProductItem from './ProductItem';
import classes from './Products.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../../store/counter";

const Products = (props) => {
    const dispatchAddItem = useDispatch();
    const items = useSelector(state => state.counter.items)

    const addItemHandler = (item) => {
        dispatchAddItem(counterActions.addItem({item: item}))
    }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
            id = {1}
          title='Test'
          price={6}
          onClick={addItemHandler}
          description='This is a first product - amazing!'
        />
          <ProductItem
              id={2}
              title='Test2'
              price={8}
              onClick={addItemHandler}
              description='This is a second product - amazing!'
          />
      </ul>
    </section>
  );
};

export default Products;
