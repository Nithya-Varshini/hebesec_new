import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './achievement.css';

export default function Establishment() {
    return(
        <>
        <br></br>
        <br></br>
        <div className="big_font values_head">Achievement</div>
        <VerticalTimeline lineColor={"black"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            date="2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Established Hebesec Security Labs in India

            </h3>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="AUG 2020"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Established Hebesec Security Labs in India</h3>
            
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="FEB 2021"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Partnered with CompTIA</h3>   
            
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="APR 2022"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Collaborated with Unirazzak Indian community</h3>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="MAR 2023"
            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            //    icon={<WorkIcon />}
        >
            <h3 className="vertical-timeline-element-title">Commenced Vidhyaa Giri HebeSec Skill Center for IT/Cybersecurity in Karaikudi.</h3>
        
        </VerticalTimelineElement>
        </VerticalTimeline>
        </>
    );
}

