// import { useState } from "react";

import { es2015 } from "globals";

// function Checkboxes() {
//     const [skills,setSkills] = useState([]);
//     function handleSkills(event){
//         console.log(event.target.value,event.target.checked)
//         if(event.target.checked){
//             setSkills([...skills,event.target.value])
//         }
//         else{
//             setSkills([...skills.filter((item)=>item!=event.target.value)])
//         }
//     }
//   return (
//     <div>
//       <h1>handle Checkboxes in react js!</h1>
//       <input onChange={handleSkills} type="checkbox" id="php" value="php" />
//       <label htmlFor="php">PHP</label>
//        <br/>
//       <input onChange={handleSkills} type="checkbox" id="HTML" value="HTML" />
//       <label htmlFor="HTML">HTML</label>
//       <br></br>
//       <input onChange={handleSkills} type="checkbox" id="C++" value="C++" />
//       <label htmlFor="C++">C++</label>
//       <h1>{skills.toString()}</h1>
//     </div>
//   );
// }

// export default Checkboxes;

// function Radiobtn() {
//   const [gender, setgender] = useState("male");
//   const [city,setcity] =  useState("Surat");
//   return (
//     <div>
//       <h1>Handle radio and dropdown</h1>
//       <input
//         onChange={(event) => setgender(event.target.value)}
//         type="radio"
//         name="gender"
//         id="male"
//         value={"male"}
//         checked={gender=="male"}
//       />
//       <label htmlFor="male">Male</label>
//       <input
//         onChange={(event) => setgender(event.target.value)}
//         type="radio"
//         name="gender"
//         id="female"
//         value={"female"}
//         checked={gender=="female"}
//       />
//       <label htmlFor="female">Female</label>
//       <h2>Selected Gender :{gender}</h2>
//       <br></br>
//       <h2>that is select exmaple here!</h2>
//       <select onChange={(Event)=>setcity(Event.target.value)}style={{padding:"15px"}}>
//         <option value={"Kutch"}>Kutch</option>
//         <option value={"Surat"}>Surat</option>
//         <option value={"patan"}>patan</option>
//       </select>
//       <h2>Selected City :{city}</h2>
//     </div>
//   );
// }

// export default Radiobtn;

// function LoopsCon() {
//   const userName = ["yasin", "farhan", "nasrin", "shabbir"];
//   const userData = [
//     {
//       name: "yasin",
//       age: 18,
//       email: "123@gmail.com",
//       id: 1,
//     },

//     {
//       name: "farhan",
//       age: 16,
//       email: "950@gmail.com",
//       id: 2,
//     },

//     {
//       name: "nasrin",
//       age: 37,
//       email: "789@gmail.com",
//       id: 3,
//     },

//     {
//       name: "shabbir",
//       age: 45,
//       email: "741@gmail.com",
//       id: 4,
//     },
//   ];
//   return (
//     <div>
//       <h2>I will pass object on there!</h2>
//       <table border="1"cellPadding={"10px"}>
//         <thead>
//           <tr>
//             <td>id</td>
//             <td>name</td>
//             <td>age</td>
//             <td>email</td>
//           </tr>
//         </thead>
//         <tbody>
//           {userData.map((item) => (
//             <tr>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h1>This is dummy data!</h1>
//       <table border="1" cellPadding={"10px"}>
//         <thead>
//           <tr>
//             <td>name</td>
//             <td>age</td>
//             <td>email</td>
//             <td>id</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>yasin</td>
//             <td>18</td>
//             <td>123@gmail.com</td>
//             <td>1</td>
//           </tr>

//           <tr>
//             <td>yasin</td>
//             <td>18</td>
//             <td>123@gmail.com</td>
//             <td>1</td>
//           </tr>

//           <tr>
//             <td>yasin</td>
//             <td>18</td>
//             <td>123@gmail.com</td>
//             <td>1</td>
//           </tr>

//           <tr>
//             <td>yasin</td>
//             <td>18</td>
//             <td>123@gmail.com</td>
//             <td>1</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default LoopsCon;

