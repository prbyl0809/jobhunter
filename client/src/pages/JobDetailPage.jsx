import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetJobQuery, useApplyForJobMutation } from '../features/api/apiSlice';

const JobDetailPage = () => {
  const { id } = useParams();
  const { data: job, error, isLoading } = useGetJobQuery(id);
  const [applyForJob] = useApplyForJobMutation();

  const handleApply = async () => {
    await applyForJob(id).unwrap();
    alert('Sikeres jelentkezés!');
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading job details</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <button onClick={handleApply}>Jelentkezés</button>
    </div>
  );
};

export default JobDetailPage;
