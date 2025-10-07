// const Remote = ({ mouse }) => {
//   return (
//     <div>
//       {
//         <ul>
//           <li>Name : {mouse.name}</li>
//         </ul>
//       }
//     </div>
//   );
// };

// import { createContext } from "react";

// export default Remote;

// const Farhan = ({Job})=>{
//   return(
//     <div>
//       <h2>University!</h2>
//       {
//         <ul>
//           <li>Name : {Job.name}</li>
//         </ul>
//       }
//     </div>

//   )
// }

// export default Farhan;

// function Counter({ data, mouse }) {
//   const getCoutner = () => {
//     console.log("call me only!");
//   };

//   const carpet = () => {
//     console.log("shabbir shaikh!");
//   };
//   useEffect(() => {
//     getCoutner();
//   }, [data]);
//   useEffect(() => {
//     carpet();
//   },[])
//   return (
//     <div>
//       <h1>data Componenet! : {data}</h1>
//       <h1>mouse Componenet! : {mouse}</h1>
//     </div>
//   );
// }

// export default Counter;

// function Counter({data,mouse}){
//     useEffect(()=>{
//         console.log("one time call only!")
//     },[data])

//     useEffect(()=>{
//         return(
//             console.log("this phase in unmaouting!")
//         )
//     },[])
//     return(
//         <div>
//             <h1>Hello world!</h1>
//             <h1>{data}</h1>
//             <h1>{mouse}</h1>
//         </div>
//     )
// }

// export default Counter;

// import style from "./css/user.module.css";
// export function Userprofile(){
//     return(
//         <div>
//             <h3 className={style.heading}>User profile!</h3>
//             <div className={style.card}>
//                 <img src="https://rapidapi.com/hub/_next/image?url=https%3A%2F%2Frapidapi-prod-apis.s3.amazonaws.com%2Fb42aa17d-8ae0-4a28-b29f-587af5454390.png&w=3840&q=75" alt="user photo!" />
//                 <h2>yasin shaikh</h2>
//                 <p>software devloper enginner!</p>
//             </div>
//         </div>
//     )
// }

// export default Userprofile;

// function User({data,name}){
//     return(
//         <div>
//             <button onClick={() =>data(name)}>display me</button>
//         </div>
//     )
// }
// export default User;
function User({data,name}){
    return(
        <>
        <button onClick={() =>data(name)}>Click me!</button>
        </>
    )
}

export default User
// import style from "./css/user.module.css";
// function Photo() {
//   return (
//     <div>
//       <h1 className={style.heading}>I want to try a profile photo!</h1>
//       <div className={style.card}>
//         <img src="https://static.vecteezy.com/system/resources/previews/029/271/062/non_2x/avatar-profile-icon-in-flat-style-male-user-profile-illustration-on-isolated-background-man-profile-sign-business-concept-vector.jpg"width={800} />
//       </div>
//       <h1>yasin shaikh</h1>
//       <p>sofware developer enginner</p>
//     </div>
//   );
// }
// // export default Photo;
// import { forwardRef } from "react";
// const UserInput = (Props, data) => {
//   return (
//     <div>
//       <input ref={data} type="text" placeholder="Enter your name?" />
//     </div>
//   );
// };

// export default forwardRef(UserInput);


// const UserInput = (Props) =>{
//     return(
//         <div>
//             <input ref={Props.ref } type="text" placeholder="Enter your name?"/>
//         </div>
//     )
// }

// export default UserInput;

// const Userinput = (Props) =>{
//   return(
//     <div>
//         <input ref={Props.ref} type='text' placeholder='Enter your name?'/>
//     </div>
//   )
// }

// export default Userinput;


// function AddUser({data}) {

//     return(
//         <div>
//             <h1>Add user : </h1>
//             <input onChange={(event) =>data(event.target.value)} type="text" placeholder="Enter your name?"/>
//             <hr></hr>
//         </div>
//     )
// }

// export default AddUser


// // export const SubjectContext = createContext();
// import { createContext } from "react"
// export  const SubjectContext = createContext()