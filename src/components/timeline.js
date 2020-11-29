import React from "react"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { IoSchoolSharp } from "react-icons/io5"
import { FaLaptopCode } from "react-icons/fa"
import "react-vertical-timeline-component/style.min.css"
import "../style/timeline.scss"

const Timeline = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "var(--primary)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  var(--primary)" }}
      date="August. 2019 - July. 2020"
      dateClassName="activedate"
      iconStyle={{ background: " var(--primary)", color: "#fff" }}
      icon={<FaLaptopCode />}
    >
      <h3 className="vertical-timeline-element-title">
        Intern Junior Software Engineer (Fullstack)
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Alpnach, OW, CH</h4>
      <p>
        Final year, studying software engineering in practice at Enhanzz AG.
      </p>
      <div className="technology">
        <p className="technology-title">Technologies used:</p>
        <p>Vue, C#, MySQL</p>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="August. 2016 - July. 2019"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Aarau, AG, CH</h4>
      <p>
        Computing College Alte Kanti Aarau (IMS). Studying software development
        with a vocational bachelor's degree in economics.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="August. 2012 - July. 2016"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Reinach, AG, CH </h4>
      <p>Higher secondary school (Bezirksschule) Reinach</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="August. 2011 -  July. 2012"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Beinwil am See, AG, CH</h4>
      <p>Lower secondary school (Sekundarschule) Beinwil am See</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="August 2010 - July. 2011"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Beinwil am See, AG, CH</h4>
      <p>
        5th grade in Beinwil am See primary school (5. Klasse der Primarschule)
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2008 - 2010"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Fulham, SW6, UK</h4>
      <p>3rd and 4th grade in Fulham Primary School. </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2006 - 2008"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Malters, LU, CH</h4>
      <p>1st and 2nd grade in Malters primary school.</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2006 - 2008"
      iconStyle={{ background: "var(--primary)", color: "#fff" }}
      icon={<IoSchoolSharp />}
    >
      <h3 className="vertical-timeline-element-title">Student</h3>
      <h4 className="vertical-timeline-element-subtitle">Lucerne, LU, CH</h4>
      <p>1st grade in Tribschen primary school.</p>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default Timeline
