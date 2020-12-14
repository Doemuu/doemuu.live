import React from "react"
import Layout from "../components/layout"
import Subject from "../components/subject"

import { BiCaretRight } from "react-icons/bi"

import "../style/bm.scss"


const BM = () => {
  const subjects = [
    {id: 1, name: "Biology"},
    {id: 2, name: "Chemistry"}
  ]
  return (
    <Layout>
      <div>
        {subjects.map((sub, index) => (
          <Subject key={index} children={sub}/>
        ))}
      </div>
    </Layout>
  );
};


export default BM
