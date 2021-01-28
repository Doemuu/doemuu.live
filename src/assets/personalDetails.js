import React from "react"
import {
  BsFillPersonFill,
  BsFillHouseDoorFill,
} from "react-icons/bs"
import { TiLocation } from "react-icons/ti"
import { FaBirthdayCake } from "react-icons/fa"

const personalDetails = {
  title: "personal details",
  details: [
    {
      icon: <BsFillPersonFill size={36} className="pt-1 icon" />,
      text: "Dominik",
      textTwo: "Berger",
    },
    {
      icon: <TiLocation size={36} className="pt-1 icon" />,
      text: "Büttenen",
      textTwo: "6006 Lucerne",
    },
    {
      icon: <FaBirthdayCake size={32} className="pt-1 icon" />,
      text: "12. September 2000",
      textTwo: "Adligenswil LU",
    },
    {
      icon: <BsFillHouseDoorFill size={32} className="pt-1 icon" />,
      text: "Oberlangenegg",
      textTwo: "(BE)",
    },
  ],
}

export default personalDetails;
