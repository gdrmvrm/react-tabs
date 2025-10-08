import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobDuties;
