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
