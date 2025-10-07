// import { Link } from "react-router";

// export default function Page() {
//   return (
//     <>
//       <div style={{textAlign:"center"}}>
//         <h1>page not found!</h1>
//         <h1>404 ERROR!</h1>
//         <div><Link to="/">Go to the Home</Link></div>
//         <img style={{width:"450px"}} src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="alt="page not found!"/>
//       </div>
//     </>
//   );
// }
// import { Link } from "react-router"
// export default function Page(){
//     return(
//         <>
//         <div style={{textAlign:"center"}}>
//             <h1>page not found!</h1>
//             <h1>404 ERROR!</h1>
//             <div><Link to="/">Go to the home!</Link></div>
//             <img src="https://i.pinimg.com/474x/e5/7f/d9/e57fd99d25ab4f3c68cb0985ba070330.jpg" alt="page not found!" />
//         </div>
//         </>
//     )
// }
import styled from "styled-components";
import { Link} from "react-router-dom";
const Image = styled.img({
  position: "relative",
  left: "250px",
  top: "-10px",
});
function Page() {
  return (
    <div>
      <h1>404 PAGE ERROR!</h1>
      <Image
        src="https://img.freepik.com/free-vector/creative-404-error-design_23-2147735309.jpg"
        alt="page not found!"
      ></Image>
      <Link to="/">back to home!</Link>
    </div>
  );
}

export default Page;
