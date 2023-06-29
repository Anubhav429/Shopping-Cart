import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex mx-auto">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="relative">         

        <div className="fixed top-[10rem] right-[28rem]">
          <div className="text-green-600 font-semibold">Your Cart</div>
          <div className="text-green-600 font-bold text-3xl">Summary</div>
          <p className="mt-4">
            <span className="font-semibold ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="fixed bottom-[5.5rem] right-[15rem]">
          <p className="font-semibold  ">Total Amount:  ${ totalAmount}</p>
          <button className="rounded-md  bg-green-600 text-white font-semibold hover:bg-lime-400 mt-2 px-32 py-3 ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col  justify-center items-center h-[89vh] ">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button className="rounded-md px-10 py-2 bg-green-600 text-white font-semibold hover:bg-lime-400 mt-2 ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
