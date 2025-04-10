import React from "react";
import MainReview from "./components/reviewPage/MainReview";
// import Intro from "./components/Intro.jsx";
// import Content from "./components/Content.jsx";
function App() {
//   const showIntro = false;
//   const title = "New dynamic Title";
//   const content = "New dynamic Content";
//   const students = [
//     {
//       id: 1,
//       firstName: "Diell",
//       lastName: "Budima",
//     },
//     {
//       id: 2,
//       firstName: "Egzon",
//       lastName: "Uka",
//     },
//   ];
//   if (!students || students.length === 0) {
//     return <p>No Students</p>;
//   }

//   const AppStyle = {
//     color: "red",
//     backgroundColor: "orange",
//     padding: "30px",
//   };
  return (
    // <div>
    //     <h1>Hello Title</h1>
    //     <p>New Content</p>
    // </div>
    <>
    <MainReview />
      {/* {students.map((student) => {
        return <p key={student.id}>{student.firstName}</p>;
      })} */}

      {/* <Content /> */}

      {/* {showIntro && <Intro />} */}
    </>
  );
}
export default App;
