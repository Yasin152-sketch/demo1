// function Login() {
//   return <h1>I am login on there!</h1>;
// }

import { useState } from "react";

// export function Profile() {
//   return (
//     <div>
//       <h1>I will provide your profiel!</h1>
//     </div>
//   );
// }

// export function Setting() {
//   return (
//     <div>
//       <h1>I have setting in phone!</h1>
//     </div>
//   );
// }

// export const Userkey = "!@#$^&*()_+";
// export default Login;


// function Counter(){
//   const [Counter,setCounter] =  useState(0);
//   return(
//     <div>
//       <h1>Counter : {Counter}</h1>
//       <button onClick={()=>setCounter(Counter+1)}>Click me!</button>
//     </div>
//   )
// }

// export default Counter;

// export function Toggle(){
//   const [Display,setDisplay] =  useState(true)
//   return(
//     <div>
//       <h1>Toggle feature in react app!</h1>
//       <button onClick={() =>setDisplay(!Display)}>Toggle me!</button>

//       {
//         Display?null:<h1>Toggle feature in react app!</h1>
//       }
//     </div>
//   )
// }

// import { useState } from "react";


export function MulCondition(){
  const [counter,setCounter] = useState(0);
  return(
    <div>
      <h1>React mulCondition case!</h1>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button> 


      {
        counter == 0?(
          <h2>Condition 0</h2>
        ): counter == 1?(
          <h2>Condition 1</h2>
        ): counter == 2?(
          <h2>Condition 2</h2>
        ) : <h2>your program is terminated!</h2>
      }
    </div>
  )
}
