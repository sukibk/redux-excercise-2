import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";

function App() {
    const isShown = useSelector(store => store.counter.isShown)

  return (
    <Layout>
        {isShown && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
