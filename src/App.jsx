// // import Login,{Profile,Setting,Userkey} from "./UserComponent";
// // function App(){
// //     return(
// //     <div>
// //         <Setting/>
// //         <Profile/>
// //         <Login/>
// //         <h1>{Userkey}</h1>
// //     </div>
// //   )
// // // }
// // import Books from "./Todo";
// // import Counter,{MulCondition} from "./UserComponent";

import { Input } from "postcss";

// import { useState } from "react";
// import College from "./User";
// import Subject from "./subject"; `
// import { SubjectContext } from "./data";

// import { useRef } from "react";
// import Photo from "./data";

// import { useEffect, useState } from "react";
// // import College from "./User";
// // import Classmates from "./User";

// // import LoopCon from "./Checkboxes";

// // import LoopCon from "./Checkboxes";

// // import { loadConfigFromFile } from "vite";

// // import { renderToPipeableStream } from "react-dom/server";
// // import { useState } from "react";
// // import Counter, { Controlcompo, InputValue, Student, Wrapper } from "./Todo";
// // import Toggle from "./Todo";
// // import mulCondition, { User, College } from "./Todo";

// // function Apple(){
// //     return(
// //     <h1>This is apple</h1>
// //     )
// // }

// // function Colors(){
// //     return(
// //      <h1>This is a Colors</h1>
// //     )
// // }

// // function sum(a,b){
// //    return a + b;
// // }

// // export default Greet;

// // function App() {
// // const name = "yasin";
// // function fruits() {
// //   console.log("banana")
// // }

// // let userArr = ["farhan", "shabbir", "nasrin"];
// // const UserInfo = {
// //   name: "yasin",
// //   age: 20,
// //   school: "the new age high school",
// // };

// // let [fruits, setFruits] = useState("Apple");
// // // function opeartion(a, b, op) {
// //   if (op == "+") {
// //     return a + b;
// //   } else if (op == "-") {
// //     return a - b;
// //   }
// //   else{
// //       return a*b;
// //   }
// // }

// // let handleFruits = (()=>{
// //   setFruits("chickoo")
// // })
// // let userObj = {
// //   name: "farhan",
// //   age: 18,
// //   email: "farhan@1920.com",
// //   address: "juhapura",
// // };

// // let collegeName = ["IIT", "MIT", "NIT", "DU", "SU"];
// // const [student,setStudent] = useState()
// // return (
// //   <div>
// //      <h1>State in React js</h1>
// //     <h3>{fruits}</h3>
// //     <button onClick={() => setFruits("Oranage!")}>change the fruits</button>
// //     <Toggle />
// //     <mulCondition />

// {
//   /*
//     // <div>
//     //   <ToDo />
//     //   <h2>{name}</h2>
//     //   <h3>{opeartion(20,30,"-")}</h3>
//     //   <h4>{fruits()}</h4>
//     //   <h3>{UserInfo.age}</h3>
//     // </div> */
// }
// {
//   /* <User name={userObj} /> */
// }
// {
//   /* <College book={collegeName[0]} />

//       {Student && <Student name={student}/>}
//       <button onClick={() =>setStudent("yasin")}>Update student name</button>
//       <h1>Props in react js</h1>
//        <User name="shabbir"/>
//       <User name="yasin"/>
//       <User/>
//       <Wrapper color="green"><h1>Hello everyone!</h1></Wrapper>
//       <Wrapper><h1>Hello everyone!</h1></Wrapper>
//       <Wrapper color="yellow"><h1>Hello everyone!</h1></Wrapper> */
// }

// //     <InputValue padding="20px">
// //     <input type="text" placeholder="Enter your value you want to do?"/>
// //     </InputValue>
// //     <Controlcompo/>
// //   </div>
// // );
// // }

// // let person = {
// //   age : "18",
// //   sch : "Shreyarth!"
// // };

// function App() {
//   const userName = ["yasin", "farhan", "nasrin", "shabbir"];
//   const userData = [
//     { name: "yasin", age: 18, email: "123@gmail.com", id: 1 },
//     { name: "farhan", age: 16, email: "950@gmail.com", id: 2 },
//     { name: "nasrin", age: 37, email: "789@gmail.com", id: 3 },
//     { name: "shabbir", age: 45, email: "741@gmail.com", id: 4 },
//   ];

//   return (
//     <div>
//       {userData.map((e) => {
//         return (
//           <div>
//             <User data={e} />
//           </div>
//         );
//       })}
//       {/* yahan apna code likho */}
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [color,setcolor] = useState('green')
//   return (
//     <div>
//       <h1>Hello world!</h1>
//       <select onChange={(event)=>setcolor(event.target.value)}
//         style={{padding:"10px",fontSize:"15px",borderRadius:"10px"}}>
//         <option value={"green"}>green</option>
//         <option value={"red"}>red</option>
//         <option value={"blue"}>blue</option>
//       </select>
//     </div>
//   );
// }
// export default App;
// // function App() {
// //   const [color, setcolor] = useState("green");
// //   return (
// //     <div>
// //       <select onChange={(event) => setcolor(event.target.value)}
// //         style={{padding:"10px",fontSize:"15px"}}>
// //         <option value={"green"}>green</option>
// //         <option value={"blue"}>blue</option>
// //         <option value={"red"}>red</option>
// //       </select>
// //       <Timer data={color} />
// //     </div>
// //   );
// // }

// function App() {
//   const collegeData = [
//     {
//       name: "iit Delhi",
//       city: "Delhi",
//       fees: 20000,
//       student: [
//         {
//           name: "yasin shaikh",
//           age: 20,
//           email: "www.mouse.com",
//         },
//       ],
//     },
//     {
//       name: "iit nagpur",
//       city: "nagpur",
//       fees: 45000,
//       student: [
//         {
//           name: "nasrin shaikh",
//           age: 35,
//           email: "www.speaker.com",
//         },
//       ],
//     },
//     {
//       name: "mumbai university",
//       city: "mumbai",
//       fees: 85000,
//       student: [
//         {
//           name: "shabbir shaikh",
//           age: 45,
//           email: "www.monitor.com",
//         },
//       ],
//     },
//     {
//       name: "nit chennai",
//       city: "chennai",
//       fees: 300000,
//       student: [
//         {
//           name: "farhan shaikh",
//           age: 30,
//           email: "www.keyboard.com",
//         },
//       ],
//     },
//   ];
//   return (
//     <div>
//       <h1>I will create a nested loops</h1>
//       {
//         collegeData.map((e)=>{
//           return(
//            <Classmates data={e}/>
//           )
//         })
//       }
//       {
//         collegeData.map((e)=>{
//           return(
//             <div>
//               <h2>hey, what up?</h2>
//               <Lock Mon ={e}/>
//             </div>
//           )
//         })
//       }
//     </div>
//   );
// }
// export default App;
// import { useEffect,useState } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [timer,settimer] = useState(0)
//   const [display,setdisplay] = useState(0)
//   useEffect(() => {
//     coutnerFunctioin();
//   },[]);

//   function coutnerFunctioin(){
//     console.log("coutnerFuntion",counter)
//   }
//   return (
//     <div>
//       <h1>hey</h1>
//       <button onClick={() => setCounter(counter + 1)}>
//         Click me! : {counter}
//       </button>
//       <button onClick={()=>settimer(timer+1)}>timer! : {timer}</button>
//       <button onClick={()=>setdisplay(display+1)}>display! : {display}</button>
//     </div>
//   );
// }

// export default App;
// import styled from "styled-components";
// import { useState, useEffect } from "react";
//  const Mybtn = styled.button({
//     padding:"50px",
//   });

// function App() {
//   const [Counter, setcounter] = useState(0);
//   const [timer, settimer] = useState(0);
//   const [display, setdispaly] = useState(false);

//   useEffect(() => {
//     Counterval();
//   },[Counter]);

//   function Counterval() {
//     console.log("this is run one  time!");
//   }

//   return (
//     <>
//       <h1>I will explain useeffect hook in react!</h1>
//       <Mybtn onClick={() => setcounter(Counter + 1)}>
//         Counter : {Counter}
//       </Mybtn>
//       <Mybtn onClick={() => settimer(timer + 1)}>Timer : {timer}</Mybtn>
//       <Mybtn onClick={() => setdispaly(!display)}>Display :{display? "display" :""}</Mybtn>
//     </>
//   );
// }
// export default App;
// import Counter from "./data";
// import { useState } from "react";
// function App() {
//   const [count, setcount] = useState(0);
//   const [time, settime] = useState(0);
//   const [display, setdisplay] = useState(true);
//   const [cardstyle, setcardstyle] = useState({
//     padding: "20px",
//     margin:"20px 135px",
//     border: "2px solid #ccc",
//     width: "570px",
//     borderRadius: "25px",
//     boxShadow: "1px 1px 5px 5px #ccc",
//   });

//   const updateTheme = (bgcolor, textcolor) => {
//     setcardstyle({ ...cardstyle, backgroundColor: bgcolor, color: textcolor });
//   };
//   const buttonstyle = {
//     margin: "20px",
//     borderRadius:"10px"
//   };

//   return (
//     <div style={cardstyle}>
//       <h1>yasin shaikh!</h1>
//       {display ? (
//         <img
//           src="https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"
//           style={{ borderRadius: "50px", marginTop: "10px"}}
//         ></img>
//       ) : null}

//       <button onClick={() => setcount(count + 1)} style={buttonstyle}>
//         Click me!{count}
//       </button>
//       <button onClick={() => settime(time + 1)} style={buttonstyle}>
//         timer me!{time}
//       </button>
//       <button onClick={() => setdisplay(!display)} style={buttonstyle}>
//         Toggle!
//       </button>
//       <button onClick={() => updateTheme("grey", "yellow")} style={buttonstyle}>
//         Theme!
//       </button>
//       <button onClick={() => updateTheme("white", "black")} style={buttonstyle}>
//         default!
//       </button>
//     </div>
//   );
// }
// export default App;
// import { useState } from "react";
// import styled from "styled-components";
// const Mybtn = styled.button({
//   padding:"10px",
//   margin:"25px",
//   borderRadius:"20px",
//   fontSize:"20px"
// })
// function App() {
//   const [timer, settimer] = useState(0);
//   const [count, setcount] = useState(0);
//   const [display, setdispaly] = useState(true);
//   const [Cardstyle,setcardstyle] = useState({
//     border:"0.85px solid black",
//     borderRadius:"25px",
//     width:"800px",
//     margin:"auto "
//   })
//   const update = (bgcolor,textcolor) =>{
//     setcardstyle({...Cardstyle,backgroundColor:bgcolor,color:textcolor})
//   }
//   return (
//     <>
//       <h1>I will create mini project in react!</h1>
//       <div style={Cardstyle}>
//         {display ? (
//           <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=%20&auto=format&fit=crop&w=1050&q=80" style={{width:"720px",borderRadius:"30px"}} />
//         ) : null}
//         <Mybtn onClick={() => settimer(timer + 1)}>Timer : {timer}</Mybtn>
//         <Mybtn onClick={() => setcount(count + 1)}>Timer : {count}</Mybtn>
//         <Mybtn onClick={() => setdispaly(!display)}>Display!</Mybtn>
//         <Mybtn onClick={() =>update("green","red")}>Update!</Mybtn>
//         <Mybtn onClick={() =>update("white","grey")}>Default!</Mybtn>
//       </div>
//     </>
//   );
// }
// export default App;
// import { useState } from "react";
// import styled from "styled-components";
// const Mybtn = styled.button({
//   margin:"10px",
//   padding:"10px",
//   borderRadius:"10px",
//   backgroundColor:"#fff6f6ff"
// })
// function App() {
//   const [counter, setcounter] = useState(0);
//   const [timer, settimer] = useState(0);
//   const [display, setdisplay] = useState(true);
//   const [cardstyle, setcardstyle] = useState({
//     height: "480px",
//     borderRadius: "25px",
//     margin: "10px 130px",
//     width: "80%",
//     backgroundColor:"#fff6f6ff",
//   });