// function Radiobtn() {
//   const [gender, setgender] = useState();
//   return (
//     <div>
//       <input
//         onChange={(event) => setgender(event.target.value)}
//         type="radio"
//         name="gender"
//         id="male"
//         value={"male"}
//         checked={gender == "male"}
//       />
//       <label htmlFor="male">male</label>
//       <br></br>
//       <input
//         onChange={(event) => setgender(event.target.value)}
//         type="radio"
//         name="gender"
//         id="female"
//         value={"female"}
//         checked={gender == "female"}
//       />
//       <label htmlFor="female">female</label>

//       <h1>Value : {gender}</h1>
//     </div>
//   );
// }

// export default Radiobtn;

// function Radiobtn() {
//   const [gender, setgender] = useState("select!");
//   const [city,setcity] = useState("Surat")
//   return (
//     <div>
//       <input
//         type="radio"
//         onChange={(event) => setgender(event.target.value)}
//         name="gender"
//         id="male"
//         value={"male"}
//         checked={gender=="male"}
//         />
//       <label htmlFor="male">Male</label>
//       <input
//         type="radio"
//         onChange={(event) => setgender(event.target.value)}
//         name="gender"
//         id="female"
//         value={"female"}
//         checked={gender=="female"}
//       />
//       <label htmlFor="female">Female</label>
//       <br></br>
//       <h1>gender : {gender}</h1>
//       <br></br>
//       <h1>That is selected program:</h1>
//       <select onChange={(event) => setcity(event.target.value)}>
//         <option value={"Surat"}>Surat</option>
//         <option value={"Patan"}>Patan</option>
//         <option value={"goa"}>goa</option>
//         <option value={"kutch"}>kutch</option>
//       </select>
//       <h1>Selected : {city}</h1>
//     </div>
//   );
// }

// export default Radiobtn;
// import User from "./User";
// function LoopCon() {
//   const userName = ["yasin", "farhan", "nasrin", "shabbir"];
//   const userData = [
//     {
//       name: "yasin",
//       age: 18,
//       email: "123@gmail.com",
//       id: 1,
//     },

//     {
//       name: "farhan",
//       age: 16,
//       email: "950@gmail.com",
//       id: 2,
//     },

//     {
//       name: "nasrin",
//       age: 37,
//       email: "789@gmail.com",
//       id: 3,
//     },

//     {
//       name: "shabbir",
//       age: 45,
//       email: "741@gmail.com",
//       id: 4,
//     },
//   ];

//   return(
//     <div>
//       <h1>I will pass data map funtion through!</h1>
//       {
//         userData.map((user)=>{
//             <div>
//             <User/>
//             </div>
//         })
//       }
//     </div>
//   )
// }

// export default LoopCon;

// import Department from "./department";

// export default function Divsion(){
//     return(
//         <div style={{backgroundColor:"green"}}>
//             <h2>Divison in react!</h2>
//             <Department/>
//         </div>
//     )
// }
// import Department from "./department";
// export default function Details(){
//     return(
//         <div style={{backgroundColor:"brown",padding:"10px"}}>
//             <h2>Details page in react!</h2>
//             <Department/>
//         </div>
//     )
// }

// import { Link, Outlet } from "react-router-dom";
// import "../src/css/style.css";
// export function Navbar() {
//   return (
//     <div>
//       <div>
//         <div className="header">
//           <ul>
//             <Link className="link" to="/">
//               <li>Home</li>
//             </Link>
//             <Link className="link" to="/About">
//               <li>About</li>
//             </Link>
//             <Link className="link" to="/Contact">
//               <li>Contact</li>
//             </Link>
//             <Link className="link" to="/College">
//               <li>College</li>
//             </Link>
//           </ul>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export function About() {
//   return (
//     <>
//       <h1>About page</h1>
//     </>
//   );
// }

