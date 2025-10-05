import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Job } from "../../types";
import "./dashboards.css";

const Dashboards = ()=> {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      try {
        const parsed = JSON.parse(storedJobs);
        if (Array.isArray(parsed)) {
          setJobs(parsed);
        }
      } catch (err) {
        console.error("Error parsing jobs from localStorage:", err);
      }
    }
  }, []);

  const handleApply = (job: Job) => {
    const applied = JSON.parse(localStorage.getItem("appliedJobs") || "[]");
    if (!Array.isArray(applied)) {
      console.warn("appliedJobs in localStorage is not an array. Resetting.");
    }
    const appliedArr: Job[] = Array.isArray(applied) ? applied : [];

    const already = appliedArr.find(
      (j: Job) => j.title === job.title && j.company === job.company
    );
    if (!already) {
      appliedArr.push(job);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedArr));
    }
    navigate("/applied");
  };

  const filteredJobs = jobs.filter((job) => {
    const titleLower = job.title?.toLowerCase() ?? "";      // if undefined, fallback to empty string
    const skillsLower = job.skills?.toLowerCase() ?? "";
    const searchLower = search.toLowerCase();

    return (
      titleLower.includes(searchLower) ||
      skillsLower.includes(searchLower)
    );
  });

  return (
    <div className="jobseekerhome-container">
      <div className="search-box">
        <input
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="jobseeker-home">
        {filteredJobs.length === 0 ? (
          <p>No jobs available. Please check back later.</p>
        ) : (
          filteredJobs.map((job, index) => (
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

export default Dashboards;
