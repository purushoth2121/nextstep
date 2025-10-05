import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Job } from "../../types";

const Jobseekerhome = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  const handleApply = (job: Job) => {
    const applied = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

    if (!applied.some((j: Job) => j.title === job.title && j.company === job.company)) {
      localStorage.setItem("appliedJobs", JSON.stringify([...applied, job]));
    }
    navigate("/applied");
  };

  return (
    <div className="jobseekerhome-container">
      <h2 style={{ color: "red" }}>Choose Your Career</h2>
      <div className="jobseeker-home">
        {jobs.length === 0 ? (
          <p>No jobs available. Please check back later.</p>
        ) : (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p>{job.description}</p>
              <button onClick={() => handleApply(job)}>Apply</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jobseekerhome;