//   const updateTheme = (bgcolor, textcolor) => {
//     setcardstyle({
//       ...cardstyle,
//       backgroundColor: bgcolor,
//       textColor: textcolor,
//     });
//   };
//   return (
//     <>
//       <h1>hello,yasin shaikh!</h1>
//       <div style={cardstyle}>
//         {display?      <img src="https://hips.hearstapps.com/hmg-prod/images/cat-captions-for-instagram-6595a058e956b.jpeg?crop=1xw:0.9571401657874906xh;0,0.00817xh" style={{borderRadius:"55px"}} />: null}
//         <Mybtn onClick={() => setcounter(counter + 1)}>
//           Counter : {counter}
//         </Mybtn>
//         <Mybtn onClick={() => settimer(timer + 1)}>Timer : {timer}</Mybtn>
//         <Mybtn onClick={() => setdisplay(!display)}>
//           Toggle : {display ? "Toggle" : ""}
//         </Mybtn>
//         <Mybtn onClick={() =>updateTheme("grey","red")}>Update</Mybtn>
//         <Mybtn onClick={() =>updateTheme("white","black")}>Default!</Mybtn>
//       </div>
//     </>
//   );
// }
// export default App;
// export default App;
// import { useState } from "react";
// function App(){
//     const [counter,setCounter] = useState(0)
//     const [timer,settimer] = useState(0)
//     const [display,setdisplay] = useState()
//     const [cardstyle,setcardstyle] = useState({
//         margin:"20px",
//         padding:"20px",
//         color:"black",
//         borderRadius:"20px",
//         width:"700px",
//         boxShadow:"1px 1px 4px 4px #ccc"
//     })
//     const update = (bgcolor,color) =>{
//     setcardstyle({...cardstyle,backgroundColor:bgcolor,textColor:color})
//     }
//     const buttonstyle = {
//         margin:"10px",
//         borderRadius:'15px'
//     }
//     return(
//         <div style={cardstyle}>
//             <h1 style={{fontSize:"30px"}}>yasin shaikh!</h1>
//             {
//                 display?<img src="https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"style={{borderRadius:"15px",margin:"20px",color:"white"}}alt="cat imgaes"/>:null
//             }
//             <button onClick={()=>setCounter(counter+1)} style={buttonstyle}>Click me!{counter}</button>
//             <button onClick={()=>settimer(timer+1)} style={buttonstyle}>timer!{timer}</button>
//             <button onClick={()=>setdisplay(!display)} style={buttonstyle}>Toggle!</button>
//             <button onClick={()=>update("red","black")} style={buttonstyle}>Theme!</button>
//             <button onClick={()=>update("white","black")} style={buttonstyle}>default!</button>
//         </div>
//     )
// }

// export default App;
// import Userprofile from "./data"
// import styled from "styled-components";
// function App(){
//   const Cars = styled.h1({
//     border:"2px solid black",
//     borderRadius:"20px",
//     padding:"20px"
//   })
//   return(
//     <div>
//       <Cars>Hello world</Cars>
//       <Userprofile/>
//     </div>
//   )
// }

// export default App;
// import {Button} from "react-bootstrap";
// import { Alert } from "react-bootstrap";
// function App(){
//   return(
//     <div>
//       <h1>hello world!</h1>
//       <Alert>get set started!</Alert>
//       <button onClick={()=>alert("hey whatups?")}>click me!</button>
//       <Button  onClick={()=>alert("hey whatups?")}>Click me!</Button>
//       <Button variant="success">Danger!</Button>
//     </div>
//   )
// }
// export default App;
// import{Button} from "react-bootstrap";
// import{Alert} from "react-bootstrap";
// function App(){
//   return(
//     <>
//     <h1>Hello world!</h1>
//     <Alert>hello react!</Alert>
//     <Button onClick={() =>alert("hey,what ups?")}>Click me!</Button>
//     <Button variant="success">Danger!</Button>
//     </>
//   )
// }
// export default App;
// import { Button } from "react-bootstrap";
// function App() {
//   return (
//     <div>
//       <h1>hello world!</h1>
//       <Button variant="warning">Click me!</Button>

//     </div>
//   );
// }

// export default App;
// import {Button} from "react-bootstrap";
// function App(){
//   return(
//     <div>
//       <h1>hello world!</h1>
//       <Button variant="primary" onClick={()=>confirm("are you sure?")}>Click me!</Button>
//     </div>
//   )
// }
// export default App;

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);
//   const h1Ref = useRef(null);
//   const inputhandler = () => {
//     console.log(inputRef);
//     inputRef.current.focus();
//     inputRef.current.style.color = "red";
//     inputRef.current.placeholder = "blue";
//     // inputRef.current.value = "123";
//   };

//   const h1handler = () => {
//     h1Ref.current.style.color = "yellow";
//   };

//   return (
//     <div>
//       <h1>I want to toggle to it!</h1>
//       <button style={{ margin: "10px" }}>Toggle : </button>
//       <input ref={inputRef} type="text" placeholder="Enter your text!" />
//       <button onClick={inputhandler} style={{ margin: "10px" }}>
//         Click me!
//       </button>
//       <h1 ref={h1Ref}>hello world!</h1>
//       <button onClick={h1handler}>click me!</button>
//     </div>
//   );
// }
// export default App;
// import { useRef } from "react";
// function App() {
//   const inputRef = useRef(null);
//   const inputVal = () => {
//     inputRef.current.focus();
//     console.log(inputRef);
//     inputRef.current.style.color = "red";
//     inputRef.current.placeholder = "123";
//   };

//   const toggleswitch = () => {
//     {
//       inputRef.current.style.display != "none"
//         ? (inputRef.current.style.display = "none")
//         : (inputRef.current.style.display = "inline");
//     }
//   };

//   return (
//     <div>
//       <h1>Hello world!</h1>
//       <input ref={inputRef} type="text" placeholder="Enter a value!" />
//       <button onClick={inputVal}>Click me!</button>
//       <button onClick={toggleswitch}>Toggle!</button>
//     </div>
//   );
// }
// export default App;
// import { useRef } from "react";
// function App(){
//     const inputRef = useRef(null);
//     const inputval = () =>{
//         inputRef.current.focus();
//         inputRef.current.style.color = "red";
//         inputRef.currentplaceholder = "12132";
//     }

//     const toggle = () =>{
//         {
//             inputRef.current.style.display  != "none"
//             ?(inputRef.current.style.display = "none") :
//             (inputRef.current.style.display = "inline")
//         }
//     }

//     return(
//         <>
//         <h1>I will explain useRef hook in react!</h1>
//         <input type="text" placeholder="Enter your name?" ref={inputRef}/>
//         <button onClick={inputval}>Click me!</button>
//         <button onClick={toggle}>Toggle!</button>

//         </>
//     )
// }
// export default App;
// import { useRef } from "react";
// import styled from "styled-components";
// const Mybtn = styled.button({
//     margin:"30px",
//     border:"2px solid #bbb0b0ff",
//     padding:"3px",
//     borderRadius:"10px"
// })
// function App() {
//   const inputRef = useRef(null);
//   const inputval = () => {
//     inputRef.current.style.color = "red";
//     inputRef.current.placeholder = "yasin shaikh";
//     inputRef.current.focus();
//   };
//   const toggle = () => {
//     {
//       inputRef.current.style.display != "none"
//         ? (inputRef.current.style.display = "none")
//         : (inputRef.current.style.display = "inline");
//     }
//   };
//   return (
//     <div>
//       <h1>I will explain   in react!</h1>
//       <input type="text" placeholder="Enter your name?" ref={inputRef} />
//       <Mybtn onClick={inputval}>Click me!</Mybtn>
//       <Mybtn onClick={toggle}>Toggle!</Mybtn>
//     </div>
//   );
// }
// export default App;

// import { useRef } from "react";
// function App() {
//   const userRef = useRef()
//   const passwordRef = useRef()
//   const handleform = (e) => {
//     e.preventDefault();
//     const user = document.querySelector("#user").value;
//     const password = document.querySelector("#password").value;

//     console.log(user, password);
//   };

//   const handleformRef = (e) =>{
//     e.preventDefault()
//     const user = userRef.current.value
//     const password = passwordRef.current.value
//     console.log("new Account",user,password)
//   }
//   return (
//     <div>
//       <h1>Uncontrolled components</h1>
//       <form action="" method="get" onSubmit={handleform}>
//         <input id="user" type="text" placeholder="Enter your name!" />
//         <br></br>
//         <br></br>
//         <input
//           id="password"
//           type="password"
//           placeholder="Enter your password!"
//         />
//         <br></br>
//         <button type="submit">submit</button>
//       </form>
//       <hr></hr>
//       <h1>Uncontrolled components with Ref </h1>
//       <form action="" method="get" onSubmit={handleformRef}>
//         <input ref={userRef} id="userRef" type="text" placeholder="Enter your name!" />
//         <br></br>
//         <br></br>
//         <input
//           ref={passwordRef}
//           id="passwordRef"
//           type="password"
//           placeholder="Enter your password!"
//         />
//         <br></br>
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }
// export default App;

// function App() {
//   const handleform = (e) => {
//     e.preventDefault();
//     const formdata = new FormData(e.target)
//     const name = formdata.get("name")
//     const password = formdata.get("password")
//     console.log(name,password)
//   };
//   return (
//     <>
//       <h1>Uncontrolled Components!</h1>
//       <form onSubmit={handleform}>
//         <input type="text" name="name" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="text" name="password" placeholder="Enter your password?" />
//         <br></br>
//         <br></br>
//         <button type="submit">Submit!</button>
//       </form>
//     </>
//   );
// }

// export default App;
// import { useRef } from "react";
// function App() {
//   const UserRef = useRef();
//   const PasswordRef = useRef();

//   const handleformRef = (e) => {
//     e.preventDefault()
//     const name = UserRef.current.value;
//     const password = PasswordRef.current.value;
//     console.log(name,password)
//   };
//   return (
//     <>
//       <form onSubmit={handleformRef}>
//         <h1>Uncontrolled components</h1>
//         <input type="text" ref={UserRef} placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="text" ref={PasswordRef} placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <button>Submit!</button>
//       </form>
//     </>
//   );
// }

// export default App;

// import User from "./data";
// function App() {
//   const displayView = (name) => {
//     alert(name);
//   };
//   return (
//     <div>
//       <h1>call parent component function from child component</h1>
//       <User data={displayView}  name = "farhan"/>
//       <User data={displayView}  name = "yasin"/>
//       <User data={displayView}  name = "nasrin"/>
//       <User data={displayView}  name = "shabbir"/>
//     </div>
//   );
// }
// export default App;
// import User from "./data";
// function App() {
//   const displayview = (name) => {
//     if (name) {
//       alert("you are called to " + name);
//     }
//   };
//   return (
//     <>
//       <h1>Props pass parent to child Componenet</h1>
//       <User data={displayview} name="yasin" />
//       <User data={displayview} name="farhan" />
//       <User data={displayview} name="shabbir" />
//       <User data={displayview} name="nasrin" />
//     </>
//   );
// }

// export default App;
// import { useRef } from "react";
// import UserInput from "./data";
// function App(){
//   const inputRef = useRef(null)
//   const updateInput = ()=>{
//     inputRef.current.value = "yasin";
//     inputRef.current.focus()
//     inputRef.current.style.color = "yellow"
//   }
//   return(
//     <div>
//       <h1>forward Ref</h1>
//       <UserInput ref= {inputRef}/>
//       <button onClick={updateInput}>Update value</button>
//     </div>
//   )
// }

// export default App;

// import { useFormStatus } from "react-dom";
// function App() {
//   const handlesubmit = async () => {
//     await new Promise((res) => setTimeout(res, 2000));
//     console.log("Submit on there!");
//   };

//   function CustomerForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);
//     return (
//       <div>
//         <input type="text" placeholder="Enter your name" />
//         <br></br>
//         <br></br>
//         <input type="password" placeholder="Enter your password" />
//         <br></br>
//         <br></br>
//         <button disabled={pending}>{pending?'Submitting..':'Submit!'}</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h1>How can use usestate Forms</h1>
//       <form action={handlesubmit}>
//         <CustomerForm />
//       </form>
//     </div>
//   );
// }

// export default App;
// import { useFormStatus } from "react-dom";
// function App() {
//   const handleform = async () => {
//     console.log("yasin once it!");
//     await new Promise((res) => setTimeout(res, 2000));
//   };
//   function User() {
//     const { pending } = useFormStatus();
//     console.log(pending);
//     return (
//       <>
//         <input type="text" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="password" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <button disabled={pending}>
//           {pending ? "Submitting..." : "Submit!"}
//         </button>
//       </>
//     );
//   }
//   return (
//     <>
//       <form action={handleform}>
//         <User />
//       </form>
//     </>
//   );
// }

// export default App;
// import {useRef} from 'react';
// import Userinput from './data';
// function App() {
//   const inputRef = useRef(null)
//   const handleRef = () =>{
//     inputRef.current.value = 123;
//     inputRef.current.focus()
//   }
//   return (
//     <div>
//       <h1>I will pass a value to forward Ref!</h1>
//       <Userinput ref={inputRef}/>
//       <button onClick={handleRef}>Click me!</button>
//     </div>
//   );
// }

// export default App;

