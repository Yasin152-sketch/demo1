// function funcall() {
//   confirm("are you fine?");
// }


// function ToDo() {
//   function funcall() {
//     confirm("are you fine?");
//   }
//   const fruits = (name) => {
//     alert(name);
//   };
//   return (
//     <div>
//       <h1>My name is yasin shaikh!</h1>

//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwlW8hzdeva_raVQXSeNtvFZFGkb2ob8XHg&s"
//         alt="cars images"
//       />

//       <ul>
//         <li>My name is yasin shaikh</li>
//         <li>What is your name?</li>
//         <li>Where are you living?</li>
//       </ul>
//       <button onClick={() => fruits("apple")}>Apple!</button>
//       <button onClick={() => fruits("banana")}>Banana!</button>
//       <button onClick={funcall}>Click me!</button>
//     </div>
//   );
// }

// export default ToDo;

// import { useState } from "react";

// function Counter(){
//   const [Counter,setCounter] =  useState(0);
//   const [ReverseCounter,setReverseCounter] = useState(10);

//   return(
//     <div>
//       <h1>Count : {Counter}</h1>
//       <button onClick={() => setCounter (Counter + 1)}>Increase!</button>
//       <h1>Reverse : {ReverseCounter}</h1>
//       <button onClick={() => setReverseCounter (ReverseCounter - 1)}>Descreae!</button>
//     </div>
//   )
// }

// export default Counter;

// import { useState } from "react";

// function Toggle() {
//   const [display, setDisplay] = useState(true);

//   return (
//     <div>
//       <h1>Toggle in React js</h1>
//       <button onClick={()=>setDisplay(! display)}>Toggle</button>

//       {
//         display?<h1>Toggle in React js</h1>:null
//       }
//     </div>
//   );
// }

// export default Toggle

// import { useState } from "react";

// function mulCondition() {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h1>Multiple toggle case in react js</h1>
//       <button onClick={() => setCounter(counter + 1)}>Counter</button>

// {counter == 0 ? (
//   <h1>Condition 0</h1>
// ) : counter == 1 ? (
//   <h1>Condition 1</h1>
// ) : counter == 2 ? (
//   <h1>Condition 2</h1>
// ) : counter == 3 ? (
//   <h1>Condition 3</h1>
// ) : (
//   <h2>No more Condition</h2>
// )}
//     </div>
//   );
// }
// export default mulCondition;

// export function User({ name }) {
//   return (
//     <div>
//       <h1>hello user!</h1>
//       <h2>{name.address}</h2>
//     </div>
//   );
// }

// export function College({ book }) {
//   return (
//     <div>
//       <h1>this is college!</h1>
//       <h1>{book}</h1>
//     </div>
//   );
// }

// export function Student({ name }) {
//   return (
//     <div>
//       <hr />
//       <h1>Student Name :{name} </h1>
//     </div>
//   );
// }

// export function User({ name = "nasrin" }) {
//   return (
//     <div>
//       <h1>Name : {name}</h1>
//     </div>
//   );
// }

// export function Wrapper({children,color="blue"}) {
//   return (
//     <div style={{color:color,border:"2px solid red",margin:"45px"}}>
//       {children}
//     </div>
//   );
// }

// export function InputValue(){
//   const [val,setVal] = useState("yasin shaikh!")
//   return(
//     <div>
//       <h1>Get input field value</h1>
//       <input type="text" onChange={(event)=>setVal(event.target.value)} placeholder="Enter your name?"style={{padding:"10px"}}/>
//       <h1>{val}</h1>
//     </div>
//   )
// }

// export function InputValue() {
//   const [Val, setval] = useState("farhan shaikh");
//   return (
//     <div>
//       <h1>get info inside from input field!</h1>
//       <input
//         type="text"
//         value={Val}
//         onChange={(event) => setval(event.target.value)}
//         placeholder="Enter your name"
//         style={{ padding: "10px" }}
//       />
//       <h1>{Val}</h1>
//       <button onClick={() => setval("")}>Clear value</button>
//     </div>
//   );
// }

// export function Controlcompo() {
//   const [name, Setname] = useState("yasin");
//   const [password, Setpassword] = useState("");
//   const [Email, SetEmail] = useState("");
//   return (
//     <div>
//       <h1>Controlled component!</h1>
//       <form action="" method="get">
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => Setname(event.target.value)}
//           placeholder="Enter your name?"
//           style={{ padding: "10px", margin: "10px" }}
//         />
//         <br></br>
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => Setpassword(event.target.value)}
//           placeholder="Enter your password!"
//           style={{ padding: "10px", margin: "10px" }}
//         />
//         <br></br>
//         <input
//           type="Email"
//           value={Email}
//           onChange={(event) => SetEmail(event.target.value)}
//           placeholder="Enter your email?"
//           style={{ padding: "10px", margin: "10px" }}
//         />
//         <br></br>
//         <button>Submit!</button>
//         <br></br>
//         <br></br>
//         <button
//           onClick={() => {
//             Setname("");
//             SetEmail("");
//             Setpassword("");
//           }}
//         >
//           Clear All!
//         </button>
//         <h2>{name}</h2>
//         <h2>{password}</h2>
//         <h2>{Email}</h2>
//       </form>
//     </div>
//   );
// }


