import React, {} from "react";
import "./Experience.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

//code from here https://www.npmjs.com/package/react-vertical-timeline-component

function Experience() {
 

  return (
    <div className="<Exprience>">
      <h1>Exprience</h1>
      <VerticalTimeline>
      <VerticalTimelineElement
           className="vertical-timeline-element--work"
           contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
           contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
           date="June 2024 – Present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000', textAlign: 'center', lineHeight: '48px', fontSize: '24px' }} // Adjust icon style
          icon={<i className="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Freelancer</h3>
          <h4 className="vertical-timeline-element-subtitle">Vienna</h4>
          <p>Specialize in creating diverse applications, including dynamic websites and mobile apps.<br />
             Deliver tailored solutions leveraging expertise to exceed client expectations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background:'rgb(233, 30, 99)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="September 2022 – Present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000', textAlign: 'center', lineHeight: '48px', fontSize: '24px' }} // Adjust icon style
          icon={<i className="fas fa-school"></i>}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Computer Science and Digital Communications</h3>
          <h4 className="vertical-timeline-element-subtitle">FH-Campus | Vienna</h4>
          <p>Specialized in AI and Mobile App development.</p>
        </VerticalTimelineElement>
  <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="August 2021 – September 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000', textAlign: 'center', lineHeight: '48px', fontSize: '24px' }} // Adjust icon style
          icon={<i className="fas fa-briefcase"></i>}
  >
   <h3 className="vertical-timeline-element-title">Full-Stack Developer, Project Manager</h3>
          <h4 className="vertical-timeline-element-subtitle">PR-Data GmbH | Vienna</h4>
          <p>Lead and implemented a web application for recording the noninvasive ventilation therapy Patients with obstructive sleep apnea using Django.<br />
             Successfully delivered all requirements to the client which led to the continuation of the partnership.
          </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background:'rgb(233, 30, 99)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="September 2017 – June 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#000', textAlign: 'center', lineHeight: '48px', fontSize: '24px' }} // Adjust icon style
    icon={<i className="fas fa-school"></i>}
  >
    <h3 className="vertical-timeline-element-title">Matura</h3>
          <h4 className="vertical-timeline-element-subtitle">HTL Spengergasse | Vienna</h4>
          <p>Department of Biomedicine and Healthtech</p>
  </VerticalTimelineElement>

</VerticalTimeline>
      
    </div>
  );
}

export default Experience;