// import { useState,useTransition } from "react";
// function App(){
//   const [pending,setpending] = useTransition()
//   const handleTrans = () =>{
//     setpending(async () =>{
//       await new Promise (res =>setTimeout(res,2000))
//     })
//   }
//   return(
//     <div>
//       <h1>use Trasition hook in react!</h1>
//       {
//         pending?
//         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>:null
//       }
//       <button disabled={pending} onClick={handleTrans}>{pending?"":"Click me"}</button>
//     </div>
//   )
// // }
// import { useTransition } from "react";
// function App() {
//   const [pending, setpending] = useTransition();
//   const handletarsn = () => {
//     setpending(async () => {
//       await new Promise((res) =>setTimeout(res,2000))
//     });
//   };
//   return (
//     <>
//       <h1>Usetrasition in react!</h1>
//       {pending ? (
//         <img
//           src="https://loading.io/assets/mod/spinner/spin/lg.gif"
//           alt="spinner"
//         />
//       ) : null}
//       <button disabled={pending} onClick={handletarsn}>
//         {pending ? "" : "Submit!"}
//       </button>
//     </>
//   );
// }
// export default App;
// export default App;

// import { useState,useTransition } from "react";
// function App(){
//   const [pending,setpending] = useTransition()

//   const handleBtn = () =>{
//     setpending(async() =>{
//     await  new Promise (res => setTimeout(res,8000))
//     })
//   }

