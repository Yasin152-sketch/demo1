// const User = ({data}) =>{
//     return(
//         <div>
//             <h1>ID : {data.id}</h1>
//             <h1>Name : {data.name}</h1>
//             <h1>Age: {data.age}</h1>
//             <h1>Email  : {data.email}</h1>
//         </div>
//     )
// }

// import Class from "./Class";

// import Remote from "./data";
// import Farhan from "./data";

// export default User;

// const User = ({data}) =>{
//     return(
//         <div style={{border: "1px solid black",
//             padding:"10px",
//             borderRadius:"5px",
//             margin:"10px",
//         }}>
//             <h1>what is your name?</h1>
//             <h1>Name : {data.name}</h1>
//         </div>
//     )
// }

// export default User;

// const Clock = ({data}) => {
//   const [time, setTime] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);
//   });
//   return (
//     <div>
//       <h1>I set right time from system!</h1>
//       <hr></hr>
//       <h1 style={{color:data, padding: "10px", border: "2px solid black",borderRadius:"20px",width:"400px",alignItems:"center",position:"relative",left:"120px" }}>{time}</h1>
//     </div>
//   );
// };

// export default Clock;

// const Timer = ({data}) => {
//   const [time, settime] = useState(0);
//   useEffect(() =>{
//     setInterval(() =>{
//         settime(new Date().toLocaleTimeString())
//     },1000)
//   })
//   return (
//     <div>
//       <h1>what is your name?</h1>
//       <hr></hr>
//       <h1
//       style={{color:data,border:"2px solid black",borderRadius:"15px",width:"300px",padding:"20px",position:"relative",left:"60px"}}>{time}</h1>
//     </div>
//   );
// };

// export default Timer;

// const College = ({ college }) => {
//   return (
//     <div
//     style={{background:"#ccc",
//       padding:"20px",
//       borderBottom:"5px solid black",
//       margin:"20px",
//       borderRadius:"20px"
//     }}>
//       <h1>Name : {college.name}</h1>
//       <ul>
//         <li>
//           <h3>City : {college.city}</h3>
//         </li>
//         <li>
//           <h3>Fees : {college.fees}</h3>
//         </li>
//         <li>
//           <h2>Studetns Name :</h2>
//           {
//             college.student.map((student)=>{
//               return(
//                <ul>
//                 <li>Name : {student.name}</li>
//                </ul>
//               )
//             })
//           }
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default College;

// const Classmates = ({ data }) => {
//   return (
//     <div
//       style={{
//         padding: "15px",
//         margin: "20px",
//         background: "#ccc",
//         borderRadius: "20px",
//         borderBottom: "5px solid black",
//       }}
//     >
//       <h2>I will see you soon!</h2>
//       <h1>Name : {data.name}</h1>
//       <h1>City : {data.city}</h1>
//       <h1>Fees : {data.fees}</h1>
//       <h3>Students : </h3>
//       {data.student.map((cars) => {
//         return <Remote mouse={cars} />;
//       })}
//     </div>
//   );
// };

// export default Classmates;

// const Lock = ({Mon}) =>{
//   return(
//     <div style={{
//       padding:"20px",
//       border:"2px solid black",
//       borderRadius:"20px",
//       backgroundColor:"#ccc"
//     }}>
//       <h2>I will see soon today!</h2>
//      <h1>Name : {Mon.name}</h1>
//      <h1>City : {Mon.city}</h1>
//      <h1>Fees : {Mon.fees}</h1>
//      <h2>Students!</h2>
//      {
//       Mon.student.map((cars) =>{
//         return(
//          <Farhan Job={cars} />
//         )
//       })
//      }
//     </div>
//   )
// }

// export default Lock;

// function DisplayUser({form}) {
//     return(
//         <div>
//         <h2>Display! : {form}</h2>
//         </div>
//     )
// }

