// import { Link } from "react-router";


// export default function UserList() {
//     const listdata = [
//         {id:1,name:"yasin"},
//         {id:2,name:"farhan"},
//         {id:3,name:"sufiyan"},
//         {id:4,name:"salman"},
//     ];
//   return (
//     <div style={{textAlign:"center"}}>
//         <h1>that is userlist data!</h1>
//       {
//         listdata.map((item)=>{
//             return(
//              <h1><Link to={"/user/"+item.id}>{item.name}</Link></h1>
//             )
//         })
//       }
//     </div>
//   );
// }

// export default function Userlist() {
//   const userdata = [
//     { name: "yasin", id: 1 },
//     { name: "farhan", id: 2 },
//     { name: "uzair", id: 3 },
//     { name: "salman", id: 4 },
//   ];
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>that is userlist data!</h1>
//       {userdata.map((item) => {
//         return (
//           <h1>
//             <Link to={"/user/" + item.id}>{item.name}</Link>
//           </h1>
//         );
//       })}

//       <h1>that is userlist data! with URL form</h1>
//       {userdata.map((item) => {
//         return (
//           <h1>
//             <Link to={"/user/" + item.id+"/"+item.name}>{item.name}</Link>
//           </h1>
//         );
//       })}
//     </div>
//   );
// }

// import { createContext } from "react";
// const SubjectContext = createContext("Math");

// export default SubjectContext;

// import { createContext } from "react";
// const SubjectContext = createContext("Maths!")

// export default SubjectContext;

function Login(){
  return(
    <>
    <h1>Login page!</h1>
    </>
  )
}

export default Login;