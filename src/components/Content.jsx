import React from "react";

function Content() {
  return (
    <>
      <h1 className="newClass" style={AppStyle}>
        {title}
      </h1>
      <p>{content}</p>
      <div>
        {students.map((student) => {
          return <p key={student.id}>{student.firstName}</p>;
        })}
      </div>
    </>
  );
}

export default Content;
