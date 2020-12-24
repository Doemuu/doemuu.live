import React from "react"
import Layout from "../components/layout"
import Subject from "../components/subject"


import "../style/bm.scss"


const BM = () => {
  const subjects = [
    {id: 1, name: "Biologie", worth: "66,6"},
    {id: 2, name: "Chemie", worth: "33,3"},
    {id:3, name: "Mathe", worth: "100"},
    {id:4, name: "Physik", worth: "100"},
    {id:5, name: "Deutsch", worth: "100"},
    {id:6, name: "Französisch", worth: "100"},
    {id:7, name: "Englisch", worth: "100"},
    {id:8, name: "Geschichte & Politik", worth:"100"},
    {id:9, name: "Wirtschaft & Recht", worth: "100"},
    {id:10, name: "IDAF", worth: "100"},
  ]
  const [semesterSubjects, setSemesterSubjects] = React.useState([]);
  const [semesterNotation, setSemesterNotation] = React.useState(0);
  const handleNotation = (x, subject) => {
    if(semesterSubjects.length === 0){
      var subjectArray = semesterSubjects;
      subjectArray.push({subjectName: subject.name, subjectNotation: x, subjectWorth: subject.worth});
      setSemesterSubjects(subjectArray);
      calculateNotation();
    }else{
      var preexisting = false;
      for(var i = 0; i < semesterSubjects.length; i++){
        if(semesterSubjects[i].subjectName === subject.name){
          preexisting = true;
          console.log("Subject", subject);
          var subjectArray = semesterSubjects;
          subjectArray[i] = {subjectName: subject.name, subjectNotation: x, subjectWorth: subject.worth};
          setSemesterSubjects(subjectArray);
          calculateNotation();
          break;
        }
      }
      if(!preexisting){
        var subjectArray = semesterSubjects;
        subjectArray.push({subjectName: subject.name, subjectNotation: x, subjectWorth: subject.worth});
        setSemesterSubjects(subjectArray);
        calculateNotation();
      }
    }
  }
  const calculateNotation = () => {
    var retVal = 0
    var sum = 0
    var sumWorth = 0
    console.log(semesterSubjects);
    for(var i = 0; i < semesterSubjects.length; i++){
      sum += semesterSubjects[i].subjectNotation * parseFloat(semesterSubjects[i].subjectWorth);
      sumWorth += parseFloat(semesterSubjects[i].subjectWorth);
    }
    console.log("sum", sum);
    console.log("sumWorth", sumWorth);
    retVal = sum/sumWorth;
    setSemesterNotation(retVal);
  }
  return (
    <Layout>
      <div className="bm-container">
        <h3>BM Notenrechner</h3>
        {subjects.map((sub, index) => (
          <Subject key={index} subject={sub} emitNotation={handleNotation} />
        ))}
        <div>
          <p>Semester ∅: {semesterNotation}</p>
        </div>
      </div>
    </Layout>
  )
};


export default BM