// export function Contact() {
//   return (
//     <>
//       <h1>Contact page!</h1>
//     </>
//   );
// }
// export function College() {
//   return (
//     <>
//       <h1>College page!</h1>
//       <Link to="/" className="link-page">
//         Student
//       </Link>
//       <Link to="faculty" className="link-page">
//         faculty
//       </Link>
//       <Link to="details" className="link-page">
//         College Details
//       </Link>
//       <h2>
//         <Link className="link-page" to="/">Back to home!</Link>
//       </h2>
//       <Outlet />
//     </>
//   );
// }
// export function Student() {
//   return (
//     <>
//       <h1>Student page!</h1>
//     </>
//   );
// }

// export function Faculty() {
//   return (
//     <>
//       <h1>Faculty page!</h1>
//     </>
//   );
// }

// export function Details() {
//   return (
//     <>
//       <h1>Details page!</h1>
//     </>
//   );
// }

// export function Page() {
//   return (
//     <>
//       <h1 style={{ margin: "60px" }}>404 page not found!</h1>
//       <h2>
//         <Link to="/">Back to home!</Link>
//       </h2>
//       <img
//         src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
//         alt="page not found!"
//       />
//     </>
//   );
// }
// import { Link, Outlet } from "react-router-dom";
// export function About() {
//   return (
//     <>
//       <h1>About page!</h1>
//     </>
//   );
// }

// export function Details() {
//   return (
//     <>
//       <h1>Details page!</h1>
//     </>
//   );
// }

// export function Contact() {
//   return (
//     <>
//       <h1>Conatact page!</h1>
//     </>
//   );
// }

// export function Home() {
//   return (
//     <>
//       <h1>Home page!</h1>
//     </>
//   );
// }

// export function Page() {
//   return (
//     <>
//       <h1>404 Error page!</h1>
//       <img
//         src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
//         alt="page not found!"
//       />
//       <h2>
//         <Link to="/" style={{ textDecoration: "none", fontSize: "25px" }}>
//           Back to home page!
//         </Link>
//       </h2>
//     </>
//   );
// }

// export function College() {
//   return (
//     <>
//       <h1>College page!</h1>
//       <Link className="links" to="student">
//         Student
//       </Link>
//       <Link className="links" to="/">
//         Faculty
//       </Link>
//       <Link className="links" to="subject">
//         Subject
//       </Link>
//       <h3>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           back to home page!
//         </Link>
//       </h3>
//       <Outlet />
//     </>
//   );
// }

// export function Student() {
//   return (
//     <>
//       <h1>Student page!</h1>
//     </>
//   );
// }

// export function Faculty() {
//   return (
//     <>
//       <h1>faculty page!</h1>
//     </>
//   );
// }