//   return(
//     <div>
//       <h1>hello world!</h1>
//       {
//         pending?
//         <img src="https://miro.medium.com/v2/resize:fit:978/0*cWpsf9D3g346Va20.gif" alt="loader img" />:null
//       }
//       <button disabled={pending} onClick={handleBtn}>{pending?"":"Click me!"}</button>
//     </div>
//   )
// }
// export default App;
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState([
//     {
//       name: "yasin",
//       age: 20,
//     },
//     {
//       name: "farhan",
//       age: 30,
//     },
//     {
//       name: "nasrin",
//       age: 40,
//     },
//   ]);

//   const handlename = (val) => {
//     data[data.length - 1].name = val;
//     setdata([...data]);
//   };
//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => handlename(e.target.value) }
//         placeholder="Enter your name"
//       />
//       {data.map((item) => {
//         return (
//           <ul>
//             <li>{item.name}</li>
//           </ul>
//         );
//       })}
//     </>
//   );
// }
// export default App;

// export default App;
// import { useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]); // <-- yaha [12] ki jagah []

//   const [user, setUser] = useState("");

//   const handleUsers = () => {
//     if (user.trim() === "") return; // empty input ko ignore karne ke liye
//     setUsers([...users, user]);
//     setUser(""); // input clear karne ke liye
//   };

//   return (
//     <div>
//       <h1>Driven state through change value!</h1>
//       <br />
//       <input
//         value={user} // controlled input banaya
//         onChange={(event) => setUser(event.target.value)}
//         type="text"
//         placeholder="Enter your name"
//       />
//       <br />
//       <br />
//       <button onClick={handleUsers}>Click me!</button>
//       <br />
//       <br />
//       {users.map((item, index) => {
//         return <h4 key={index}>{item}</h4>;
//       })}
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState([]);
//   const [name, setname] = useState("");

//   const handlename = () => {
//     if (name.trim() === "") return;
//     setdata([...data, name]);
//     setname("");
//   };
//   return (
//     <>
//       <h1>Drived state in react!</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <button onClick={handlename}>Submit!</button>
//       {
//         data.map((item) =>{
//           return(
//             <ul>
//               <li>{item}</li>
//             </ul>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;
// import DisplayUser from "./User";
// import AddUser from "./data";
// import { useState } from "react"
// function App() {
//   const [user,setUser] = useState('')
//   return (
//     <div>
//       <AddUser data = {setUser}/>
//       <DisplayUser form = {user}/>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// function App() {
//   const [couter, setcouter] = useState(0);
//    useEffect  (()=>{
//    return () =>{
//     console.log("this code is run succesfully!")
//    }
//    },[])

//   return (
//     <div>
//       <h1>hello world</h1>
//       <br></br>
//       <br></br>
//       <button onClick={() => setcouter(couter + 1)}>Click me!</button>
//       <br></br>
//       <br></br>
//       <h1>{couter}</h1>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState({
//     name: "yasin",
//     address: {
//       city: "Ahemdabad",
//       country: "India",
//     },
//   });

//   const handlename = (val) =>{
//   setdata({...data,name:val})
//   }

//   const handleadd = (city) =>{
//     setdata({...data,address:{...data.address,city:city}})
//   }

//   return (
//     <>
//       <h1>Nested object get value in it!</h1>
//       <br></br>
//       <br></br>
//       <input type="text" onChange={(e) =>handlename(e.target.value)} placeholder="Enter your name?" />
//       <br></br>
//       <br></br>
//       <input type="text" onChange={(e) =>handleadd(e.target.value)} placeholder="Enter your address?" />
//       <br></br>
//       <br></br>
//       <input type="text" placeholder="Enter your City?" />
//       <br></br>
//       <br></br>
//       <h2>Name : {data.name}</h2>
//       <h2>City : {data.address.city}</h2>
//       <h2>Country : {data.address.country} </h2>
//     </>
//   );
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState(["yasin", "farhan", "nasrin"]);
//   const [dataDetails, setDatadetails] = useState([
//     {
//       name: "yasin",
//       age: 20,
//     },
//     {
//       name: "hasan",
//       age: 15,
//     },
//     {
//       name: "rehan",
//       age: 25,
//     },
//   ]);
//   const handleuser = (name) => {
//     data[data.length - 1] = name;
//     console.log(data);
//     setdata([...data]);
//   };

//   const handleAge = (age) => {
//     dataDetails[dataDetails.length - 1].age = age;
//     console.log(dataDetails);
//     setDatadetails([...dataDetails]);
//   };
//   return (
//     <div>
//       <h1>Updating Array in state</h1>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => handleuser(e.target.value)}
//       />
//       <hr></hr>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         onChange={(e) => handleAge(e.target.value)}
//       />
//       {data.map((item, index) => {
//         return <h2 key={index}>{item}</h2>;
//       })}
//      <hr></hr>
//       {dataDetails.map((item, index) => {
//         return <h1 key={index}>{item.name} , {item.age}</h1>;
//       })}
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState(["yasin", "farhan", "nasrin", "shabbir"]);
//   const [details, setdetails] = useState([
//     {
//       name: "rehan",
//       age: 50,
//     },
//     {
//       name: "afzal",
//       age: 20,
//     },
//     {
//       name: "hasan",
//       age: 60,
//     },
//   ]);

//   const handledata = (val) => {
//     data[data.length - 1] = val;
//     setdata([...data]);
//   };

//   const handelAge = (age) => {
//     details[details.length - 1].age = age;
//     setdetails([...details]);
//   };
//   return (
//     <>
//       <h1>Updating array in react!</h1>
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => handledata(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => handelAge(e.target.value)}
//         placeholder="Enter your age?"
//       />
//       <br></br>
//       <br></br>
//       {data.map((item) => {
//         return (
//           <ul>
//             <li>{item}</li>
//           </ul>
//         );
//       })}

//       {details.map((item) =>{
//         return(
//           <ul>
//             <li>{item.age}</li>
//           </ul>
//         )
//       })}
//     </>
//   );
// }

// export default App;

// function App(){
//   const[name,setname] = useState([
//     "rehan","salman","uziar"
//   ]);

//   const handlename = (Cars) =>{
//    name[name.length-1] = Cars;
//    setname([...name])
//   }
//   return(
//     <div>
//       <h1>Hello world!</h1>
//       <input type="text" placeholder="Enter your name?" onChange={(e)=>handlename(e.target.value)}/>
//       {
//         name.map((item,index)=>{
//           return(
//             <h1 key={index}>{item}</h1>
//           )
//         })
//       }
//     </div>

//   )
// }
// export default App;
// import { useActionState } from "react";

// function App() {
//   const handleSubmit = async (predata,formData) => {
//     let name = formData.get("name");
//     let password = formData.get("password");

//     await new Promise((res) => setTimeout(res, 2000));

//     if (name && password) {
//       return { message: "data submitted!", name, password };
//     } else {
//       return { error: "enter proper data" };
//     }
//   };

//   const [data, action, pending] = useActionState(handleSubmit,"yasin");
//   console.log(data);

//   return (
//     <div>
//       <form action={action}>
//         <input
//           defaultValue={data?.name}
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//         />
//         <br />
//         <br />
//         <input
//           defaultValue={data?.password}
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//         />
//         <br />
//         <br />
//         <button>Submit form</button>
//         <br />
//         <br />
//         {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//         {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
//       </form>
//       <br />
//       <br />
//       <h3>Name : {data?.name}</h3>
//       <h3>Password : {data?.password}</h3>
//     </div>
//   );
// }
// export default App;

// import { useId } from "react";
// export default function App() {
//   return (
//     <div>
//       <Userform />
//       <br></br>
//       <br></br>
//       <Userform />
//     </div>
//   );
// }

// function Userform() {
//   const name = useId();
//   const skills = useId();
//   const Password = useId();
//   const terms = useId();
//   return (
//     <div>
//       <form action="">
//         <label htmlFor={name}>Enter your name : </label>
//         <br></br>
//         <br></br>
//         <input id={name} type="text" placeholder="Enter your name?" />
//       </form>
//     </div>
//   );
// }
// import { useId } from "react";
// export default function App() {
//   return (
//     <div>
//       <Userform />
//       <hr></hr>
//       <Userform />
//     </div>
//   );
// }

// function Userform() {
//   const name = useId();
//   const password = useId();
//   const skills = useId();
//   return (
//     <form action="">
//       <label htmlFor={name}>Enter your name : </label>
//       <input id={name} type="text" placeholder="Enter your name" />
//       <br></br>
//       <br></br>
//       <label htmlFor={password}>Enter your name : </label>
//       <input id={password} type="text" placeholder="Enter your name" />
//       <br></br>
//       <br></br>
//       <input
//         id={skills}
//         type="checkbox"
//         placeholder="enter your skills"
//       ></input>
//       <label htmlFor={skills}>check terms and conditions</label>
//     </form>
//   );
// }
// import useToggle from "./User";
// export default function App() {
//   const [value, toggleValue] = useToggle(true);
//   const [data, setdata] = useToggle(true);
//   // console.log("val----",value)
//   return (
//     <>
//       <button onClick={toggleValue}>toggle heading</button>
//       <button onClick={() => toggleValue(false)}>hide heading</button>
//       <button onClick={() =>toggleValue(true)}>show heading</button>
//       {value ? <h1>Hello world!</h1> : null}
//       <hr></hr>

//       <button onClick={setdata}>toggle heading</button>
//       <button onClick={() => setdata(false)}>hide heading</button>
//       <button onClick={() =>setdata(true)}>show heading</button>
//       {
//            data?<h1>second heading</h1>:null
//       }
//     </>
//   );
// }

// import usetoggle from "./User";
// function App() {
//   const [value, togglevalue] = usetoggle(true);
//   return (
//     <>
//       <button onClick={togglevalue}>toggle!</button>
//       <button onClick={() =>togglevalue(false)}>heading!</button>
//       <button onClick={() =>togglevalue(true)}>show!</button>

//       {
//         value?<h1>first heading</h1> : null
//       }
//     </>
//   );

// }

// export default App;

// export default function App() {
//   const [subject, setsubject] = useState("English");
//   return (
//     <div style={{ backgroundColor: "red", padding: "20px" }}>
//       <SubjectContext.Provider value={subject}>
//         <button onClick={() => setsubject("")  } style={{padding:"10px",borderRadius:"15px",margin:"10px",border:"0.8px solid black"}}>Clear All</button>
//         <select
//           onChange={(event) => setsubject(event.target.value)}
//           style={{ padding: "10px", borderRadius: "10px" }}
//         >
//           <option value="empty">Select option</option>
//           <option value="Maths">Maths</option>
//           <option value="English">English</option>Coo
//           <option value="Science">Science</option>
//         </select>
//         <h1>context API!</h1>
//         <College />
//       </SubjectContext.Provider>
//     </div>
//   );
// }
// import { useState } from "react";
// import College from "./User";

// export default function App() {
//   const [subject, setsubject] = useState("English");
//   return (
//     <div style={{ backgroundColor: "red", padding: "15px" }}>
//       <SubjectContext.Provider value={subject}>
//         <button
//           onClick={() => setsubject("")}
//           style={{
//             padding: "10px",
//             borderRadius: "15px",
//             margin: "10px",
//             border: "0.8px solid black",
//           }}
//         >
//           Clear All
//         </button>
//         <select onChange={(event) => setsubject(event.target.value)}>
//           <option value="">Select option</option>
//           <option value="Maths">Maths</option>
//           <option value="Sceince">Sceince</option>
//           <option value="Enviroment">Enviroment</option>
//         </select>
//         <h1>Context API</h1>
//         <College />
//       </SubjectContext.Provider>
//     </div>
//   );
// }
// import { Route, Routes} from "react-router";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import Page from "./page";
// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         {/* <Route path="/" element={<Home/>} />
//         <Route path="/About" element={<h1>123</h1>} />
//         <Route path="/Contact" element={<h1>789</h1>} /> */}
//         <Route path="/" element={<h1>what is your age?</h1>}/>
//         <Route path="/about" element={<h1>That is about me!</h1>}/>
//         <Route path="/contact" element={<h1>that is my contact here!</h1>}/>
//         <Route path="/*" element={<Page/>}/>
//       </Routes>
//     </div>
//   );
// }
// import { Route, Routes } from "react-router";
// import Page from "./page";
// import Navbar from "./Navbar";
// import College from "./College";
// import Faculty from "./facutly";
// import Department from "./department";
// import Details from "./Details";
// function App(){
//   return(
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<h1>hello Home</h1>}></Route>
//         <Route path="/about" element={<h1>tell me about your self?</h1>}></Route>
//         <Route path="/contact" element={<h1>what is your contact?</h1>}></Route>
//         <Route path="/college" element={<College/>}>
//         <Route path="Student" element={<Faculty/>}></Route>
//         <Route path="department" element={<Department/>}></Route>
//         <Route path="details" element={<Details/>}></Route>
//         </Route>
//         <Route path="/*" element={<Page/>}></Route>
//       </Routes>
//     </div>
//   )
// }
// export default App;

// import { Route, Routes } from "react-router";
// import Navbar from "./Navbar";
// import College from "./College";
// import Page from "./page";
// import Faculty from "./facutly";
// import Details from "./Details";
// import Department from "./department";
// import Home from "./Home";
// import About from "./About";
// import UserList from "./UserList";
// import Contact from "./Login";
// import Userdetails from "./Userdetails";
// export default function App() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//       <Routes>
//         <Route element={<Navbar />}>
//           <Route path="/user" element={<UserList />}></Route>
//           <Route path="/user/:id/name?" element={<Userdetails />} />
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/user/list?" element={<UserList/>}></Route>
//           <Route path="in">
//             <Route path="user">
//               <Route path="/in/user/about" element={<About />}></Route>
//               <Route path="/in/user/contact" element={<Contact />}></Route>
//             </Route>
//           </Route>
//         </Route>
//         <Route path="/*" element={<Page/>}></Route>

//       <Route path="/college" element={<College />}>
//         <Route index element={<Faculty />}></Route>
//         <Route path="department" element={<Department />}></Route>
//         <Route path="details" element={<Details />}></Route>
//       </Route>
//       </Routes>
//     </div>
//   );
// }

// import { useEffect,useState } from "react";
// import "../src/css/App.css"
// export default function App(){
//   const [userData,setUserData] = useState([]);
//   useEffect(() =>{
//     getUser()
//   },[])
//  async function getUser(){
//     const url = "https://dummyjson.com/users";
//     let response = await fetch(url)
//     response = await response.json()
//     setUserData(response.users)
//   }
//   console.log(userData)
//   return(
//     <div>
//       <h1 className="header">Fecth data form API</h1>
//       {
//         userData && userData.map((user,index)=>{
//           return(
//             <ul key={index} className="user-list">
//               <li>{user.firstName}</li>
//               <li>{user.lastName}</li>
//               <li>{user.age}</li>
//             </ul>
//           )
//         })
//       }
//     </div>
//   )
// // }
// import { useEffect,useState } from "react";
// import "./css/App.css";
// export default function App(){
//   const [userData,setUserData] = useState([]);
//   useEffect(()=>{
//     getUser()
//   },[])
//   async  function getUser(){
//     const url = "https://dummyjson.com/users";
//     let response = await fetch(url);
//     response = await response.json();
//     setUserData(response.users)
//   }

//   console.log(userData)
//   return(
//     <div >
//       <h1 className="header">Fectching the data through API demo!</h1>
//       {
//         userData && userData.map((e,index)=>{
//           return(
//            <ul key={index} className="user-list">
//             <li>{e.firstName}</li>
//             <li>{e.lastName}</li>
//             <li>{e.age}</li>
//            </ul>
//           )
//         })
//       }
//     </div>
//   )
// // }
// import { useState } from "react";
// function App() {
//   const [counter, setcounter] = useState(0);
//   const [timer, settimer] = useState(0);
//   const [display, setdisplay] = useState(true);
//   const [cardstyle, setcardstyle] = useState({
//     padding: "20px",
//     margin: "20px",
//     border: "1.20px solid #ccc",
//     borderRadius: "25px",
//     width: "680px",
//   });
//   const updateTheme = (bgcolor, text) => {
//     setcardstyle({ ...cardstyle, backgroundColor: bgcolor, color: text });
//   };
//   const buttonstyle = {
//     padding: "10px",
//     margin: "10px",
//   };
//   return (
//     <div style={cardstyle}>
//       <h1>hello yasin shaikh</h1>
//       {display ? (
//         <img
//           src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
//           alt="cat image"
//           style={{ borderRadius: "15px", margin: "30px 0" }}
//         ></img>
//       ) : null}
//       <button onClick={() => setcounter(counter + 1)} style={buttonstyle}>
//         Counter! : {counter}
//       </button>
//       <button onClick={() => settimer(timer + 1)} style={buttonstyle}>
//         Timer!: {timer + 1}
//       </button>
//       <button onClick={() => setdisplay(!display)} style={buttonstyle}>
//         display!
//       </button>
//       <button
//         onClick={() => updateTheme("#f7ededff", "black")}
//         style={buttonstyle}
//       >
//         Theme!
//       </button>
//       <button onClick={() => updateTheme("white", "black")} style={buttonstyle}>
//         Default!
//       </button>
//     </div>
//   );
// }
// export default App;
// import styled from "styled-components";
// function App() {
//   const Cars = styled.h1({
//     padding:"20px",
//     margin:"20px",
//     color:"red",
//   })
//   return (
//     <div>
//       <Cars>Hello world!</Cars>
//     </div>
//   );
// }

// export default App;
// import { useRef } from "react";
// function App() {
//   const nameref = useRef();
//   const passwordref = useRef();
//   const handleref = (e) => {
//     e.preventDefault();
//     const name = nameref.current.value;
//     const Password = passwordref.current.value;
//     console.log("New Account : ", name, Password);
//   };
//   const handleform = (e) => {
//     e.preventDefault()
//     const name = document.querySelector("#name").value;
//     const Password = document.querySelector("#password").value;
//     console.log(name, Password);
//   };
//   return (
//     <div>
//       <h1>hello world!</h1>
//       <h1>uncontrolled components!</h1>
//       <form action="" method="get" onSubmit={handleform}>
//         <input type="text" placeholder="Enter your name?" id="name" />
//         <br></br>
//         <br></br>
//         <input
//           type="password"
//           placeholder="Enter your password?"
//           id="password"
//         />
//         <br></br>
//         <br></br>
//         <button type="submit">Click me!</button>
//       </form>
//       <br></br>
//       <br></br>
//       <form action="" method="get" onSubmit={handleref}>
//         <input
//           ref={nameref}
//           type="text"
//           placeholder="Enter your name?"
//           id="nameRef"
//         />
//         <br></br>
//         <br></br>
//         <input
//           ref={passwordref}
//           type="password"
//           placeholder="Enter your password?"
//           id="passwordRef"

//         />
//         <br></br>
//         <br></br>
//         <button type="submit">Click me!</button>
//       </form>
//     </div>
//   );
// }
// // export default App;
// import { useFormStatus } from "react-dom";
// function App() {
//   const handlesumbit = async () =>{
//     await new Promise((res)=> setTimeout(res,2000));
//   }
//   function CustomerForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);
//     return (
//       <div>
//         <input type="text" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="password" placeholder="Enter your password!" />
//         <br></br>
//         <br></br>
//         <button disabled={pending}>{pending?"submitting..":"submit!"}</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//         <h1>give to details!</h1>
//       <form action={handlesumbit}>
//         <CustomerForm />
//       </form>
//     </div>
//   );
// }

// // export default App;
// import { useState } from "react";
// function App(){
//   const [data,setdata] = useState({
//     name : "yasin",
//     address : {
//       city:"ahemdabad",
//       country : "india!",
//     }
//   })
//   const handledata = (val) =>{
//    let cars = data;
//    cars.name = val;

//    setdata({...data,cars:val})
//   }
//   const handlecity = (city) =>{
//     data.address.city = city;

//     setdata({...data,...data.address,city:city})
//   }
//   return(
//     <>
//     <h1>nested object through data pass in react!</h1>
//     <input onChange={(e) =>handledata(e.target.value)} type="text" placeholder="Enter your name?" />
//     <br></br>
//     <br></br>
//     <input onChange={(e) =>handlecity(e.target.value)} type="text" placeholder="Enter your city?" />
//     <h1>{data.name}</h1>
//     <h1>{data.address.city}</h1>
//     <h1>{data.address.country}</h1>
//     </>
//   )
// }
// export default App;
// import { useState } from "react";
// function App(){
//   const [data,setdata] =  useState({
//     name : "yasin",
//     address : {
//       city : "ahemabad",
//       country : "india",
//     }
//   })

//   const handledata = (val) =>{
//     let cars = data;
//     cars.name = val

//     setdata({...data,cars:val})
//   }

//   const handlecity = (city) =>{
//     data.address.city = city;

//     setdata({...data,...data.address,city:city})
//   }
//   return(
//     <>
//     <h1>I create nested object and get through input box!</h1>
//     <input onChange={(e) =>handledata(e.target.value)} type="text" placeholder="Enter your name?"/>
//     <br></br>
//     <br></br>
//     <input onChange={(e) =>handlecity(e.target.value)} type="text" placeholder="Enter your city?"/>
//     <br></br>
//     <br></br>
//     <h1>{data.name}</h1>
//     <h1>{data.address.city}</h1>
//     <h1>{data.address.country}</h1>
//     </>
//   )
// }
// export default App;
// import { useActionState } from "react";
// function App() {
//   const handlesubmit = async (predata, formData) => {
//     let name = formData.get("name");
//     let password = formData.get("password");

//     await new Promise((res) => setTimeout(res, 2000));

//     if (name && password) {
//       return {
//         message: "your data is successfully submitted!",
//         name,
//         password,
//       };
//     } else {
//       return { error: "We couldn't reading data!" };
//     }
//   };
//   const [data, action, pending] = useActionState(handlesubmit, "yasin");
//   console.log(data);
//   return (
//     <>
//       <h1>I will submited useactionstate hook!</h1>
//       <form action={action}>
//         <input
//           type="text"
//           defaultValue={data?.name}
//           placeholder="Enter your name?"
//           name="name"
//         />
//         <br></br>
//         <br></br>
//         <input
//           type="password"
//           defaultValue={data?.password}
//           placeholder="Enter your password?"
//           name="password"
//         />
//         <br></br>
//         <br></br>
//         <button disabled={pending}>submit!</button>
//         <br></br>
//         <br></br>
//         {data?.message &&
//           <span style={{ color: "green" }}>{data?.message}</span>
//         )}
//         {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       </form>

//       <h3>Name : {data?.name}</h3>
//       <h3>Name : {data?.password}</h3>
//     </>
//   );
// }
// export default App;
// import { useActionState } from "react";
// function App() {
//   const handleform = async (predata, formdata) => {
//     let Name = formdata.get("name");
//     let password = formdata.get("password");

//     await new Promise((res) => setTimeout(res, 2000));

//     if (Name && password) {
//       return { message: "your data is succesfully readebal!", Name, password };
//     } else {
//       return { error: "We coud'nt read a data!,try again!" };
//     }
//   };
//   const [data, action, pending] = useActionState(handleform, "yasin");
//   console.log(data);
//   return (
//     <>
//       <form action={action}>
//         <h1>I will perform UseActionState Hook!</h1>
//         <input
//           type="text"
//           defaultValue={data?.Name}
//           placeholder="Enter your name?"
//           name="password"
//         />
//         <br></br>
//         <br></br>
//         <input
//           type="password"
//           defaultValue={data?.password}
//           placeholder="Enter your password?"
//           name="name"
//         />
//         <br></br>
//         <br></br>
//         <button>Submit !</button>
//         <br></br>
//         <br></br>
//         {data?.message &&
//           <span style={{ color: "green" }}>{data?.message}</span>
//         }
//         {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       </form>

//       <h2>Name : {data?.Name}</h2>
//       <h2>Password : {data?.password}</h2>
//     </>
//   );
// }
// export default App;

// import usetoggle from "./User"
// function App(){
//   const [value,togglevalue] = usetoggle(true)
//   return(
//    <>
//    <button onClick={togglevalue}>Toggle!</button>
//    <button onClick={() =>togglevalue(false)}>Hide!</button>
//    <button onClick={() =>togglevalue(true)}>Show!</button>

//    {
//     value?<h1>This is heading!</h1>:null
//    }
//    </>
//   )
// }
// export default App;
// import usetoggle from "./User";
// function App(){
//   const [value,togglevalue] = usetoggle(true)
//   return(
//     <>
//     <h1>I will show toggle features in react!</h1>
//     {
//       value?<h1>Toggle me!</h1>:null
//     }
//     <button onClick={togglevalue}>Toggle!</button>
//     <button onClick={() =>togglevalue(false)}>hide!</button>
//     <button onClick={() =>togglevalue(true)}>Show!</button>
//     </>
//   )
// }
// export default App;

// function App(){
//   return(
//     <h1>hello world!</h1>
//   )
// }
// export default  App
// import { useState } from "react";

// function App() {
//   const [number, setNumber] = useState(0);
//   console.log(number) // state parent me

//   return (
//     <div>
//       <h2>Lifting State Up Example</h2>
//       <InputBox number={number} setNumber={setNumber} />
//       <DisplayDouble number={number} />
//     </div>
//   );
// }

// function InputBox({ number, setNumber }) {
//   return (
//     <input
//       type="number"
//       value={number}
//       onChange={(e) => setNumber(Number(e.target.value))}
//     />
//   );
// }

// function DisplayDouble({ number }) {
//   return <p>Double Value: {number * 2}</p>;
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [number, setname] = useState(0);
//   return (
//     <>
//       <Inputbox number={number} setname={setname} />
//       <Displayname number={number} />
//     </>
//   );

//   function Inputbox({ number, setname }) {
//     return (
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setname(e.target.value)}
//       />
//     );
//   }

