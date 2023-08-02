'use client';

import { BounceLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <BounceLoader
        size={100}
        color="orange"
      />
      
    </div>
   );
}
 
export default Loader;