// // export default DisplayUser;
// import { useState } from "react";
// const useToggle = (defaultval) =>{
//     const[value,setValue] = useState(defaultval);
//     function toggleValue(val){
//         if(typeof val !='boolean'){
//             console.log("if")
//             setValue(!value);
//         }else{
//             console.log("farhan")
//             setValue(val)
//         }
//     }
//     return [value,toggleValue]
// }

// export default useToggle;

// import { useState } from "react";
// const usetoggle = (defaultval) =>{
//     const[value,setvalue] = useState(defaultval);
//     function toggleValue (val) {
//         if(typeof val != 'boolean'){
//             console.log("if");
//             setvalue(!value);
//         }else{
//             console.log("else");
//             setvalue(val)
//         }
//     }

//     return[value,toggleValue]
// }

// export default usetoggle;

// import { useState } from "react";
// const usetoggle = (defaultValue) =>{
//     const [value,setvalue] = useState(defaultValue)
//     function togglevalue (val) {
//         if(typeof val != "boolean"){
//             console.log("if");
//             setvalue(!value)
//         }
//         else{
//             console.log("else");
//             setvalue(val)
//         }
//     }
//     return[value,togglevalue]
// }

// export default usetoggle;

// export default function College() {
//   return (
//     <div style={{ backgroundColor: "yellow", padding: "20px" }}>
//       <h1>College component!</h1>
//       <Class/>
//     </div>
//   );
// }
// import Class from "./Class"
// export default function College() {
//   return (
//     <div>
//       <h1>College Componenet</h1>
//       <Class/>
//     </div>
//   );
// }

// import { useState } from "react";
// const usetoggle = (defalutlval) =>{
//   const [value,setvalue] = useState(defalutlval);
//   function togglevalue(val){
//     if(typeof val != 'boolean'){
//       console.log("if");
//       setvalue(!val)
//     }
//     else{
//         console.log("else");
//         setvalue(val)
//     }
//   }
//   return[value,togglevalue]
// }

// export default usetoggle;
// import { useState } from "react"
// const usetoggle = ((defaultVal) =>{
//     const [value,setvalue] = useState(defaultVal);
//     function togglevalue(val) {
//         if(typeof val !== "boolean"){
//             console.log("value not boolean");
//             setvalue(!value)
//         }
//         else{
//             console.log("this is boolean!");
//             setvalue(val)
//         }
//     }

//     return[value,togglevalue];
// })

// export default usetoggle;
// app/actions.js

// import { useState } from "react";
// const useToggle = (defaultval) =>{
// const [value,setvalue] = useState(defaultval);
// function toggleval (val){
//     if(typeof val === "boolean"){
//         setvalue(val)
//     }
//     else{
//         setvalue(!value)
//     }
// }
// return[value,toggleval];
// }
// export default useToggle;

// import { useState } from "react";
// function useToggle(defaultval){
// const [value,setvalue] = useState(defaultval)
// const toggleval = (val) =>{
//   if(typeof val ==="boolean"){
//     setvalue(val)
//   }
//   else{
//     setvalue(!value)
//   }
// }
// return[value,toggleval];
// }

// export default useToggle
// import Student from "./Userdetails";
// import styled from "styled-components";
// const Mybtn = styled.h1({
//   padding: "10px",
//   backgroundColor: "yellow",
//   color: "black",
// });
// function College() {
//   return (
//     <>
//       <Mybtn>College Components!</Mybtn>
//       <Student/>
//     </>
//   );
// }

// export default College;

// import { Link } from "react-router-dom";
// import "../src/css/header.css";
// function Navbar() {
//   return (
//     <div className="header">
//       <div>
//         <Link className="link" to="/">
//           Logo
//         </Link>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <Link className="link" to="/">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to="/about">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link className="link" to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import "../src/css/header.css";
// function Navbar() {
//   return (
//     <div>
//       <div className="header">
//         <Link className="links">
//           Logo!
//         </Link>
//         <div>
//           <ul>
//             <li>
//               <Link className="link" to="/">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link className="link" to="/about">
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link className="link" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link className="link" to="/College">
//                 College
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
