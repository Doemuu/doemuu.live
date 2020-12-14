import React from "react"
import Layout from "../components/layout"
import Subject from "../components/subject"


import "../style/bm.scss"


const BM = () => {
  const subjects = [
    {id: 1, name: "Biology"},
    {id: 2, name: "Chemistry"}
  ]
  const [semesterSubjects, setSemesterSubjects] = React.useState([]);
  const [semesterNotation, setSemesterNotation] = React.useState(0);
  const handleNotation = (x, subject) => {
    if(semesterSubjects.length === 0){
      var subjectArray = semesterSubjects;
      subjectArray.push({subjectName: subject, subjectNotation: x});
      setSemesterSubjects(subjectArray);
      calculateNotation();
    }
    var preexisting = false;
    for(var i = 0; i < semesterSubjects.length; i++){
      if(semesterSubjects[i].subjectName === subject){
        preexisting = true;
        var subjectArray = semesterSubjects;
        subjectArray[i] = {subjectName: subject, subjectNotation: x};
        setSemesterSubjects(subjectArray);
        console.log(semesterSubjects);
        calculateNotation();
        break;
      }
    }
    if(!preexisting){
      var subjectArray = semesterSubjects;
      subjectArray.push({subjectName: subject, subjectNotation: x});
      setSemesterSubjects(subjectArray);
      calculateNotation();
    }
  }
  const calculateNotation = () => {
    var retVal = 0;
    for(var i = 0; i < semesterSubjects.length; i++){
      retVal += semesterSubjects[i].subjectNotation;
    }
    setSemesterNotation(retVal / semesterSubjects.length);
  }
  return (
    <Layout>
      <div>
        {subjects.map((sub, index) => (
          <Subject key={index} subject={sub} emitNotation={handleNotation}/>
        ))}
        <div>
          <p>SemesterNotation: {semesterNotation}</p>
        </div>
      </div>
    </Layout>
  );
};


export default BM
