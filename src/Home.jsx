// const cardstyle = {
//   padding: "10px",
//   margin: "10px",
//   backgroundColor: "blue",
// };
// import Subject from "./Login";
// function College() {
//   return (
//     <div style={cardstyle}>
//       <h1>College Components!</h1>
//       <Subject/>
//     </div>
//   );
// }
// export default College;
// import {NavLink ,Outlet} from "react-router-dom";
// import "../src/css/style.css"
// function College() {
//   return (
//     <div className="college">
//       <h1>College page!</h1>
//       <NavLink className="link" to="student">
//         Student
//       </NavLink>
//       <NavLink className="link" to="department">
//         Department
//       </NavLink>
//       <NavLink className="link" to="details">
//         College details
//       </NavLink>
//       <Outlet/>
//     </div>
//   );
// }
// export default College;

function Page(){
    return(
        <div>
            <h1>Page not found!</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" alt="ERROR page!"></img>
        </div>
    )
}
export default Page;