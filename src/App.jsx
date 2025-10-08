import { useEffect, useState } from 'react';
import JobInfo from './component/JobInfo';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="job-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
