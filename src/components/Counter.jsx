import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/features/counter/counterSlice";

const Counter = () => {

    const {count} = useSelector((state) => state.counter)
    // console.log(count)
    const dispatch = useDispatch();

    return (
        <div>
            <button className="btn bg-teal-500 p-2 text-white my-5"  onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <button className="btn bg-teal-500 p-2 text-white"   onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <div>
                <h1 className="font-bold text-6xl">{count}</h1>
            </div>
            <button className="btn bg-red-500 p-2 text-white"  onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;