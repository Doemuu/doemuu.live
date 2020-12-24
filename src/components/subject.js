import React from "react"

import { BiCaretRight } from "react-icons/bi"

import { motion } from "framer-motion"


import "../style/subject.scss"

const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [value, setValue] = React.useState(
    defaultValue
  );

  React.useEffect(() => {
    if(localStorage.getItem(localStorageKey)){
      setValue(localStorage.getItem(localStorageKey));
    }
  }, [])


  React.useEffect(() => {
    if(window !== undefined){
      localStorage.setItem(localStorageKey, value);
    }
  }, [value]);

  return [value, setValue];
};

const Subject = (children) => {
  const [notation, setNotation] = useStateWithLocalStorage(
    `${children.subject.name}notation`, 0
  );
  const [worth, setWorth] = useStateWithLocalStorage(
    'worth', 100
  );
  const [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage', 4
  );
  const [marks, setMarks] = useStateWithLocalStorage(
    `myMarks${children.subject.name}`, []
  );
  const [expanded, setExpanded] = React.useState(false);
  const expandVariants = {
    isExpanded: { rotate: 90 },
    isNotExpanded: { rotate: 0 },
  }
  const handleClick = event => clearMark();
  const handleAddBiologyMark = event => addMark(value, worth);
  const onChange = event => checkInput(event);
  const handleExpansion = event =>{
    setExpanded(!expanded);
  }
  const handleRemoval = (index) => {
    var marksList = JSON.parse(marks);
    marksList.splice(index, 1);
    calculateNotation(marksList);
    setMarks(JSON.stringify(marksList));
  }
  const calculateNotation = markArray => {
    var retVal = 0;
    var sum = 0;
    var sumWorth = 0;
    for(var i = 0; i < markArray.length; i++){
      sum += parseFloat(markArray[i].notation)*parseFloat(markArray[i].worth);
      sumWorth += parseFloat(markArray[i].worth);
    }
    if(!markArray.length > 0){
      setNotation(1);
    }else{
      retVal = sum / sumWorth;
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
  const addMark = (mark, weight) => {
    var markArray = [];
    let markObject = {};
    if(marks.length === 0){
      markObject.id = 1;
      markObject.notation = mark;
      markObject.worth = weight;
      markArray.push(markObject);
      setMarks(JSON.stringify(markArray));
    }else{
      markArray = JSON.parse(marks);
      markObject.id = markArray.length+1;
      markObject.notation = mark;
      markObject.worth = weight;
      markArray.push(markObject);
      setMarks(JSON.stringify(markArray));
    }
    calculateNotation(markArray);
  }
  children.emitNotation(notation, children.subject);
  return (
      <div className="subject-container-box">
        <div className="subject-container d-flex flex-column ">
          <div className="subject">
            <div >
              <div className="subject-header d-flex justify-content-between">
                <div className="d-flex">
                  <motion.div
                    animate={expanded ? "isExpanded" : "isNotExpanded"}
                    variants={expandVariants}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                  >
                    <BiCaretRight onClick={handleExpansion}/>
                  </motion.div>
                  <span>{children.subject.name}</span>
                </div>
                <span className="notation">{notation}</span>
              </div>
            </div>
            <div>
              {marks.length > 0 && (
                <div className="mark-container d-flex">
                  {JSON.parse(marks).map((mark, index) => (
                    <div key={index} onClick={() => handleRemoval(index)} className="px-3">
                      <span>{mark.notation}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {expanded && (
          <div className="addForm d-flex flex-end align-items-end">
            <div className="markInput px-2 d-flex flex-column">
              <span>Note:</span>
              <input id="number-spinner" type="number" className="inputElement" value={value} onChange={onChange}/>
            </div>
            <div className="markInput px-2 d-flex flex-column">
              <span>Wert (in %):</span>
              <input id="number-worth" type="number" value={worth} onChange={onChange}/>
            </div>
            <div className="px-2">
              <button className="formBtn" onClick={handleAddBiologyMark}>+</button>
            </div>
          </div>
        )}
        <div className="px-2 markInput clearBtn">
          <button className="formBtn" onClick={handleClick}>Entfernen</button>
        </div>
      </div>
  );
};


export default Subject
