import img from "../assets/img/react.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Title = () =>{
  return(
    <div>
      <a href="/">
        <img data-testid="logo" className="h-28 p-2" 
        src={img} alt="logo"></img>
      </a>
    </div>
  )
}
const Header = () => {

  const cartItems = useSelector(store => store.cart.items)
  return (
    <div  className="flex justify justify-between bg-white text-black shadow-lg">
  <Title/>
  <div className="nav-item">
          <ul className="flex py-10 ">
            <Link to={"/"}><li className="px-2">Home </li>    </Link>            
            <Link to={"/about"}><li className="px-2">About</li></Link>
            <Link to={"/contact"}><li className="px-2">Contact</li></Link>
            <Link to={"/cart"}><li data-testid="cart"className="px-2">Cart- {cartItems.length} item</li></Link>
            <Link to={"/instamart"}><li className="px-2">Instamart</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Header
