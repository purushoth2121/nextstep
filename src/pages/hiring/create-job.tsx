import React, { useState } from "react";
import "./createjob.css";

const Createjob: React.FC = () => {
  const [jobData, setJobData] = useState<any>({
    title: "",
    company: "",
    location: "",
    skills: "",
    salary: "",
    description: "",
  });
  const handleChange = (e: any) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const existingJobs = JSON.parse(localStorage.getItem("jobs") || "[]");

    existingJobs.push(jobData);
    localStorage.setItem("jobs", JSON.stringify(existingJobs));
    alert("Job created successfully1");
    setJobData({
      title: "",
      company: "",
      location: "",
      skills: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div className="createjob-container">
      <div className="create-job">
      <h2 className="title">Create Job</h2>
      <form className="createjob-form" onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            name="title"
            placeholder="e.g. Frontend Developer"
            value={jobData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            value={jobData.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location:
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            value={jobData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Skills Required:
          <input
            type="text"
            name="skills"
            placeholder="e.g. React, Node.js"
            value={jobData.skills}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Salary:
          <input
            type="text"
            name="salary"
            placeholder="e.g. 8 LPA"
            value={jobData.salary}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            placeholder="Write job description"
            value={jobData.description}
            onChange={handleChange}
            rows={4}
          />
        </label>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
      </div>
    </div>
  );
};

export default Createjob;