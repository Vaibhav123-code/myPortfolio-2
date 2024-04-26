import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import './education.css'

export default function Education() {
  return (
    <motion.div className='education-container'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5}}
    >
      <h2>Education</h2>
      <Timeline position="alternate-reverse"  >
        <TimelineItem >
          <TimelineSeparator  >
            <TimelineDot  />
            <TimelineConnector  />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <p>Full stack web-development course</p>
              <p>Institute : Acciojob (2022-2023)</p>
              <p>Certificate (MERN Stack)</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <p>Bachelor of Technology (2018-2022)</p>
              <p>Institute : Mahatma Gandhi chitrakoot gramodaya vidhyalaya</p>
              <p>Percentage: 76.5%</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <p>Higher Secondary- 2017</p>
              <p>Institute : Jawahar Navodaya Vidyalaya padmi mandla</p>
              <p>Percentage: 81%</p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <div>
              <p>High School - 2015</p>
              <p>Institute : Jawahar Navodaya Vidyalaya padmi mandla</p>
              <p>CGPA: 9.6</p>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}
