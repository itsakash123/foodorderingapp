
import { useEffect, useState } from "react";
const User=(props)=>{
    const[count]=useState(0);
    const [count2] = useState(1);
    useEffect(()=>{
      //Api calls
    })
    
    return (
      <div className="user-card">
        <h1>Count={count}</h1> 
        <h1>Count2={count2}</h1>

        <h2>{props.name}</h2>
        <h3>Location:Bareilly</h3>
        <h4>Contact:@akashkumar</h4>
      </div>
    );
}
export default User;