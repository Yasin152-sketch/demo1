import { useState } from "react";

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