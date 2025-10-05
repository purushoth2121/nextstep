import React, { useEffect, useState } from "react";
import { Job } from "../../types";  
import "./applyedjob.css";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("appliedJobs");
    if (stored) {
      try {
        const parsed: Job[] = JSON.parse(stored);
        setAppliedJobs(parsed);
      } catch (err) {
        console.error("Failed to parse applied jobs from localStorage:", err);
      }
    }
  }, []);

  return (
    <div className="applied-jobs-container">
      <h2 style={{textAlign:"center"}}>Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p>You have not applied to any jobs yet.</p>
      ) : (
        <div className="jobs-list">
          {appliedJobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Skills:</strong> {job.skills}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
