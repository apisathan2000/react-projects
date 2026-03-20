import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://corsproxy.io/?https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  // const [currentJob, setCurrentJob] = useState({ duties: [] });
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async function () {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      // setCurrentJob(data[0] || { duties: [] });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const onSelect = function (id) {
  //   const selectedJob = jobs.find((item) => item.id === id);
  //   setCurrentJob(selectedJob);
  // };

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                className={index === value ? `job-btn active-btn` : `job-btn`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>

          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