//   function Displayname({number}){
//     return(
//       <h3>Name : {number * 2}</h3>
//     )
//   }
// // }
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState(0);
//   return (
//     <div>
//       <h1>Lift up state in react!</h1>
//       <InputBox book={data} lock={setdata} />
//       <Displaybox book={data} />
//     </div>
//   );
// }

// function InputBox({ book, lock }) {
//   return (
//     <div>
//       <h1>Inputbox in react!</h1>
//       <input
//         type="text"
//         value={book}
//         onChange={(e) => lock(e.target.value)}
//         placeholder="Enter your name?"
//       />
//     </div>
//   );
// }

// function Displaybox({book}) {
//   return (
//     <div>
//       <h2>Display in react!</h2>
//       <h2>Result : {book}</h2>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// function App() {
//   const [checked, setChecked] = useState(false);

//   return (
//     <div>
//       <h2>Checkbox Example</h2>
//       <Checkbox checked={checked} setChecked={setChecked} />
//       <Status checked={checked} />
//     </div>
//   );
// }

// function Checkbox({ checked, setChecked }) {
//   return (
//     <input
//       type="checkbox"
//       checked={checked}
//       onChange={(e) => setChecked(e.target.checked)}
//     />
//   );
// }

// function Status({ checked }) {
//   return <p>Status: {checked ? "Checked" : "Not Checked"}</p>;
// }
// export default App
// import { useState } from "react";
// function App() {
//   const [cart, setCart] = useState([
//     { name: "Apple", price: 20 },
//     { name: "Mango", price: 30 },
//   ]);

//   // derived state -> total price calculate from cart
//   const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

//   const addItem = () => {
//     setCart([...cart, { name: "Banana", price: 10 }]);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.name} - ₹{item.price}
//           </li>
//         ))}
//       </ul>

//       <p>Total Price: ₹{totalPrice}</p>
//       <button onClick={addItem}>Add Banana</button>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react"
// function App(){
//     const [cart,setcart] = useState([
//         {name:"yasin",price:20},
//         {name:"orange",price:60},
//     ]);

//     const totalprice = cart.reduce((sum,item) => sum + item.price,0)
//     const Addcart = () =>{
//         setcart([...cart,{name:"milk",price:40}])
//     }
//     return(
//         <div>
//             <h1>I use reduce method in react!</h1>
//             {
//                 cart.map((item) =>{
//                     return(
//                         <ul>
//                             <li>{item.name}</li>
//                         </ul>
//                     )
//                 })
//             }
//             <h2>Total Price : {totalprice}</h2>
//             <button onClick={Addcart}>Add cart!</button>
//         </div>
//     )
// }

// export default App

// function App() {
//   const [items, setItems] = useState([1, 2, 3, 4]);
//   const [newItem, setNewItem] = useState(""); // input value store karne ke liye

//   // derived state
//   const count = items.length;

//   const addItem = () => {
//     if (newItem.trim() === "") return; // empty input na add ho
//     setItems([...items, newItem]); // user value add kar do
//     setNewItem(""); // input ko reset kar do
//   };

//   return (
//     <div>
//       <h2>Item List</h2>
//       <p>Total items: {count}</p>

//       <input
//         type="text"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//         placeholder="Enter new item"
//       />
//       <button onClick={addItem}>Add Item</button>

//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [value, setvalue] = useState([1, 2, 3, 4]);
//   const [newItem, setItem] = useState("");

//   const count = value.length;
//   const additem = () => {
//     if (newItem.trim() === "") return;
//     setvalue([...value, newItem]);
//     setItem("");
//   };
//   return (
//     <>
//       <h1>Hello world!</h1>
//       <button onClick={additem}>Add one!</button>
//       <input style={{border:"2px solid black",margin:"20px"}}
//         type="text"
//         onChange={(e) => setItem(e.target.value)}
//         value={newItem}
//       />
//       <p>Total : {count}</p>
//       <ul>
//         {value.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//       </ul>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState("");

//   const addTodo = () => {
//     if (task.trim() === "") return;
//     setTodos([...todos, task]);
//     setTask("");
//   };

//   const deleteTodo = (index,i) => {
//     return setTodos(todos.filter((_,i) => i !== index));
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Enter task"
//       />
//       <button onClick={addTodo}>Add Task</button>

//       <ul>
//         {todos.map((item, i) => (
//           <li key={i}>
//             {item} <button onClick={() => deleteTodo(i)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default App;
// import { useState, useRef } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(0);

//   const increment = () => {
//     prevCount.current = count; // old value store
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Current: {count}</h1>
//       <h2>Previous: {prevCount.current}</h2>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// function App() {
//   const [count, setcount] = useState("");
//   return (
//     <>
//       <h1> I will use controlled components!</h1>
//       <input
//         type="text"
//         placeholder="Enter your name?"
//         value={count}
//         onChange={(e) => setcount(e.target.value)}
//       />
//       <h1>Name : {count}</h1>
//     </>
//   );
// }
// export default App

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Entered Name: ' + inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Hello world!</h1>
//       <input type="text" ref={inputRef} style={{color:"black",margin:"20px"}} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;
// import { useRef } from "react";
// function App() {
//   const inputRef = useRef(null);
//   const handlecon = () =>{
//     alert("your name is : " + inputRef.current.value)
//   }
//   return (
//     <>
//       <form action="" onSubmit={handlecon}>
//         <h1>I wil mannage uncontrolled component!</h1>
//         <input
//           type="text"
//           placeholder="Enter your name?"
//           ref={inputRef} style={{margin:"20px",color:"black"}}
//         ></input>
//         <button type="submit">Submit!</button>
//       </form>
//     </>
//   );
// }
// export default App;

// import { useFormStatus } from "react-dom";

// function SubmitButton() {
//   const { pending } = useFormStatus();
//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? "Submitting..." : "Submit"}
//     </button>
//   );
// }

// export default function App() {
//   async function handleSubmit(formData) {
//     await new Promise((res) => setTimeout(res, 2000)); // fake delay
//     console.log(formData.get("name"));
//   }

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="name" placeholder="Enter your name" />
//       <SubmitButton />
//     </form>
//   );
// }

// import { useFormStatus } from "react-dom";
// const HandleSubmit = () => {
//   const { pending } = useFormStatus();
//   console.log(pending);
//   return(
//     <button type="submit" disabled={pending}>
//     {pending ? "Submitting..." : "Submit!"}
//   </button>
//   )
// };

// function App() {
//   async function Eventhandle() {
//     await new Promise((res) => setTimeout(res, 2000));
//   }
//   return (
//     <>
//       <form action={Eventhandle}>
//         <h1>I will explain useformstatus hook in react!</h1>
//         <input type="text" placeholder="Enter task!"  />
//         <HandleSubmit/>
//       </form>
//     </>
//   );
// }
// export default App;

// import { useFormStatus } from "react-dom";
// function Loader() {
//   const { pending } = useFormStatus();
//   console.log(pending);
//   return (
//     <button type="submit" disabled={pending}>
//       {pending ? (
//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
//           alt="loader"
//         style={{height:"200px",width:"250px",display:"flex",flexWrap:"wrap"}}></img>
//       ) : (
//         "Submit! "
//       )}
//     </button>
//   );
// }
// const handleval = async () =>{
//      await new Promise((res)=>setTimeout(res,2000))
// }
// function App() {
//   return (
//     <>
//       <form action={handleval}>
//         <input type="text" placeholder="Enter your name?"/>
//         <Loader/>
//       </form>
//     </>
//   );
// }

// export default App;

// import { useActionState } from "react";

// async function login(prevState, formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   if (email !== "test@gmail.com" || password !== "1234") {
//     return { error: "Invalid credentials!" };
//   }

//   return { success: "Login successful!" };
// }

// export default function LoginForm() {
//   const [state, formAction, isPending] = useActionState(login, {});
//   console.log(state)

//   return (
//     <form action={formAction}>
//       <input type="email" name="email" placeholder="Enter Email" />
//       <input type="password" name="password" placeholder="Enter Password" />
//       <button type="submit" disabled={isPending}>
//         {isPending ? "Logging in..." : "Login"}
//       </button>

//       {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
//       {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
//     </form>
//   );
// }
// import { useActionState } from "react";
// import styled from "styled-components";
// const Mybtn = styled.input({
//   padding: "3px",
//   margin: "10px",
//   borderRadius: "10px",
//   border: "0.85px solid black",
// });
// async function login(predata, formdata) {
//   const Name = formdata.get("name");
//   const password = formdata.get("password");
//   await new Promise((res) =>setTimeout(res,2000))

//   if (Name !== "ns321004@gmail.com" || password !== "1234") {
//     return { error: "Invalid creadaitails!" };
//   }
//   return { success: "Congratulations,credaitails is valid!" };
// }

// function App() {
//   const [data, setdata, pending] = useActionState(login, {});
//   console.log(data);
//   return (
//     <>
//       <form action={setdata} method="get">
//         <h1>I will explain useActoinstate hook in react!</h1>
//         <Mybtn type="email" placeholder="Enter your email" name="name"></Mybtn>
//         <Mybtn
//           type="password"
//           placeholder="Enter your password"
//           name="password"
//         ></Mybtn>
//         <br></br>
//         <br></br>
//         <button type="submit" disabled={pending}>
//           {pending ?<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loader" style={{height:"250px",width:"320px"}}></img> : "Login!"}
//         </button>
//         <br></br>
//         <br></br>
//         {data?.success && (
//           <span style={{ color: "green" }}>{data?.success}</span>
//         )}
//         {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       </form>
//     </>
//   );
// }
// export default App;
// app/actions.js
// function CustomerForm() {
//   let todos = [];
//   return async function addTodo(prevState, formData) {
//     const title = formData.get("title");

//     if (!title) {
//       return { error: "Please enter todo!" };
//     }

//     todos.push(title);
//     return { success: "Todo added!", todos };
//   };
// }
// import { useActionState } from "react";

// export default function App() {
//   const [state, formAction, isPending] = useActionState(addTodo, { todos: [] });

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px" }}>
//       <h2>My Todos</h2>

//       <form action={formAction}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter todo..."
//           style={{ padding: "6px" }}
//         />
//         <button type="submit" disabled={isPending}>
//           {isPending ? "Adding..." : "Add Todo"}
//         </button>
//       </form>

//       {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
//       {state?.success && <p style={{ color: "green" }}>{state.success}</p>}
//        <CustomerForm/>
//       <ul>
//         {state?.todos?.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// "use client";
// import { useActionState } from "react";

// async function addTodo(prevState, formData) {
//   const title = formData.get("title");

//   await new Promise((res)=>setTimeout(res,500));

//   if (!title) {
//     return { error: "Please enter todo!", todos: prevState.todos };
//   }

//  else{
//   return{
//     success:"Todo Added!",todos:[...prevState.todos,title]
//   }
//  }
// }

// export default function App() {
//   const [state, formAction, isPending] = useActionState(addTodo, { todos: [] });
//   console.log(state)

//   return (
//     <div style={{ padding: "20px"}}>
//       <h2>My Todos</h2>

//       <form action={formAction}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Enter todo..."
//           style={{ padding: "6px",borderRadius:"8px",border:"0.20px solid black" }}
//         />
//         <button type="submit" disabled={isPending} style={{marginLeft:"30px",border:"0.85px solid black",padding:"5px",borderRadius:"10px"}}>
//           {isPending ? "Adding..." : "Add Todo"}
//         </button>
//       </form>