// export function Subject() {
//   return (
//     <>
//       <h1>Subject page!</h1>
//     </>
//   );
// }
// export function Userlist() {
//   const user = [
//     { name: "yasin", id: 1 },
//     { name: "Afzal", id: 2 },
//     { name: "hasan", id: 3 },
//   ];
//   return (
//     <>
//       <h1>Userlist!</h1>
//       {user.map((item) => {
//         return (
//           <ul>
//             <Link className="links" to={"/user/page/" + item.id}>
//               <li className="links">{item.name}</li>
//             </Link>
//           </ul>
//         );
//       })}
//     </>
//   );
// }
// import { useParams, useNavigate } from "react-router-dom";
// export function Userdata() {
//   const parrot = useNavigate();
//   const handle = () => {
//     parrot(-1);
//   };
//   const mouse = useParams();
//   console.log(mouse.id);
//   return (
//     <>
//       <h1>Userdata below</h1>
//       <h1>User id is : {mouse.id}</h1>
//       <button onClick={handle}>Go back!</button>
//     </>
//   );
// }
// import { NavLink } from "react-router-dom";
// import "../src/css/style.css";
// export function Navbar() {
//   return (
//     <div>
//       <div className="background">
//         <div>
//           <h3>Logo!</h3>
//         </div>
//         <div className="header">
//           <ul>
//             <li>
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? "custom-active" : "links"
//                 }
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "custom-active" : "links"
//                 }
//               >
//                 Contact
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/college"
//                 className={({ isActive }) =>
//                   isActive ? "custom-active" : "links"
//                 }
//               >
//                 College
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/in/User/about"
//                 className={({ isActive }) =>
//                   isActive ? "custom-active" : "links"
//                 }
//               >
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/user"
//                 className={({ isActive }) =>
//                   isActive ? "custom-active" : "links"
//                 }
//               >
//                 User
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <Outlet />
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// export function Userlist() {
//   const [userdata, setuserdata] = useState([]);
//   const [loading, setloading] = useState(true);
//   const navigate = useNavigate();
//   useEffect(() => {
//     getuserdata();
//   }, []);
//   const getuserdata = async () => {
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url);
//     response = await response.json();
//     await new Promise((Res) => setTimeout(Res, 2000));
//     console.log(response);
//     setuserdata(response);
//     setloading(false);
//   };
//   const Deleteuser = async (id) => {
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url + "/" + id, {
//       method: "delete",
//     });
//     response = await response.json();
//     console.log(response);
//     if (response) {
//       alert("user deleted!");
//       getuserdata();
//     }
//   };

//   const Edit = (id) => {
//     navigate("/edit/" + id);
//   };

//   return (
//     <>
//       <h1>Fecth data through API</h1>
//       <div className="user">
//         <h1>Name</h1>
//         <h1>Email</h1>
//         <h1>Age</h1>
//         <h1>Actions</h1>
//       </div>
//       {!loading ? (
//         userdata.map((item) => {
//           return (
//             <ul key={item.id} className="user-list">
//               <li>{item.name}</li>
//               <li>{item.email}</li>
//               <li>{item.age}</li>
//               <li>
//                 <button
//                   onClick={() => Deleteuser(item.id)}
//                   style={{ borderRadius: "20px",marginRight :"20px" }}
//                 >
//                   Delete!
//                 </button>
//                 <button
//                   onClick={() => Edit(item.id)}
//                   style={{ borderRadius: "20px" }}
//                 >
//                   Edit!
//                 </button>
//               </li>
//             </ul>
//           );
//         })
//       ) : (
//         <h1>data loading...</h1>
//       )}
//     </>
//   );
// }

// export function UserAdd() {
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");
//   const power = useNavigate();
//   const Createuser = async () => {
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({ name, age, email }),
//     });
//     response = await response.json();
//     if (response) {
//       alert("new User added!");
//       power("/");
//     }
//   };
//   return (
//     <>
//       <h1>Add user in list!</h1>
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
//         type="email"
//         onChange={(e) => setemail(e.target.value)}
//         placeholder="Enter your Email?"
//       />
//       <br></br>
//       <br></br>
//       <button style={{ borderRadius: "20px" }} onClick={Createuser}>
//         Add user!
//       </button>
//     </>
//   );
// }
// import { useParams } from "react-router-dom";
// export function EditUser() {
//   const mouse = useNavigate();
//   const { id } = useParams();
//   console.log(id);
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setEmail] = useState("");
//   useEffect(() => {
//     getuserdata();
//   }, []);
//   const getuserdata = async () => {
//     const url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setage(response.age);
//     setname(response.name);
//     setEmail(response.email);
//   };

//   const Updatedata = async () => {
//     const url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url, {
//       method: "PUT",
//       body: JSON.stringify({ name, age, email }),
//     });
//     response = await response.json();
//     if (response) {
//       alert("user updated!");
//       mouse("/")
//     }
//   };

//   return (
//     <>
//       <h1>Edit user Page!</h1>
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         value={age}
//         onChange={(e) => setage(e.target.value)}
//         placeholder="Enter your age?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email?"
//       />
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <button onClick={Updatedata} style={{ borderRadius: "20px" }}>
//         Update User!
//       </button>
//     </>
//   );
// }
// import { useEffect, useState } from "react";
// export function Userlist() {
//   const power = useNavigate();
//   useEffect(() => {
//     getuserdata();
//   }, []);
//   const [userdata, setuserdata] = useState([]);
//   const [loading, setloading] = useState(true);
//   const getuserdata = async () => {
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url);
//     response = await response.json();
//     await new Promise((Res) => setTimeout(Res, 2000));
//     console.log(response);
//     setuserdata(response);
//     setloading(false);
//   };
//   const Deleteuser = async (id) => {
//     const url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url, {
//       method: "delete",
//     });
//     response = await response.json();
//     console.log(response);
//     if (response) {
//       alert("User deleted!");
//       getuserdata();
//     }
//   };

