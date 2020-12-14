import React from "react"
import Layout from "../components/layout"

import { BiCaretRight } from "react-icons/bi"

import "../style/bm.scss"

const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || defaultValue
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const BM = () => {
  const [notation, setNotation] = useStateWithLocalStorage(
    'notation', 0
  );
  const [worth, setWorth] = useStateWithLocalStorage(
    'worth', 100
  );
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage', 4
  );
  const [marks, setMarks] = useStateWithLocalStorage(
    'myMarks', []
  );
  const handleClick = event => clearMark();
  const handleAddBiologyMark = event => addMark("biology", value, worth);
  const onChange = event => checkInput(event);
  const handleRemoval = (index) => {
    var marksList = JSON.parse(marks);
    marksList.splice(index, 1);
    console.log(marksList);
    calculateNotation(marksList);
    setMarks(JSON.stringify(marksList));
    console.log(marks);
  }
  const calculateNotation = markArray => {
    var retVal = 0;
    var sum = 0;
    var sumWorth = 0;

    for(var i = 0; i < markArray.length; i++){
      sum += parseFloat(markArray[i].notation)*parseFloat(markArray[i].worth);
      sumWorth += parseFloat(markArray[i].worth);
    }
    retVal = sum / sumWorth;
    if(retVal === "NaN"){
      setNotation(1);
    }else{
      setNotation(Math.round(retVal * 100) / 100);
    }
  }
  const getMarks = () => {
    return JSON.parse(marks);
  }
  const checkInput = event => {
    if(event.target.id === "number-spinner"){
      if(event.target.value > 6 || event.target.value < 1){
        setValue("");
      }else{
        setValue(event.target.value);
      }
    }else{
      if(event.target.value < 1){
        setWorth("")
      }else{
        setWorth(event.target.value);
      }
    }
  }
  const clearMark = () => {
    setMarks([]);
    setNotation(0)
  }
  const addMark = (subject, mark, weight) => {
    var markArray = [];
    let markObject = {};
    if(marks.length === 0){
      markObject.id = 1;
      markObject.subject = subject;
      markObject.notation = mark;
      markObject.worth = weight;
      markArray.push(markObject);
      setMarks(JSON.stringify(markArray));
    }else{
      markArray = JSON.parse(marks);
      markObject.id = markArray.length+1;
      markObject.subject = subject;
      markObject.notation = mark;
      markObject.worth = weight;
      markArray.push(markObject);
      setMarks(JSON.stringify(markArray));
    }
    calculateNotation(markArray);
  }
  return (
    <Layout>
      <div>
        <p>BM</p>
        <div className="subject-container d-flex flex-column ">
          <div className="subject">
            <div className="subject-header d-flex justify-content-between">
              <div>
                <BiCaretRight/>
                <span>Biology</span>
              </div>
              <span className="notation">{notation}</span>
            </div>
            <div>
              {marks.length > 0 && (
                <div className="mark-container d-flex">
                  {JSON.parse(marks).map((mark, index) => (
                    <div onClick={() => handleRemoval(index)} className="px-3">
                      <span>{mark.notation}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <input id="number-spinner" type="number" value={value} onChange={onChange}/>
        <input id="number-worth" type="number" value={worth} onChange={onChange}/>
        <button onClick={handleAddBiologyMark}>Add</button>
          <div>
            <button onClick={handleClick}>Yeet form</button>
          </div>
      </div>
    </Layout>
  );
};


export default BM
