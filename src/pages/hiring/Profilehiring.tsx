import React, { useState, useEffect,} from "react";
import "./profile.css";
import {ProfileData} from "../../types"

const Profilehiring = () => {
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    number: "",
    role: "",
    experience: "",
    company: "",
    skills: "",
    salary: "",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profileHiring");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e:any) => {
    e.preventDefault();
    localStorage.setItem("profileHiring", JSON.stringify(profile));
    alert("Profile saved successfully!");
  };

  const handleDelete = () => {
    setProfile({
      name: "",
      number: "",
      role: "",
      experience: "",
      company: "",
      skills: "",
      salary: "",
    });
    localStorage.removeItem("profileHiring");
  };

  return (
    <div className="profile-container">
      <form className="createjob-form" onSubmit={handleSave}>
       <h3>Profile</h3>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number
          <input
            type="number"
            name="number"
            placeholder="eg: 9687549922"
            value={profile.number}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Role
          <input
            type="text"
            name="role"
            placeholder="eg: Hiring"
            value={profile.role}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Experienced
          <input
            type="number"
            name="experience"
            placeholder="years of experience"
            value={profile.experience}
            onChange={handleChange}
          />
        </label>

        <label>
          Previous Company
          <input
            type="text"
            name="company"
            placeholder="your previous company name"
            value={profile.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Skills
          <input
            type="text"
            name="skills"
            placeholder="e.g. React, Node.js"
            value={profile.skills}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Salary
          <input
            type="text"
            name="salary"
            placeholder="your last salary"
            value={profile.salary}
            onChange={handleChange}
          />
        </label>

        <div style={{ marginTop: 10 }}>
          <button type="submit" className="save">Save</button>
          <button type="button" className="delete" onClick={handleDelete} style={{ marginLeft: 10 }}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profilehiring;