//   const Edit = (id) => {
//     power("edit/" + id);
//   };
//   return (
//     <>
//       <h1>API integration in react!</h1>
//       <h1>fecth the data through API</h1>
//       <div className="title">
//         <h1>Name</h1>
//         <h1>Age</h1>
//         <h1>Email</h1>
//         <h1>Actions</h1>
//       </div>
//       {!loading ? (
//         userdata.map((item) => {
//           return (
//             <ul key={item.id} className="list">
//               <li>{item.name}</li>
//               <li>{item.age}</li>
//               <li>{item.email}</li>
//               <li>
//                 <button
//                   style={{ borderRadius: "20px" }}
//                   onClick={() => Deleteuser(item.id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//               <li>
//                 <button
//                   style={{ borderRadius: "20px" }}
//                   onClick={() => Edit(item.id)}
//                 >
//                   Edit!
//                 </button>
//               </li>
//             </ul>
//           );
//         })
//       ) : (
//         <h1>Data loading...</h1>
//       )}
//     </>
//   );
// }
// import { Link, useNavigate } from "react-router-dom";
// export function UserAdd() {
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");
//   const navigate = useNavigate();
//   const Createuser = async () => {
//     const url = "http://localhost:3000/users";
//     let response = await fetch(url, {
//       method: "post",
//       body: JSON.stringify({ name, age, email }),
//     });
//     response = await response.json();
//     console.log(response);
//     if (response) {
//       alert("new user added!");
//       navigate("/");
//     }
//   };
//   return (
//     <>
//       <h1>UserAdd in react</h1>
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
//         type="email"
//         onChange={(e) => setemail(e.target.value)}
//         placeholder="Enter your email?"
//       />
//       <br></br>
//       <br></br>
//       <button style={{ borderRadius: "20px" }} onClick={Createuser}>
//         Add user!
//       </button>
//     </>
//   );
// }
// import { useParams } from "react-router-dom";
// export function Edituser() {
//   const Mouse = useNavigate();
//   const { id } = useParams();
//   console.log(id);
//   useEffect(() => {
//     getuserdata();
//   }, []);
//   const [name, setname] = useState("");
//   const [age, setage] = useState("");
//   const [email, setemail] = useState("");
//   const getuserdata = async () => {
//     const url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setname(response.name);
//     setage(response.age);
//     setemail(response.email);
//   };

//   const updateuser = async () => {
//     const url = "http://localhost:3000/users/" + id;
//     let response = await fetch(url, {
//       method: "put",
//       body: JSON.stringify({ name, age, email }),
//     });
//     response = await response.json();
//     console.log(response);
//     if (response) {
//       alert("user updated!");
//       Mouse("/");
//     }
//   };
//   return (
//     <>
//       <h1>Edit user data form!</h1>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your name?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="text"
//         value={age}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your age?"
//       />
//       <br></br>
//       <br></br>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setname(e.target.value)}
//         placeholder="Enter your email?"
//       />
//       <br></br>
//       <br></br>
//       <button onClick={updateuser} style={{ borderRadius: "20px" }}>
//         Update User!
//       </button>
//     </>
//   );
// }

// export function Page() {
//   return (
//     <>
//       <h1>404 ERROR!</h1>
//       <img
//         src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg"
//         alt="404 page"
//         style={{ height: "400px", width: "400px", objectFit: "cover" }}
//       />
//       <div style={{fontSize:"20px"}}>
//         <Link to="/">Back to homepage!</Link>
//       </div>
//     </>
//   );
// // }
// import style from '../src/css/user.module.css'
// function UserProfile(){
//     return(
//         <div>
//             <h2 className={style.heading}>This is Userprofile on here!</h2>
//         </div>
//     )
// }

