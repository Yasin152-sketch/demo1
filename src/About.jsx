// export default function About(){
//     return(
//         <h1> that is return a About info!</h1>
//     )
// }
// import Teacher from "./Home";
// function College() {
//   return (
//     <div style={{ background: "green", padding: "10px" }}>
//       <h1>College Components!</h1>
//       <Teacher/>
//     </div>
//   );
// }

import { es2015 } from "globals"

// export default College;
// const cardstyle = {
//   padding: "10px",
//   margin: "10px",
//   backgroundColor: "green",
// };
// import College from "./Home";
// function Teacher() {
//   return (
//     <div style={cardstyle}>
//       <h1>Teacher Components!</h1>
//       <College/>
//     </div>
//   );
// }
// export default Teacher;

// function About(){
//   return(
//     <>
//     <h1>About page!</h1>
//     </>
//   )
// }
// export default About;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// const Mybtn = styled.ul({
//   border: "0.85px solid black",
//   display: "flex",
//   justifyContent: "space-around",
//   borderRadius: "10px",
//   fontSize: "18px",
//   letterSpacing: "1.5px",
//   listStyle: "none",
// });
// const Header = styled.div({
//   border: "0.85px solid black",
//   borderRadius: "20px",
//   display: "flex",
//   justifyContent: "space-around"
// })
// export function UserList() {
//   const [userdata, setuserdata] = useState([]);
//   const [loading, setloading] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     setloading(true);
//     getuserdata();
//   }, []);
//   const getuserdata = async () => {
//     let response = await fetch("http://localhost:3000/users");
//     try {
//       await new Promise((res) => setTimeout(res, 2000));
//       response = await response.json();
//       console.log(response);
//       setuserdata(response);
//       setloading(false);
//     } catch (error) {
//       console.log("Please try again!", error);
//     }
//   };

//   const DeleteUser = async (id) => {
//     let url = "http://localhost:3000/users";
//     let response = await fetch(url + "/" + id, {
//       method: "delete",
//     });
//     console.log(id);
//     response = await response.json();
//     if (response) {
//       alert("user deleted!");
//     }
//     getuserdata();
//   };

//   const Edit = (id) => {
//     navigate("/edit/" + id);
//   };
//   return (
//     <>
//       <Header>
//         <h2>Name</h2>
//         <h2>Age</h2>
//         <h2>Email id</h2>
//         <h2>Action</h2>
//       </Header>
//       {!loading ? (
//         userdata.map((item, index) => {
//           return (
//             <Mybtn key={index}>
//               <li>{item.name}</li>
//               <li>{item.age}</li>
//               <li>{item.Email}</li>
//               <li>
//                 <button
//                   style={{ borderRadius: "15px" }}
//                   onClick={() => DeleteUser(item.id)}
//                 >
//                   Delete
//                 </button>
//                 <button
//                   style={{ borderRadius: "15px", marginLeft: "15px" }}
//                   onClick={() => Edit(item.id)}
//                 >
//                   Edit
//                 </button>
//               </li>
//             </Mybtn>
//           );
//         })
//       ) : (
//         <h1>data loading...</h1>
//       )}
//     </>
//   );
// }

// const Myinput = styled.input({
//   margin: "10px",
//   borderRadius: "20px",
// });
// export function UserAdd() {
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [Email, setEmail] = useState("");

//   const Createuser = async () => {
//     console.log(name, age, Email);
//     let url = "http://localhost:3000/users";
//     let response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({ name, age, Email }),
//     });

//     response = await response.json();

//     if (response) {
//       alert("New Customer added !");
//     }
//   };
//   return (
//     <div>
//       <h1>Add userlist!</h1>
//       <div>
//         <Myinput
//           type="text"
//           placeholder="Enter your name?"
//           onChange={(e) => setname(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         <Myinput
//           type="text"
//           placeholder="Enter your age?"
//           onChange={(e) => setage(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         <Myinput
//           type="text"
//           placeholder="Enter your email?"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br></br>
//         <br></br>
//         <button onClick={Createuser} style={{ borderRadius: "10px" }}>
//           Submit!
//         </button>
//       </div>
//     </div>
//   );
// }
// import { useParams } from "react-router-dom";
// const Inputedit = styled.input({
//   margin: "20px",
//   borderRadius: "13px",
// });
// export function EditUser() {
//   const power = useNavigate()
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [Email, setEmail] = useState("");
//   const { id } = useParams();
//   console.log(id);
//   useEffect(() => {
//     edituserdata();
//   }, []);
//   const edituserdata = async () => {
//     let url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setname(response.name);
//     setage(response.age);
//     setEmail(response.Email);
//   };

//   const Updateuser = async () =>{
//     console.log(name,age,Email)
//     let url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url,{
//       method:"put",
//       body:JSON.stringify({name,age,Email})
//     })

//     response = await response.json()
//     console.log(response)
//     if(response){
//       alert("User updated!")
//       power('/')
//     }
//   }
//   return (
//     <>
//       <Inputedit
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>

