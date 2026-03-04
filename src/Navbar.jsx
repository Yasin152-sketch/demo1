// import { NavLink } from "react-router";
// export default function NavLink() {
//   return (
//     <>
//       {/* <NavLink to="/">
//         <h1>Home</h1>
//       </NavLink>
//       <NavLink to="/About">
//         <h1>About</h1>
//       </NavLink>
//       <NavLink to="/Contact">
//         <h1>Contact</h1>
//       </NavLink> */}
//       <NavLink to="/"><h1>Home</h1></NavLink>
//       <NavLink to="/about"><h1>About</h1></NavLink>
//       <NavLink to="/contact"><h1>Contact</h1></NavLink>
//     </>
//   );
// }
// import { NavLink } from "react-router";
// import "../src/css/header.css"
// export default function NavLink() {
//   return (
//     <div className="header">
//       <div>
//         <NavLink className="links">
//           <h2>Logo</h2>
//         </NavLink>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <NavLink className="link" to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="link" to="/contact">
//               login
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="link" to="/about">
//               about
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
// import "../src/css/header.css";
// import { NavLink } from "react-router";
// export default function NavLink() {
//   return (
//     <div className="header">
//       <div>
//         <NavLink className="links" to="/">
//           <h1>Logo</h1>
//         </NavLink>
//       </div>
//       <div>
//         <ul>
//           <li>
//             {" "}
//             <NavLink className="link" to="/">
//               home
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink className="link" to="/contact">
//               contact
//             </NavLink>
//           </li>
//           <li>
//             {" "}
//             <NavLink className="link" to="/about">
//               about
//             </NavLink>
//           </li>
//             <li>
//             {" "}
//             <NavLink className="link" to="/college">
//               College
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// import { NavLink, Outlet } from "react-router";
// import "../src/css/header.css";
// export default function Navbar() {
//   return (
//     <div>
//       <div className="header">
//         <div>
//           <NavLink to="/" className="links">
//             <h1>Logo</h1>
//           </NavLink>
//         </div>
//         <ul>
//           <li>
//             {/* <NavLink to="/" className={({isActive})=>isActive? "custom-active link":"link"}>
//               Home
//             </NavLink> */}
//             <NavLink to="/" className={({isActive})=>isActive? "custom-active link":"link"}>Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/in/user/contact" className="link">
//               contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/in/user/about" className="link">
//               about
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/college" className="link">
//               college
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/user" className="link">
//               users
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/user/list" className="link">
//               list
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// function Books({ user }) {
//   return (
//     <>
//       <hr></hr>
//       <h1>{user.name}</h1>
//       <hr></hr>
//       <h1>{user.age}</h1>
//       <hr></hr>
//       <h1>{user.email}</h1>
//       <hr></hr>
//     </>
//   );
// }

// export default Books;

// export function Student({mouse}){
//   return(
//     <>
//     <h1>Student Name : {mouse}</h1>
//     </>
//   )
// }

// function UserCard({userName,bgColor}) {
//   const cardStyle = {
//     backgroundColor:bgColor,
//     padding: '20px',
//     borderRadius: '10px',
//     marginTop: '20px',
//     color: '#fff',
//     textAlign: 'center'
//   };

//   return (
//     <div style={cardStyle}>
//       <h2>Welcome, {userName}!</h2>
//       <p>Aapka favourite color {bgColor} hai.</p>
//     </div>
//   );
// }

// export default UserCard;
// import styled from "styled-components"
// function ColorUser({color,name}) {
//     const Mypara = styled.h2({
//         backgroundColor : color,
//         borderRadius : "10px",
//         textAlign : 'center',
//         width : "90%",
//         padding : "10px",
//         marginTop : "15px",
//         position :"relative",
//         left :"35px",
//         color  : "white"
//     })
//     const cardStyle = {
//         textAlign : "center"
//     }
//     return(
//         <div>
//             <h2 style={cardStyle}>Color user on here!</h2>
//             <Mypara>
//                 <h2>User name is : {name}</h2>
//                 <h2>User Color is : {color}</h2>
//             </Mypara>
//         </div>
//     )
// }
// export default ColorUser
// import { useState } from "react";
// function Skills() {
//   const [skills, setskills] = useState([]);
//   const handleChange = (e) => {
//     console.log(e.target.value, e.target.checked);
//     if (e.target.checked) {
//       setskills([...skills, e.target.value]);
//     } else {
//       setskills([...skills.filter((item) => item != e.target.value)]);
//     }
//   };
//   return (
//     <>
//       <h1>checkbox handling on here!</h1>
//       <input type="checkbox" id="php" value="php" onChange={handleChange} />
//       <label htmlFor="php">PHP</label>
//       <br></br>
//       <br></br>
//       <input type="checkbox" id="java" value="java" onChange={handleChange} />
//       <label htmlFor="java">java</label>
//       <br></br>
//       <br></br>
//       <input
//         type="checkbox"
//         id="python"
//         value="python"
//         onChange={handleChange}
//       />
//       <label htmlFor="python">python</label>
//       <br></br>
//       <br></br>
//       <input type="checkbox" id="js" value="js" onChange={handleChange} />
//       <label htmlFor="js">js</label>
//       <br></br>
//       <br></br>
//       <h1>{skills.toString()}</h1>
//     </>
//   );
// }