//       {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
//       {state?.success && <p style={{ color: "green" }}>{state.success}</p>}

//       <ul>
//         {state?.todos?.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState({
//     name: "yasin",
//     address: {
//       city: "Ahemdabad",
//       country: "India",
//     },
//   });

//   const handleval = (val) => {
//     let cars = data;
//     data.name = val;
//     console.log(cars);
//     setdata({ ...data });
//   };

//   const handlecity = (city) => {
//     data.address.city = city;
//     console.log(data);
//     setdata({ ...data });
//   };
//   return (
//     <>
//       <h1>I will explain Updating object in react!</h1>
//       <input
//         type="text"
//         placeholder="update your name?"
//         onChange={(e) => handleval(e.target.value)}
//         style={{
//           margin: "10px",
//           border: "0.85px solid black",
//           borderRadius: "10px",
//           padding: "3px",
//         }}
//       />
//       <input
//         type="text"
//         placeholder="update your city?"
//         onChange={(e) => handlecity(e.target.value)}
//         style={{
//           margin: "10px",
//           border: "0.85px solid black",
//           borderRadius: "10px",
//           padding: "3px",
//         }}
//       />
//       <h1>Name : {data.name}</h1>
//       <h1>City: {data.address.city}</h1>
//       <h1>Country: {data.address.country}</h1>
//     </>
//   );
// }

// export default App;
// import useToggle from "./User";
// import styled from "styled-components";
// const Mybtn = styled.button({
//   padding: "3px",
//   margin: "0px 10px",
//   borderRadius: "10px",
//   border: "0.25px solid black",
// });
// function App() {
//   const [value, toggleval] = useToggle(true);
//   return (
//     <>
//       {value ? <h1>I will explain custom hook in react!</h1> : null}
//       <Mybtn onClick={toggleval}>Toggle heading!</Mybtn>
//       <Mybtn onClick={() => toggleval(false)}>Hide heading!</Mybtn>
//       <Mybtn onClick={() => toggleval(true)}>Show heading!</Mybtn>
//     </>
//   );
// }
// export default App;
// import useToggle from "./User";
// function App(){
//     const [value,toggleval] = useToggle(true)
//     return(
//         <>
//         {value?<h1>I will explain custom hook in react!</h1>:null}
//         <button onClick={toggleval}>Toggle!</button>
//         <button onClick={() =>toggleval(false)}>Hide!</button>
//         <button onClick={() =>toggleval(true)}>Show!</button>
//         </>
//     )
// }

// export default App;

// import Student from "./Userdetails";
// import SubjectContext from "./UserList";
// import { useState } from "react";
// function App() {
//   const [subject, setsubject] = useState("English");
//   return (
//     <div style={{ backgroundColor: "red", padding: "10px" }}>
//       <SubjectContext.Provider value={subject}>
//         <h1>University Components!</h1>
//         <select
//           onChange={(e) => setsubject(e.target.value)}
//           style={{
//             padding: "10px",
//             border: "0.50px solid black",
//             margin: "10px 10px",
//             borderRadius: "10px",
//             fontSize: "18px",
//           }}
//         >
//           <option Value="">Select Subject!</option>
//           <option value="Maths">Maths</option>
//           <option value="Science">Science!</option>
//           <option value="History">History!</option>
//         </select>
//         <button
//           onClick={() => setsubject("")}
//           style={{
//             padding: "10px",
//             border: "0.50px solid black",
//             margin: "10px 10px",
//             borderRadius: "10px",
//             fontSize: "18px",
//             backgroundColor: "white",
//           }}
//         >
//           Clear button!
//         </button>
//         <Student />
//       </SubjectContext.Provider>
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
// function App(){
//   return(
//     <>
//     <BrowserRouter>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contant">Contant</Link>
//     <Routes>
//       <Route path="/" element={<h1>Home!</h1>}></Route>
//       <Route path="/about" element={<h1>About!</h1>}></Route>
//       <Route path="/contant" element={<h1>Contant!</h1>}></Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App
// import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Login from "./UserList";
// import Home from "./Userdetails";
// import About from "./About";
// import Navbar from "./Notebook";
// import Page from "./page";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar/>
//           <Routes>
//             <Route path="/" element={<Home />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/login" element={<Login />}></Route>
//             <Route path="/*" element={<Page/>}></Route>
//             {/* <Route path="/*" element={<Navigate to="/login"/>}></Route> */}
//           </Routes>

//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
// import Login from "./UserList";
// import Home from "./Userdetails";
// import About from "./About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Notebook";
// import Page from "./page";
// import College from "./Home";
// import Student from "./Login";
// import Details from "./Details";
// import Department from "./College";
// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/About" element={<About />}></Route>
//         <Route path="/Login" element={<Login />}></Route>
//         <Route path="/College" element={<College />}>
//           <Route path="student" element={<Student />} />
//           <Route path="details" element={<Details />} />
//           <Route path="department" element={<Department />} />
//         </Route>
//         <Route path="/*" element={<Page />}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   Details,
//   Home,
//   About,
//   College,
//   Student,
//   Faculty,
//   Subject,
//   Mouse,
//   Mouseinfo,
// } from "./Class";
// import { Navbar } from "./Class";
// import Page from "./Home";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Navbar />}>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/mouse/list?" element={<Mouse />} />
//           <Route path="/mouse/list/:id/:name?" element={<Mouseinfo />} />
//           <Route path="in">
//             <Route path="user">
//               <Route path="/in/user/details" element={<Details />}></Route>
//               <Route path="/in/user/about" element={<About />} />
//             </Route>
//           </Route>
//           <Route path="/college" element={<College />}>
//             <Route index element={<Student />} />
//             <Route path="faculty" element={<Faculty />} />
//             <Route path="subject" element={<Subject />} />
//           </Route>
//           <Route path="/*" element={<Page />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// function App(){
//   return(
//     <div>
//       <h1 className="bg-green-700 text-3xl border-black-600 border-5">Tailwind css installed in react!</h1>
//     </div>
//   )
// }
// export default App;
// import styled from "styled-components";
// const Mouse = styled.ul({
//   display:"flex",
//   justifyContent:"space-around",
//   fontSize:"22px",
//   marginTop:"30px",
//   border:"1.2px solid black",
//   borderRadius:"15px"
// })
// import { useEffect,useState } from "react";
// function App(){
//   const [userdata,setuserdata] = useState([])
//   useEffect(()=>{
//    getuserdata()
//   },[])

//   const getuserdata = async () =>{
//     let url = "https://dummyjson.com/users";
//     let response = await fetch(url)
//     await new Promise((Res)=> setTimeout(Res,2000))
//     response = await response.json();
//     console.log(response)
//     setuserdata(response.users)
//   }
//   return(
//     <div>
//       <h1>Hello world!</h1>
//       {
//         userdata && userdata.map((item) =>{
//           return(
//             <Mouse>
//               <li>{item.firstName}</li>
//               <li>{item.lastName}</li>
//             </Mouse>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App
// import { useEffect,useState } from "react";
// import styled from "styled-components";
// const Mouse = styled.ul({
//   display:"flex",
//   justifyContent:"space-evenly",
//   fontSize:"20px",
//   marginTop:"50px",
//   border:"1.2px solid black",
//   borderRadius:"20px"
// })
// function App(){
//   const [userdata,setuserdata] = useState([])
//   useEffect (() =>{
//     getuserdata()
//   },[])
//   const getuserdata = async () =>{
//     let web = "https://dummyjson.com/users";
//     let response = await fetch(web)
//     response = await response.json()
//     setuserdata(response.users)
//     console.log(response)
//   }
//   return(
//     <div>
//       <h1>What is your name?</h1>
//       {
//         userdata && userdata.map((item) =>{
//           return(
//             <Mouse>
//               <li>{item.firstName}</li>
//               <li>{item.lastName}</li>
//             </Mouse>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default App;
// import { useEffect, useState } from "react";
// function App() {
//   const [userdata, setuserdata] = useState([]);

//   useEffect(() => {
//     getuserdata();
//   }, []);

//   const getuserdata = async () => {
//     try {
//       let response = await fetch("http://localhost:3000/users");
//       response = await response.json();
//       console.log(response);
//       setuserdata(response);
//     } catch (error) {
//       console.log("Problem find out is:", error);
//     }
//   };

//   return (
//     <>
//       <h1>Hello world!</h1>
//       {userdata?.map((item) => {
//         return (
//           <ul key={item.id}>
//             <li>{item.name}</li>
//             <li>{item.age}</li>
//             <li>{item.Email}</li>
//           </ul>
//         );
//       })}
//     </>
//   );
// }
// import { useEffect,useState } from "react"
// function App(){
//   useEffect (()=>{
//    getuserdata()
//   },[])
//   const [userdata,setuserdata] = useState([])
//   const getuserdata = async () =>{
//     let url = "http://localhost:3000/post"
//     let response =  await fetch (url)
//     response = await response.json()
//     console.log(response)
//     setuserdata(response)
//   }
//   return(
//     <>
//     <h1>Rest API create in react!</h1>
//     {userdata.map((item,index) =>{
//       return(
//         <ul key={index}>
//           <li>{item.title}</li>
//           <li>{item.content}</li>
//         </ul>
//       )
//     })}
//     </>
//   )
// }

// export default App
// export default App;
// import { Route, BrowserRouter, Routes, NavLink } from "react-router-dom";
// import { UserList, UserAdd,EditUser } from "./About";
// import "../src/css/style.css";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <ul className="user-list">
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/add">Add user</NavLink>
//           </li>
//         </ul>
//         <h1>Intergred API to Json sever through!</h1>
//         <Routes>
//           <Route path="/" element={<UserList />} />
//           <Route path="/add" element={<UserAdd />} />
//           <Route path="/edit/:id" element={<EditUser/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
// import "../src/css/style.css"
// import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
// import { Useradd,Useredit,Userlist } from "./About";
// function App() {
//   return (
//     <>
//       <h1>I create a integrated json rest API in react!</h1>
//       <BrowserRouter>
//       <ul className="user-list">
//         <li><NavLink to="/" >Home</NavLink></li>
//         <li><NavLink to="/add" >Adduser</NavLink></li>
//       </ul>
//         <Routes>
//           <Route path="/" element={<Userlist/>}/>
//           <Route path="/add" element={<Useradd />}/>
//           <Route path="/edit/:id" element={<Useredit/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "../src/css/style.css";
// function App() {
//   const [name, setname] = useState("");
//   const [nameErr, setnameErr] = useState();

//   const [password, setpassword] = useState("");
//   const [passErr, setpassErr] = useState();

//   const handleErr = (e) => {
//     // console.log(e.target.value);
//     if (e.target.value.length > 5) {
//       setnameErr("please enter valid  username,only allows 5 character!");
//     } else {
//       setnameErr("");
//     }
//   };

//   const handleword = (e) => {
//     let regex = /^[A-Z0-9]+$/i;
//     if (regex.test(e.target.value)) {
//       setpassErr("");
//     } else {
//       setpassErr(
//         "please enter valid password,only allows numbers and alphabet!"
//       );
//     }
//   };

//   return (
//     <>
//       <h1>simple validation in react!</h1>
//       <input
//         style={{ borderRadius: "10px", marginTop: "80px" }}
//         type="text"
//         // className={nameErr ? "error" : ""}
//         onChange={handleErr}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <span className="red-color">{nameErr? nameErr:""}</span>
//       <br></br>
//       <br></br>
//       <input
//         style={{ borderRadius: "10px", marginTop: "20px" }}
//         type="text"
//         placeholder="Enter your password?"
//         // className={passErr ? "error" : ""}
//         onChange={handleword}
//       />
//       <br></br>
//       <br></br>
//       <span className="red-color">{passErr?passErr:""}</span>
//       <br></br>
//       <br></br>
//       <button style={{borderRadius:"5px",padding:"10px"}} disabled={passErr || nameErr}>Login!</button>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "../src/css/style.css";
// function App() {
//   const [name, setname] = useState("");
//   const [password, setpassword] = useState("");

//   const handlename = (e) => {
//     console.log(e.target.value);
//     if (e.target.value.length > 5) {
//       setname("you can put only 5 charcters allows in it!");
//     } else {
//       setname("");
//     }
//   };

