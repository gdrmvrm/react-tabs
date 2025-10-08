import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div key={uuid()} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default JobDuties;