// export default Skills;
// import { useState } from "react";
// import styled from "styled-components";
// const Mydiv = styled.div({
//   position: "relative",
//   left: "150px",
// });
// function Skills() {
//   const [skills, setskills] = useState([]);
//   const handleinput = (e) => {
//     console.log(e.target.value, e.target.checked);
//     if (e.target.checked) {
//       setskills([...skills, e.target.value]);
//     } else {
//       setskills([...skills.filter((item) =>item != e.target.value)])
//     }
//   };
//   return (
//     <Mydiv>
//       <h2>Hello skills on here!</h2>
//       <div>
//         <label htmlFor="101" style={{ marginRight: "10px" }}>
//           {" "}
//           PHP
//         </label>
//         <input type="checkbox" id="101" value="php" onChange={handleinput} />
//       </div>

//       <div>
//         <label htmlFor="102" style={{ marginRight: "10px" }}>
//           JAVA
//         </label>
//         <input type="checkbox" id="102" value="java" onChange={handleinput} />
//       </div>

//       <div>
//         <label htmlFor="103" style={{ marginRight: "10px" }}>
//           {" "}
//           python
//         </label>
//         <input type="checkbox" id="103" value="Python" onChange={handleinput} />
//       </div>

//       <div>
//         <label htmlFor="104" style={{ marginRight: "10px" }}>
//           {" "}
//           javascript
//         </label>
//         <input
//           type="checkbox"
//           id="104"
//           value="javascript"
//           onChange={handleinput}
//         />
//       </div>

//       <div>
//         <label htmlFor="105" style={{ marginRight: "10px" }}>
//           {" "}
//           C++
//         </label>
//         <input type="checkbox" id="105" value="C++" onChange={handleinput} />
//       </div>
//       <h2>Skills : {skills.toString()}</h2>
//     </Mydiv>
//   );
// }

// export default Skills;   
import { useState } from "react";
function Radiobtn() {
  const [name, setname] = useState("None");
  const [city, setcity] = useState("Delhi");
  const handleCity = (e) => {
    setcity(e.target.value);
    
  };
  const handleRadio = (e) => {
    setname(e.target.value);
    console.log(e.target.checked)
  };
  return (
    <>
      <h1>I check radio features in react on here!</h1>
      <input
        type="radio"
        onChange={handleRadio}
        id="male"
        name="gender"
        value="male"
        checked={name == "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        onChange={handleRadio}
        value="female"
        name="gender"
        checked={name == "female"}
      />
      <label htmlFor="female">Female</label>
      <h1>your gender : {name}</h1>

      <h2>Below Dropdown features on here!</h2>
      <select defaultValue="Delhi" onChange={handleCity}>
        <option value="noida">noida</option>
        <option value="jaipur">jaipur</option>
        <option value="mumbai">mumbai</option>
        <option value="Delhi">Delhi</option>
      </select>
      <br></br>
      <br></br>
      <h2>select city is : {city} </h2>
    </>
  );
}

export default Radiobtn;

// function Skills({ data }) {
//   const cardstyle = {
//     border :"1px solid black",
//     padding : "10px",
//     borderRadius : "10px",
//     color : "green"
//   }
//   return (
//     <tr style={{cardstyle}}>
//       <td>{data.name}</td>
//       <td>{data.age}</td>
//       <td>{data.School}</td>
//       <td>{data.ID}</td>
//     </tr>
//   );
// }
// export default Skills
// import { useEffect, useState } from "react";
// function Skills({data}) {
//   const [time, settime] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       settime(new Date().toLocaleTimeString());
//     }, 1000);
//   });
//   const Cardstyle = {
//     border : "0.85px solid black",
//     padding : "10px",
//     color : "Red",
//     borderRadius : "10px",
//     backgroundColor : data
//   }
//   return (
//     <div>
//       <h2>Hello Skills on here!</h2>
//       <h2>
//         your Time is : <span style={Cardstyle}>{time}</span>
//       </h2>
//     </div>
//   );
// }

// export default Skills;
// import Details from "./Details";
// function Skills({ data }) {
//   const cardSytle = {
//     border: "0.85px solid black",
//     padding: "10px",
//     borderRadius: "10px",
//     margin: "10px",
//     backgroundColor : "#ccc"
//   };
//   return (
//     <div style={cardSytle}>
//       <h2>User name : {data.name}</h2>
//       <h2>User Age : {data.age}</h2>
//       <h2>User Email : {data.Email}</h2>
//       {data.Student.map((item,index) => {
//         return <Details key={index} user={item} />;
//       })}
//     </div>
//   );
// }

// export default Skills;