// export default UserProfile
// import { Form, Alert, Button, Tab, Tabs } from "react-bootstrap";
// function Mouse() {
//   return (
//     <>
//       <Tabs defaultActiveKey="profile" className="rr-20">
//         <Tab eventKey="home" title="home">
//           Tab Contact on hommies!
//         </Tab>
//         <Tab eventKey="profile" title="profile">
//           Tab Contact on profile!
//         </Tab>
//         <Tab eventKey="Contact" title="Contact">
//           Tab Contact on Contact!
//         </Tab>
//       </Tabs>
//       <Form.Select aria-label="Default select example">
//         <option>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </Form.Select>
//       <Alert>Hello world on here!</Alert>
//       <Button>Clear me!</Button>

//     </>
//   );
// }

// // export default Mouse;
// import { forwardRef } from "react";
// const Books = (props,ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };
// export default forwardRef(Books);

// function Books(props){
//   return(
//     <div>
//       <input type="text" placeholder="Enter your name?" ref={props.ref}/>
//     </div>
//   )
// }
// export default Books
// // UserCard.jsx
// import React from 'react';

// const UserCard = ({ name }) => {
//   // Ye console log humein batayega ki component kab-kab render ho raha hai
//   console.log("Rendering: UserCard (Child)");

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
//       <h3>User Profile</h3>
//       <p>Name: {name}</p>
//     </div>
//   );
// };

// // Yahan humne 'React.memo' ka use kiya hai.
// // Iska matlab ye ab ek "Pure Component" ban gaya hai.
// export default React.memo(UserCard);
// import React from "react";
// function Mouse({ name }) {
//   console.log("extra re-rendering now...!")
//   return (
//     <>
//       <h2>Hello world on here mouse!</h2>
//       <h2>Name is : {name}</h2>
//     </>
//   );
// }

// export default React.memo(Mouse);
// import { useState } from "react";
// function Cart() {
//   const [card, setcard] = useState([
//     {
//       name: "yasin",
//       price: 150,
//     },
//     { name: "farhan", price: 250 },
//   ]);
//   const totalPrice = card.reduce((sum, item) => sum + item.price, 0);
//   console.log(totalPrice);
//   const addItem = () => {
//     setcard([...card, { name: "nasrin", price: 350 }]);
//   };
//   return (
//     <>
//       <h2>Hello world on cart!</h2>
//       <p>Shopping cart below it!</p>
//       <button onClick={() => addItem()}>Add Item</button>
//       <h2>Total price : {totalPrice}</h2>
//       <ul>
//         {card.map((item, index) => {
//           return (
//             <li key={index}>
//               {item.name} - {item.price}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Cart;
// import { useState } from "react";
// function InputBox() {
//   const [data, setdata] = useState(["yasin", "farhna", "shaikh"]);
//   const [item, setitem] = useState("yasin");
//   const count = data.length;
//   console.log(count);
//   const AddItem = () => {
//     if (item.trim() === "") return;
//     setdata([...data, item]);
//     setitem("");
//   };
//   return (
//     <>
//       <h2>Hello world onhere!</h2>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={item}
//         onChange={(e) => setitem(e.target.value)}
//       />
//       <button onClick={AddItem}>Add Item</button>
//       <ul>
//         {data.map((item,index) =>{
//           return(
//             <li key={index}>{item}</li>
//           )
//         })}
//       </ul>
//     </>
//   );
// }
// export default InputBox;

// export function NameInput({ data, setdata }) {
//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter your name?"
//         value={data.name}
//         onChange={(e) => setdata({ ...data, name: e.target.value })}
//       />
//       <br></br>
//       <br></br>
//     </>
//   );
// }

// export function AgeInput({ data, setdata }) {
//   return (
//     <>
//       <input
//         type="number"
//         value={data.age}
//         placeholder="Enter your age?"
//         onChange={(e) => setdata({ ...data, age: e.target.value })}
//       />
//     </>
//   );
// }

// export function Summary({ data }) {
//   return (
//     <>
//       <h2>
//         Summary is : {data.name} and {data.age}
//       </h2>
//     </>
//   );
// }