//       <Inputedit
//         type="text"
//         value={age}
//         onChange={(e) => setage(e.target.value)}
//         placeholder="Enter your age?"
//       />
//       <br></br>
//       <br></br>

//       <Inputedit
//         type="text"
//         value={Email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email?"
//       />
//       <br></br>
//       <br></br>
//       <button style={{ borderRadius: "15px" }} onClick={Updateuser}>Edit user</button>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import styled from "styled-components";
// const Mybtn = styled.ul({
//   listStyleType: "none",
//   display: "flex",
//   justifyContent: "space-around",
//   fontSize: "20px",
//   border: "0.85px solid black",
//   borderRadius: "50px",
// });
// const Header = styled.ul({
//   listStyleType: "none",
//   display: "flex",
//   justifyContent: "space-around",
//   border: "0.85px solid black",
//   borderRadius: "50px",
// });
// export function Userlist() {
//   const mouse = useNavigate();
//   const [userdata, setuserdata] = useState([]);
//   const [loading, setloading] = useState(true);
//   useEffect(() => {
//     getuserdata();
//   }, []);

//   const getuserdata = async () => {
//     try {
//       let url = "http://localhost:3000/users";
//       let response = await fetch(url);
//       response = await response.json();
//       console.log(response);
//       setuserdata(response);
//       setloading(false);
//     } catch (error) {
//       setloading(false);
//       console.log("your error is,", error);
//     }
//   };

//   const DeleteUser = async (id) => {
//     let url = "http://localhost:3000/users";
//     let response = await fetch(url + "/" + id, {
//       method: "delete",
//     });
//     response = await response.json();
//     console.log(id);
//     if (response) {
//       alert("user deleted!");
//     }
//     getuserdata();
//   };

//   const Edit = (id) => {
//     mouse("/edit/" + id);
//   };
//   return (
//     <>
//       <Header>
//         <h2>Name</h2>
//         <h2>Email</h2>
//         <h2>Age</h2>
//         <h2>Action</h2>
//       </Header>
//       {!loading ? (
//         userdata.map((item, index) => {
//           return (
//             <Mybtn key={index}>
//               <li>{item.name}</li>
//               <li>{item.Email}</li>
//               <li>{item.age}</li>
//               <li>
//                 <button
//                   style={{ borderRadius: "20px", marginRight: "20px" }}
//                   onClick={() => Edit(item.id)}
//                 >
//                   Edit!
//                 </button>
//                 <button
//                   style={{ borderRadius: "15px" }}
//                   onClick={() => DeleteUser(item.id)}
//                 >
//                   Delete!
//                 </button>
//               </li>
//             </Mybtn>
//           );
//         })
//       ) : (
//         <h1>hello world</h1>
//       )}
//     </>
//   );
// }

// export function Useredit() {
//   const about = useNavigate()
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [Email, setEmail] = useState("");
//   const {id} = useParams()
//   console.log(id);

//   useEffect(() =>{
//     edituserdata()
//   },[])

//   const edituserdata = async () =>{
//     let url = "http://localhost:3000/users/" + id;
//     let response =  await fetch(url)
//     response =  await response.json()
//     setname(response.name)
//     setage(response.age)
//     setEmail(response.Email)
//   }

//   const Updateuser = async () =>{
//     console.log(name,age,Email)
//     let url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url,{
//       method:"put",
//       body:JSON.stringify({name,age,Email})
//     })
//     response = await response.json()
//    if(response){
//     alert("update user!")
//     about('/')
//    }
//   }
//   return (
//     <>
//       <h1>Useredit added in React!</h1>
//       <input type="text" value={name} onChange={(e) =>setname(e.target.value)} placeholder="Enter your name" />
//       <br></br>
//       <br></br>
//       <input type="text" value={age} onChange={(e) =>setage(e.target.value)} placeholder="Enter your age" />
//       <br></br>
//       <br></br>
//       <input type="text" value={Email} onChange={(e) =>setEmail(e.target.value)} placeholder="Enter your Email" />
//       <br></br>
//       <br></br>
//       <button onClick={() =>Updateuser()}>Update User!</button>
//     </>
//   );
// }

// export function Useradd() {
//   const Phone = useNavigate()
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [Email, setEmail] = useState("");

//   const CreateUser = async () => {
//     console.log(name, age, Email);
//     let url = "http://localhost:3000/users";
//     let response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({ name, age, Email }),
//     });
//     response = await response.json();

//     if (response) {
//       alert("new user added!");
//     }
//     Phone('/')
//   };
//   return (
//     <>
//       <h1>New user added in form!</h1>
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => setage(e.target.value)}
//         placeholder="Enter your age?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email?"
//       />
//       <br></br>
//       <br></br>
//       <button onClick={CreateUser}>Submit!</button>
//     </>
//   );
// }

// function User(){
//     return(
//         <>
//         <h1>The user in loading in react!</h1>
//         </>
//     )
// }

// export default User