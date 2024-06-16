import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = ({ jobsData }) => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === Number(id));
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [hasApplied, setHasApplied] = useState(false);

  if (!job) {
    return <div className="container mt-5">Álláshirdetés nem található.</div>;
  }

  const handleApply = () => {
    setHasApplied(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{job.title}</h2>
      <p><strong>Fizetési sáv:</strong> {job.salaryRange}</p>
      <p><strong>Foglalkoztatottság típusa:</strong> {job.type}</p>
      <p><strong>Település:</strong> {job.location}</p>
      <p><strong>Home-office lehetőség:</strong> {job.homeOffice ? 'Igen' : 'Nem'}</p>
      {isLoggedIn && !hasApplied && (
        <button className="btn btn-primary mt-3" onClick={handleApply}>Jelentkezés</button>
      )}
      {hasApplied && (
        <div className="alert alert-success mt-3" role="alert">
          Jelentkezés elküldve!
        </div>
      )}
    </div>
  );
};

export default JobDetail;
