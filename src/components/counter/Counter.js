import { useState } from "react";

const Counter=()=>{
    const [num,setNum]=useState(0);
    return(
        <div className="flex min-h-96 justify-center items-center">
            <button className="bg-green-500 px-8 py-2 rounded-l-xl font-bold text-4xl" onClick={()=>setNum(prev=>prev+1)}>+</button>
            <h1 className="bg-slate-400 px-8 py-2  font-bold text-4xl">{num}</h1>
            <button className="bg-red-500 px-8 py-2 rounded-r-xl font-bold text-4xl" onClick={()=>setNum(prev=>prev-1)}>-</button>
        </div>
    );
}
export default Counter;