//   const handleword = (e) => {
//     let regex = /^[A-Z0-9]+$/i;
//     let value = e.target.value;
//     if (value === "") {
//       setpassword("");
//     } else if (regex.test(value)) {
//       setpassword("");
//     } else {
//       setpassword("you can put password only numbers & alphabets in it!");
//     }
//   };
//   return (
//     <>
//       <h1>Simple Validation!</h1>
//       <input type="text" onChange={handlename} placeholder="Enter your name?" />
//       <br></br>
//       <br></br>
//       <span className="red-color">{name ? name : ""}</span>
//       <br></br>
//       <br></br>
//       <input type="text" onChange={handleword} placeholder="Enter your password?" />
//       <br></br>
//       <br></br>
//       <span className="red-color">{password ? password : ""}</span>
//       <br></br>
//       <br></br>
//       <button disabled={name || password}>Login!</button>
//     </>
//   );
// }
// export default App;

// import { useActionState } from "react";
// function App() {
//   const Submit = async (predata, formdata) => {
//     let name = formdata.get("name");
//     let password = formdata.get("password");
//     console.log(name, password);
//     let regex = /^[A-Z0-9]+$/i;
//     await new Promise((Res) =>setTimeout(Res,200));
//     if (!name) {
//       return { error: "name is required!" };
//     } else if (name.length > 5) {
//       return { error: "you can't put more than 5 characters in field!" };
//     } else if (!regex.test(password)) {
//       return {
//         error: "you can allows only alphabet and numeric values in field!",
//       };
//     } else if (!password) {
//       return { error: "password is required!" };
//     } else {
//       return { message: "login done!" };
//     }
//   };
//   const [data, action, pending] = useActionState(Submit);
//   console.log(data);
//   return (
//     <>
//       <h1>Simple validtaion in react useactionstate through!</h1>
//       {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
//       {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
//       <form action={action}>
//         <input type="text" name="name" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="password" name="password" placeholder="Enter your password?" />
//         <br></br>
//         <br></br>
//         <button disabled={pending || data?.error}>
//           {pending ? "login..." : "login"}
//         </button>
//       </form>
//     </>
//   );
// }

// export default App;

// const emptydata = {
//   name: "",
//   password: "",
//   email: "",
//   city: "",
//   address: "",
// };

// const Reducer = (data, action) => {
//   // console.log(data)
//   return{...data,[action.type] : action.val}

//   //
// };
// import { useReducer } from "react";
// function App() {
//   const [state, dispatch] = useReducer(Reducer, emptydata);
//   console.log(state)
//   return (
//     <>
//       <h1>hello world!</h1>
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
//         placeholder="Enter your Name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         placeholder="Enter your Password?"
//         onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         placeholder="Enter your Email?"
//         onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         placeholder="Enter your City?"
//         onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         placeholder="Enter your address?"
//         onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
//       />
//       <br></br>
//       <br></br>
//       <button>Submit!</button>

//       <ul>
//         <li>Name : {state.name}</li>
//         <li>password : {state.password}</li>
//         <li>email : {state.email}</li>
//         <li>city : {state.city}</li>
//         <li>address : {state.address}</li>
//       </ul>
//     </>
//   );
// }

// export default App;
// import { useReducer } from "react";
// const start = {
//   count: 0,
// };
// const Reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//   }
// };
// function App() {
//   const [data, dispatch] = useReducer(Reducer, start);
//   return (
//     <>
//       <h1>UseReducer in react!</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <h1>Count : {data.count} </h1>
//     </>
//   );
// }

// export default App;

// import User from "./About";
// import { useState, lazy, Suspense } from "react";
// const User = lazy(() => import("./About"));
// function App() {
//   const [loading, setloading] = useState(false);
//   return (
//     <>
//       <h1>Hello world</h1>
//       {loading ? (
//         <Suspense fallback={<h3>Loading...</h3>}>
//           <User />
//         </Suspense>
//       ) : null}
//       <button onClick={() => setloading(true)}>Load on!</button>
//     </>
//   );
// }
// import Title from "./Navbar";
// export default App;
// import { useState } from "react";
// import College from "./College";
// import { SubjectContext } from "./subject";
// function App() {
//     const [data,setdata] = useState("English")
//   return (
//     <div style={{ backgroundColor: "red", padding: "20px" }}>
//       <SubjectContext.Provider value={data}>
//         <h1>Context API</h1>
//         <select defaultValue={data} onChange={(e)=>setdata(e.target.value)}>
//             <option value="English">English</option>
//             <option value="Maths">Maths</option>
//             <option value="Eco">Eco</option>
//             <option value="Science">Science</option>
//         </select>
//         <button onClick={() =>setdata("")}>Click me!</button>
//         <College />
//       </SubjectContext.Provider>
//     </div>
//   );
// }
// export default App;
// import { useState } from "react";
// import { SubjectContext } from "./subject";
// import College from "./College";
// function App() {
//     const [data,setdata] = useState("English")
//   return (
//     <div style={{ backgroundColor: "yellow", padding: "10px" }}>
//       <SubjectContext.Provider value={data}>
//         <h1>The Unversity!</h1>
//         <select onChange={(e) =>setdata(e.target.value)}>
//             <option value="English">English</option>
//             <option value="Hindi">Hindi</option>
//             <option value="Gujrati">Gujrati </option>
//             <option value="Eco">Eco</option>
//         </select>
//         <button onClick={() =>setdata("")}>Clear all</button>
//         <College />
//       </SubjectContext.Provider>
//     </div>
//   );
// }

// export default App;
// import { createContext, useContext, useState } from "react";
// const Themecontext = createContext();
// export default function App() {
//   const [data, setdata] = useState("light");
//   return (
//     <div>
//       <Themecontext.Provider value={{ data, setdata }}>
//         <h1>Toggle theme!</h1>
//         <Toolbar />
//       </Themecontext.Provider>
//     </div>
//   );
// }

// export function Toolbar() {
//   return (
//     <div>
//       <h1>Toolbar in react!</h1>
//       <Themebox />
//     </div>
//   );
// }

// export function Themebox() {
//   const { data, setdata } = useContext(Themecontext);
//   return (
//     <div>
//       <h1>Themebox in react!</h1>
//       <button onClick={() => setdata(data === "light" ? "dark" : "light")}>
//         Current Theme:{data}
//       </button>
//     </div>
//   );
// }
// import { useContext, createContext } from "react";
// const Authcontext = createContext();
// export default function App() {
//   const name = { user: "yasin", role: "Admin" };
//   return (
//     <div>
//       <Authcontext.Provider value={name}>
//         <h1>Authantication!</h1>
//         <Dashboard />
//       </Authcontext.Provider>
//     </div>
//   );
// }

// export function Dashboard() {
//   const name = useContext(Authcontext)
//   return (
//     <div>
//       <h2>Dashboard! {name.user}</h2>
//     </div>
//   );
// }

// export function Profile(){
//   return(
//     <div>
//       <h2>Profile!</h2>
//     </div>
//   )
// }

// import React, { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       <AddToCart />
//       <CartList />
//     </CartContext.Provider>
//   );
// }

// function AddToCart() {
//   const { cart, setCart } = useContext(CartContext);
//   return (
//     <button onClick={() => setCart([...cart, "Apple"])}>
//       Add Apple
//     </button>
//   );
// }

// function CartList() {
//   const { cart } = useContext(CartContext);
//   return (
//     <ul>
//       {cart.map((item, index) => <li key={index}>{item}</li>)}
//     </ul>
//   );
// }

// export default App
// import { useContext, createContext, useState } from "react";
// const CartContext = createContext();
// function App() {
//   const [cart, setcart] = useState([]);
//   return (
//     <div>
//       <CartContext.Provider value={{ cart, setcart }}>
//         <h2>Cart counter!</h2>
//         <Addlist />
//         <Cartlist />
//       </CartContext.Provider>
//     </div>
//   );
// }

// function Addlist() {
//   const { setcart, cart } = useContext(CartContext);
//   return (
//     <div>
//       <h1>Addlist item!</h1>
//       <button onClick={() => setcart([...cart, "Apple"])}>Add Apple!</button>
//     </div>
//   );
// }

// function Cartlist() {
//   const { cart } = useContext(CartContext);
//   return (
//     <div>
//       <h1>Cartlist in react</h1>
//       {cart.map((item, index) => {
//         return (
//           <ul key={index}>
//             <li>{item}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// }
// export default App;
// import {
//   Navbar,
//   About,
//   Contact,
//   Page,
//   College,
//   Student,
//   Faculty,
//   Details,
// } from "./Checkboxes";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Navbar />}>
//             <Route path="/" element={<h1>Home page!</h1>} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Contact" element={<Contact />} />
//           </Route>
//           <Route path="/College" element={<College />}>
//             <Route index element={<Student />} />
//             <Route path="faculty" element={<Faculty />} />
//             <Route path="details" element={<Details />} />
//           </Route>
//           <Route path="/*" element={<Page />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Home,
//   Page,
//   Navbar,
//   College,
//   Student,
//   Faculty,
//   Subject,
//   Userlist,
//   Userdata,
// } from "./Checkboxes";
// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Navbar />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/user" element={<Userlist />} />
//             <Route path="/user/page?/:id" element={<Userdata/>}/>
//             <Route path="in">
//               <Route path="/in/User">
//                 <Route path="/in/User/about" element={<About />} />
//               </Route>
//             </Route>
//           </Route>
//           <Route path="/college" element={<College />}>
//             <Route path="student" element={<Student />} />
//             <Route index element={<Faculty />} />
//             <Route path="subject" element={<Subject />} />
//           </Route>
//           <Route path="/*" element={<Page />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import "../src/css/style.css";
// function App() {
//   const [userdata, setuserdata] = useState([]);
//   const [loading,setloading] = useState(true);

//   useEffect(() => {
//     getuserdata();
//   }, []);
//   const getuserdata = async () => {
//     const url = "http://localhost:3000/p";
//     let response = await fetch(url);
//     response = await response.json();
//     await new Promise((res) => setTimeout(res,2000))
//     console.log(response)
//     setuserdata(response)
//     setloading(false)
//   };
//   return (
//     <>
//       <h1>hello world!</h1>
//       <ul className="user-list" style={{ fontSize: "35px" }}>
//         <li>First name</li>
//         <li>Last name</li>
//       </ul>
//       { !loading?(
//       userdata.map((item, index) => {
//         return (
//           <ul key={index} className="user-list">
//             <li>{item.author}</li>
//             <li>{item.title}</li>
//           </ul>
//         );
//       })):<h1>Data loading...</h1>}
//     </>
//   );
// }

// export default App;
// import { useEffect } from "react";
// import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
// import { Userlist,UserAdd,EditUser } from "./Checkboxes";
// import "../src/css/style.css";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <ul className="add">
//         <li><Link to="/add">Add user</Link> </li>
//         <li><Link to="/">List</Link> </li>
//       </ul>
//         <Routes>
//           <Route path="/" element={<Userlist />} />
//           <Route path="/add" element={<UserAdd />} />
//           <Route path="/edit/:id" element={<EditUser/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
// import "../src/css/style.css";
// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import { Userlist, UserAdd, Edituser, Page } from "./Checkboxes";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <ul className="user">
//           <li>
//             <Link to="/">List</Link>
//           </li>
//           <li>
//             <Link to="/add">Add</Link>
//           </li>
//         </ul>
//         <Routes>
//           <Route path="/" element={<Userlist />} />
//           <Route path="/add" element={<UserAdd />} />
//           <Route path="/edit/:id" element={<Edituser />} />
//           <Route path="/*" element={<Page/>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
// import Title, { Colors, UserName,mouse } from "./Navbar";
// function App() {
//   let name = undefined;
//   let a = 20;
//   let b = 30;
//   function sum(a, b) {
//     return a + b;
//   }
//   function operation(x, y, op) {
//     if (op == "+") {
//       return x + y;
//     } else if (op == "-") {
//       return x - y;
//     } else if (op == "*") {
//       return x * y;
//     } else {
//       return "value is not found!";
//     }
//   }

//   let userobj = {
//     name: "yasin",
//     age: 20,
//     school: "the age new high school!",
//   };
//   let path =
//     "https://www.bing.com/images/search?view=detailV2&ccid=f179G4Ex&id=516196D3B2C74DE80401D81373DA2A6CC8549645&thid=OIP.f179G4ExW3UJgFZTGhhRFgHaFj&mediaurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f49%2f73%2f5b%2f49735b38c27ca67787e201a8f4b0fd6d.jpg&exph=1200&expw=1600&q=images&FORM=IRPRST&ck=259BECE66910061319ACE11CECF0DE6A&selectedIndex=0&itb=0&idpp=overlayview&ajaxhist=0&ajaxserp=0";
//   return (
//     <div>
//       <h1>yasin shaikh!</h1>
//       <h2>{name}</h2>
//       <h1>{a + b}</h1>
//       <h1>{sum(101, 201)}</h1>
//       <h1>{name ? "user is found!" : "user is not found!"}</h1>
//       <Title />
//       <Colors />
//       <h1>{UserName}</h1>
//       <button onClick={mouse}>click me!</button>
//       <h1>{operation(10, 20, "*")}</h1>
//       <h2>{userobj.name}</h2>
//       <img src={path} alt="imgaes"/>
//       <input type="text" placeholder="Enter your name ?" value="yasin"></input>
//     </div>
//   );
// }

