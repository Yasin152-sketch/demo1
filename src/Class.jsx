 // import Student from "./student";

// export default function Class(){
//     return(
//         <div style={{backgroundColor:"orange",padding:"20px"}}>
//             <h1>on there class component</h1>
//             <Student/>
//         </div>
//     )
// }
// import Student from "./student"
// export default function Class(){
//     return(
//         <div style={{backgroundColor:"green",padding:"15px"}}>
//             <h1>Class components</h1>
//             <Student/>
//         </div>
//     )
// }

export function About() {
  return (
    <div>
      <h1>About page!</h1>
    </div>
  );
}

export function Details() {
  return (
    <div>
      <h1>Details Page!</h1>
    </div>
  );
}

export function Home() {
  return (
    <div>
      <h1>Home Page!</h1>
    </div>
  );
}

export function College() {
  return (
    <div>
      <h1>College Page!</h1>
      <Link className="page" to="/">
        Student
      </Link>
      <Link className="page" to="faculty">
        faculty
      </Link>
      <Link className="page" to="subject">
        subject
      </Link>
      <Link to="/" className="back">
        Back to home page!
      </Link>
      <Outlet />
    </div>
  );
}

import { NavLink, Link, Outlet } from "react-router-dom";
import "../src/css/header.css";
export function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="links">Logo</div>
        <div>
          <ul>
            <li>
              <NavLink className={({isActive})=> isActive ? "custome" : "link"} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "custome " : "link"
                }
                to="/in/user/details"
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive})=> isActive? "custome" : "link"} to="/in/user/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive? "custome" : "link"} to="/college">
                College
              </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive? "custome" : "link"} to="/mouse/list">
                Mouse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export function Student() {
  return (
    <div>
      <h1>Student Page!</h1>
    </div>
  );
}

export function Faculty() {
  return (
    <div>
      <h1>Details Page!</h1>
    </div>
  );
}

export function Subject() {
  return (
    <div>
      <h1>Subject Page!</h1>
    </div>
  );
}
// export function Contact() {
//   const userdata = [
//     { name: "yasin", id: 1 },
//     { name: "farhan", id: 2 },
//     { name: "nasrin", id: 3 },
//     { name: "Shabbir", id: 4 },
//     { name: "Speaker", id: 5 },
//   ];
//   return (
//     <div>
//       <h1>Contact user info!</h1>
//       {userdata.map((item, index) => {
//         return <div>
//           <h3 key={index}><Link to={"/contact/" + item.id}>{item.name}</Link></h3>
//         </div>;
//       })}
//     </div>
//   );
// }
// import { useParams } from "react-router-dom";
// export function Userdetails(){
//   const contactparams = useParams()
//   console.log(contactparams)
//   return(
//     <div>
//       <h1>User details page : </h1>
//       <h3>User id is {contactparams.id}</h3>
//       <Link className="page" to="/">back to the home!</Link>
//     </div>
//   )
// }

export function Mouse() {
  const Customer = [
    { name: "yasin", id: 1 },
    { name: "farhan", id: 2 },
    { name: "nasrin", id: 3 },
    { name: "shabbir", id: 4 },
    { name: "mouse", id: 5 },
  ];
  return (
    <div>
      <h1>This is a customer info!</h1>
      {Customer.map((item) => {
        return (
          <div>
            <h1>
              <Link to={"/mouse/list/" + item.id}>{item.name}</Link>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
import { useParams } from "react-router-dom";
export function Mouseinfo() {
  const Mouseparams = useParams();
  console.log(Mouseparams);
  return (
    <div>
      <h1>This is mouse info for you : </h1>
      <h2>
        <span>User id is : {Mouseparams.id}</span>
      </h2>
    </div>
  );
}
