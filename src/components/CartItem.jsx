
import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div>

      <div className="flex gap-3 mx-52 mt-8">

        <div className="h-[180px] w-[140px] ">
          <img src={item.image} className="h-full w-full"/>
        </div>
        <div className="flex flex-col gap-4 w-[23rem] ml-6">
          <h1 className="font-bold text-lg opacity-80">{item.title}</h1>
          <h1 className="opacity-75">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className="flex justify-evenly">
            <p className="text-green-600 font-semibold items-center w-full mt-4">${item.price}</p>
            <div
            className="h-[35px] w-[40px] rounded-full grid place-items-center bg-red-300 cursor-pointer mt-3"                                                                                                                                        
            onClick={removeFromCart}>
              <MdDelete />                                                            
            </div>
          </div>
         

        </div>


      </div>
      <div className="w-[600px] h-[1px] bg-black mx-56 mt-4"></div>

    </div>
  );
};

export default CartItem;