// import  Mouse  from "./Navbar";
// const Colors = (name) => {
//   return alert(name);
// };
// function App() {
//   const fruits = (name) => {
//     return alert(name);
//   };
//   return (
//     <>
//       <button onClick={() => Colors("apple")}>Apple</button>
//       <button onClick={() => fruits("mango")}>mango</button>
//       <button onClick={Mouse}>Click me! on here!</button>
//     </>
//   );
// }

// import UserCard from './Navbar';
// import { useState } from 'react';
// function App() {
//   // State variables define karna
//   const [name, setName] = useState("Guest");
//   const [color, setColor] = useState("#333");

//   return (
//     <div style={{ padding: '30px', fontFamily: 'Arial' }}>
//       <h1>Beginner State & Props Project</h1>

//       {/* Input handling (State Update) */}
//       <div>
//         <label>Naam Likhiye: </label>
//         <input
//           type="text"
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter name"
//         />
//       </div>

//       <div style={{ marginTop: '10px' }}>
//         <label>Rang Chuniye: </label>
//         <input
//           type="color"
//           onChange={(e) => setColor(e.target.value)}
//         />
//       </div>

//       {/* Passing State as Props to Child */}
//       <UserCard userName={name} bgColor={color} />
//     </div>
//   );
// }

// export default App
// import ColorUser from "./Navbar";
// import { useState } from "react";
// import style from "../src/css/user.module.css";
// function App() {
//   const [color, setcolor] = useState("#ccc");
//   const [name, setname] = useState("yasin");
//   return (
//     <div>
//       <h2 className={style.heading}>begginers for state and props project onhere!</h2>
//       <div>
//         <label className={style.}>Enter your name : </label>
//         <input
//           type="text"
//           placeholder="Enter your name?"
//           onChange={(e) => setname(e.target.value)}
//         />
//       </div>
//       <div className={style.color}>
//         <label style={{paddingRight: "10px"}}>Select your Color : </label>
//         <input type="color" onChange={(e) => setcolor(e.target.value)} />
//       </div>
//       <ColorUser color={color} name={name}/>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState({
//     names: "",
//     password: "",
//   });
//   const handlesubmit = (e) => {
//     e.preventDefault();
//     console.log(` name : ${data.names} and password : ${data.password}`);
//     alert("your data is : " + [data.names, data.password]);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setdata({
//       ...data,
//       [name]: value,
//     });
//   };
//   return (
//     <form onSubmit={handlesubmit}>
//       <h1>multiple input data field on here!</h1>
//       <input
//         type="text"
//         name="name"
//         value={data.names}
//         onChange={handleChange}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="password"
//         name="password"
//         value={data.password}
//         onChange={handleChange}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <button type="submit">Submit!</button>
//     </form>
//   );
// }

// export default App;
// import Radiobtn from "./Navbar";
// function App() {
//   return <Radiobtn />;
// }
// export default App;
// import Skills from "./Navbar";
// function App() {
//   const userData = [
//     {
//       name: "yasin",
//       age: 20,
//       School: "the new age",
//       ID: 1,
//     },
//     {
//       name: "Farhan",
//       age: 20,
//       School: "the new age",
//       ID: 2,
//     },
//     {
//       name: "nasrin",
//       age: 30,
//       School: "the new age",
//       ID: 3,
//     },
//     {
//       name: "shabbir",
//       age: 45,
//       School: "the new age",
//       ID: 4,
//     },
//   ];
//   return (
//     <div>
//       <table border="1" cellPadding="10px">
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Age</td>
//             <td>School</td>
//             <td>ID</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((item,index) => {
//             return <Skills data={item}/>
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react"
// import style from '../src/css/user.module.css'
// import UserProfile from './Checkboxes'
// function App(){
//   const cardStyle = {
//     width : "200px",
//     border  : "2px solid black",
//     borderRadius : "10px"
//   }
//   return(
//     <div style={cardStyle}>
//       <h2 className={style.heading} style={{color : "green"}}>Hello world on here!</h2>
//       <UserProfile/>
//     </div>
//   )
// }

// export default App

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// function App() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }
// export default App;
// import Books from "./Checkboxes";
// import { useRef } from "react";
// function App() {
//   const inputRef = useRef(null);
//   const handleinput = () => {
//     inputRef.current.style.color = "blue"
//     inputRef.current.focus()
//   };
//   return (
//     <div>
//       <h1>Hello world onhere!</h1>
//       <Books ref={inputRef}/>
//       <button onClick={handleinput}>Updata values</button>
//     </div>
//   );
// }
// import { useFormStatus } from "react-dom";
// function App() {
//   const handlesubmit = async () => {
//     await new Promise((res) => {
//       setTimeout(res, 2000);
//     });
//     console.log("yasin shaikh");
//   };

//   function CustomerForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);

//     return (
//       <div>
//         <h2>Hello wrodl on here!</h2>
//         <h2>This is formstatus hook in react!</h2>
//         <input type="text" placeholder="Enter your name?" />
//         <br></br>
//         <br></br>
//         <input type="password" placeholder="Enter your password?" />
//         <br></br>
//         <br></br>
//         <button type="submit" disabled={pending}>
//           {pending ? "submitting..." : "submit"}
//         </button>
//       </div>
//     );
//   }

//   return (
//     <form action={handlesubmit}>
//       <CustomerForm />
//     </form>
//   );
// }

// export default App;
// import { useTransition } from "react";
// function App() {
//   const [setpending, startTranstion] = useTransition();
//   const handlebtn = () => {
//     startTranstion(async () => {
//       await new Promise((res) => setTimeout(res, 2000));
//       console.log("your data is printed!");
//     });
//   };
//   return (
//     <>
//       <h2>Hello world on here!</h2>
//       {setpending ? (
//         <img style={{width : "100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" />
//       ) : null}
//       <button disabled={setpending} onClick={handlebtn}>
//         click me!
//       </button>
//     </>
//   );
// }

// export default App;

// import { useState, useTransition } from "react";

// function App() {
//   const [query, setQuery] = useState("yasin");
//   const [list, setList] = useState([]);
//   const [isPending, startTransition] = useTransition();

//   const bigList = Array.from({ length: 100 }, (_, i) => "Item " + i);

//   function handleChange(e) {
//     const value = e.target.value;
//     setQuery(value);

//     // Slow update ko background me run karna
//     startTransition(() => {
//       const filtered = bigList.filter((item) => item.includes(value));
//       setList(filtered);
//     });
//   }

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleChange} />
//       {isPending ? <p>loading...</p> : null}

//       <ul>
//         {list.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import { useState, useTransition } from "react";

// function App() {
//   const [search, setSearch] = useState("Myphone");
//   const [filteredProducts, setFilteredProducts] = useState(["none"]);
//   const [isPending, startTransition] = useTransition();

//   // Real array
//   const products = [
//     "iPhone 14",
//     "Samsung Galaxy S23",
//     "OnePlus 11",
//     "Realme Narzo",
//     "Redmi Note 12",
//     "Vivo V27",
//     "Oppo Reno 8",
//     "Nokia G21",
//     "Motorola Edge",
//     "Google Pixel 7",
//   ];

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearch(value); // Fast update

//     // Slow update (background me chalega)
//     startTransition(() => {
//       const result = products.filter((p) =>
//         p.toLowerCase().includes(value.toLowerCase()),
//       );
//       setFilteredProducts(result);
//     });
//   };

//   return (
//     <div>
//       <h2>Product Search</h2>

//       <input
//         type="text"
//         value={search}
//         onChange={handleSearch}
//         placeholder="Search product..."
//       />

//       {isPending && <p>Searching...</p>}

//       <ul>
//         {filteredProducts.map((p, index) => (
//           <li key={index}>{p}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// function App() {
//   return (
//     <div>
//       <h2>Hello world on here!</h2>
//       <Cup count ={2}/>
//       <Cup count ={4}/>
//       <Cup count ={8} />
//     </div>
//   );
// }

// const Cup = ({count}) => {
//   return <h2>Cup of tea {count}</h2>;
// };
// export default App;

// App.jsx
// import React, { useState } from "react";
// import UserCard from "./Checkboxes"; // Child component ko import kiya

// function App() {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>Parent Component</h1>
//       <p>Counter: {count}</p>

//       {/* Jab hum button dabayenge, sirf App.jsx re-render hoga */}
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>

//       {/* UserCard ko 'name' prop bhej rahe hain jo "Rahul" hi rahega */}
//       <UserCard name="Rahul" />

//       <p style={{ marginTop: "20px" }}>
//         Notice: Button dabane par 'UserCard' ka console message dobara nahi
//         aayega!
//       </p>
//     </div>
//   );
// }

// export default App;
// import Mouse from "./Checkboxes"
// import { useState } from "react"
// function App(){
//     const [data,setdata] = useState(0)
//     return(
//         <>
//         <h2>Hello world on here App</h2>
//         <button onClick={() =>setdata(data + 1)}>Increase count!</button>
//         <h2>Count : {data}</h2>
//         <Mouse name="yasin"/>
//         </>
//     )
// }

// export default App
// import Cart from "./Checkboxes";
// import { useState } from "react";
// function App() {
//     const [data,setdata] = useState([1,2,3,4])
//     const count = data.length
//     console.log(data)
//   return (
//     <>
//       <h2>hello world on here!</h2>
//       <h2>total : {count}</h2>
//       <button onClick={() =>setdata([...data,10])}>Click me!</button>\
//       <Cart/>
//     </>
//   );
// }

// export default App;
// import Inputbox from "./Checkboxes"
// function App(){
//     return(
//         <>
//         <h2>Hello world on here!</h2>
//         <Inputbox/>
//         </>
//     )
// }

// export default App

// import { useState } from "react";

// function App() {
//   const [number, setNumber] = useState(0); // state parent me

//   return (
//     <div>
//       <h2>Lifting State Up Example</h2>
//       <InputBox number={number} setNumber={setNumber} />
//       <DisplayDouble number={number} />
//     </div>
//   );
// }

// function InputBox({ number, setNumber }) {
//   return (
//     <input
//       type="number"
//       value={number}
//       onChange={(e) => setNumber(Number(e.target.value))}
//     />
//   );
// }

// function DisplayDouble({ number }) {
//   return <p>Double Value: {number * 2}</p>;
// }

// export default App;
// import { useState } from "react";
// function App() {
//   const [data, setdata] = useState(["yasin", "farhan", "nasrin", "shabbir"]);
//   const handlename = (val) => {
//     let tempname = (data[data.length - 1] = val);
//     console.log(tempname);
//     setdata([...data]);
//   };

//   const [details, setdetails] = useState([
//     { name: "yasin", age: 20 },
//     { name: "farhan", age: 16 },
//     { name: "shabbir", age: 40 },
//   ]);

//   const handleage = (val) =>{
//     let newDetails =  details.map((items,index) =>{
//       if(index === details.length - 1){
//         return {...items,age:val}
//       }
//       else{
//         return items;
//       }
//     })

//     setdetails(newDetails)

//   }
//   return (
//     <>
//       <h2>hello world on here!</h2>
//       <input
//         type="text"
//         placeholder="Enter your name?"
//         onChange={(e) => handlename(e.target.value)}
//       />

//       <br></br>
//       <br></br>
//       {data.map((item, index) => {
//         return <h2 key={index}>{item}</h2>;
//       })}
//       <hr></hr>
//       <input
//         type="text"
//         placeholder="Enter your age?"
//         onChange={(e) => handleage(e.target.value)}
//       />
//       <br></br>
//       <br></br>
//       {details.map((item, index) => {
//         return (
//           <h2 key={index}>
//             {item.name},{item.age}
//           </h2>
//         );
//       })}
//     </>
//   );
// }
// export default App;
import { useActionState } from "react";
function App() {
  async function logingform(predata, formdata) {
    const name = formdata.get("name");
    const password = formdata.get("password");
    console.log(name, password);
    await new Promise((res) => setTimeout(res, 1000));
    if (!name && !password) {
      return { error: "name & password is required!" };
    } else if (name !== "yasin" || password !== "1234") {
      return { error: "Invalid credetials,try again!" };
    } else {
      return { success: `Done ${[name, password]}` };
    }
  }
  const [data, action, pending] = useActionState(logingform, {});
  return (
    <form action={action}>
      <h2>hello action hook on here!</h2>
      <br></br>
      <br></br>
      <input type="text" placeholder="Enter your name?" name="name" />
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Enter your password?"
        name="password"
      />
      <br></br>
      <br></br>
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit!"}
      </button>
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
      {data?.success && <p style={{ color: "green" }}>{data.success}</p>}
    </form>
  );
}

export default App;
