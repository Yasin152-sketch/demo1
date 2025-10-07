// import {Link, Outlet } from "react-router"

// export default function College(){
//     return(
//         <div className="college" style={{textAlign:"center"}}>
//             <h1>College page!</h1>
//             <Link className="link" to="student">Student</Link>
//             <Link className="link" to="department">Department</Link>
//             <Link className="link" to="details">College details</Link>
//             <Outlet/>
//         </div>
//     )
// }
// import { Link, Outlet } from "react-router";
// export default function College() {
//   return (
//     <div className="college" style={{ textAlign: "center" }}>
//       <h1>College details!</h1>
//       <h3><Link to="/">Go to the home!</Link></h3>
//       <Link to="/" className="link">
//         Student
//       </Link>
//       <Link to="department" className="link">
//         department
//       </Link>
//       <Link to="details" className="link">
//         details
//       </Link>
//       <Outlet />
//     </div>
//   );
// }

// function Department(){
//     return(
//         <div>
//             <h1>Department page!</h1>
//         </div>
//     )
// }

// export default Department;
// import Divsion from "./Checkboxes"
// export default function College(){
//     return(
//         <div style={{backgroundColor:"yellow"}}>
//             <h2>College Components!</h2>
//             <Divsion/>
//         </div>
//     )
// }

// import Details from "./Checkboxes"
// export default function College(){
//     return(
//         <div style={{backgroundColor:"red",padding:"10px"}}>
//             <h2>College Components!</h2>
//             <Details/>
//         </div>
//     )
// }