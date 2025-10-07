// import { Link, useParams } from "react-router";

// export default function Userdetails() {
//   const paramsdata = useParams();
//   return (
//     <div style={{textAlign:"center"}}>
//       <h1>hello Userdetails</h1>
//       <h1>user id is : {paramsdata.id}</h1>
//       <h1><Link to="/user">Back to the users</Link></h1>
//     </div>
//   );
// }

// import { Link, useParams } from "react-router";
// export default function Userdetails() {
//   const paramdata = useParams();
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>hello Userdetails</h1>
//       <h1>user id is : {paramdata.id}</h1>
//       <h1>
//         <Link to="/user">back to the user page!</Link>
//       </h1>
//     </div>
//   );
// }
// import College from "./About";
// function Student() {
//   return (
//     <>
//       <div style={{backgroundColor:"yellow",padding:"10px"}}>
//         <h1>Student Components!</h1>
//         <College /> 
//       </div>
//     </>
//   );
// }

// export default Student;
// const cardstyle = ({
//   padding:"10px",
//   margin:"10px",
//   backgroundColor:"yellow",
// })
// import Teacher from "./About";
// function Student(){
//   return(
//     <div style={cardstyle}>
//       <h1>Student Components!</h1>
//       <Teacher/>
//     </div>
//   )
// }

// export default Student;

function Home(){
    return(
        <>
        <h1>Home page!</h1>
        </>
    )
}


export default Home;