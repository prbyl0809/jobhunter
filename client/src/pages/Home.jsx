import React, { useState } from 'react';
import JobModal from '../components/JobModal';

const Home = ({ jobsData }) => {
  const [name, setName] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [homeOffice, setHomeOffice] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFilter = () => {
    return jobsData.filter(job => {
      const [minJobSalary, maxJobSalary] = job.salaryRange.split('-').map(Number);
      const minSalaryNum = minSalary ? Number(minSalary) : 0;
      const maxSalaryNum = maxSalary ? Number(maxSalary) : Infinity;

      return (
        (name ? job.title.toLowerCase().includes(name.toLowerCase()) : true) &&
        (minSalary ? minJobSalary >= minSalaryNum : true) &&
        (maxSalary ? maxJobSalary <= maxSalaryNum : true) &&
        (jobType ? job.type === jobType : true) &&
        (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
        (homeOffice ? job.homeOffice === homeOffice : true)
      );
    });
  };

  const handleShowModal = (job) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  const filteredJobs = handleFilter();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Álláslehetőségek</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Szűrők</h5>
          <form className="row g-3">
            <div className="col-md-3">
              <label htmlFor="name" className="form-label">Név</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="minSalary" className="form-label">Minimális fizetés</label>
              <input
                type="number"
                className="form-control"
                id="minSalary"
                value={minSalary}
                min="0"
                onChange={(e) => setMinSalary(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="maxSalary" className="form-label">Maximális fizetés</label>
              <input
                type="number"
                className="form-control"
                id="maxSalary"
                value={maxSalary}
                min={minSalary}
                onChange={(e) => setMaxSalary(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="jobType" className="form-label">Foglalkoztatottság típusa</label>
              <select className="form-select" id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)}>
                <option value="">Mind</option>
                <option value="full-time">Teljes munkaidő</option>
                <option value="part-time">Részmunkaidő</option>
                <option value="internship">Gyakornok</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="location" className="form-label">Település</label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-md-3 d-flex align-items-end">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="homeOffice"
                  checked={homeOffice}
                  onChange={(e) => setHomeOffice(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="homeOffice">Home-office lehetőség</label>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div className="col-md-4 mb-4" key={job.id} onClick={() => handleShowModal(job)}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">Fizetési sáv: {job.salaryRange}</p>
                  <p className="card-text">Foglalkoztatottság típusa: {job.type === "full-time" ? "Teljes munkaidő" : job.type === "part-time" ? "Részmunkaidő" : "Gyakornok"}</p>
                  <p className="card-text">Település: {job.location}</p>
                  <p className="card-text">Home-office lehetőség: {job.homeOffice ? 'Igen' : 'Nem'}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Nincsenek találatok a megadott szűrők alapján.</p>
        )}
      </div>

      {selectedJob && (
        <JobModal show={selectedJob !== null} onClose={handleCloseModal} job={selectedJob} />
      )}
    </div>
  );
};

export default Home;
