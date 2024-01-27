import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import FoodItems from './cards/FoodItems';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
      dispatch(clearCart())
    }
  return (
    <div>
     <h1 className='font-bold text-3xl'>Cart items {cartItems.length}</h1>
      <button className='bg-green-100 p-2 m-5' onClick={()=> handleClearCart()}>Clear Cart</button>
      <div className='flex flex-wrap'>
        {cartItems.map((item)=>(<FoodItems key={item?.card?.info.id} {...item?.card?.info}/>))}
      </div>
      
    </div>
  )
}

export default Cart
