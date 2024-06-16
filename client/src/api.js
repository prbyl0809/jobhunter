import axios from 'axios';

const API_URL = 'http://localhost:3030';

const api = axios.create({
  baseURL: API_URL,
});

// User endpoints
export const registerUser = async (data) => {
  try {
    const response = await api.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error.response.data);
    throw error;
  }
};

export const authenticateUser = async (data) => {
  try {
    const response = await api.post('/users/authenticate', data);
    return response.data;
  } catch (error) {
    console.error('Error during authentication:', error.response.data);
    throw error;
  }
};

export const getUserInfo = async (userId, token) => {
  try {
    const response = await api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error.response.data);
    throw error;
  }
};

// Experience endpoints
export const getUserExperiences = async (token) => {
  try {
    const response = await api.get('/experiences', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user experiences:', error.response.data);
    throw error;
  }
};

export const addExperiences = async (data, token) => {
  try {
    const response = await api.post('/experiences', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding experiences:', error.response.data);
    throw error;
  }
};

export const modifyExperience = async (experienceId, data, token) => {
  try {
    const response = await api.put(`/experiences/${experienceId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error modifying experience:', error.response.data);
    throw error;
  }
};

export const deleteExperience = async (experienceId, token) => {
  try {
    const response = await api.delete(`/experiences/${experienceId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting experience:', error.response.data);
    throw error;
  }
};

// Job endpoints
export const getAllJobs = async (params) => {
  try {
    const response = await api.get('/jobs', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error.response.data);
    throw error;
  }
};

export const createJob = async (data, token) => {
  try {
    const response = await api.post('/jobs', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating job:', error.response.data);
    throw error;
  }
};

export const modifyJob = async (jobId, data, token) => {
  try {
    const response = await api.put(`/jobs/${jobId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error modifying job:', error.response.data);
    throw error;
  }
};

export const deleteJob = async (jobId, token) => {
  try {
    const response = await api.delete(`/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting job:', error.response.data);
    throw error;
  }
};

// Applicant endpoints
export const applyForJob = async (jobId, data, token) => {
  try {
    const response = await api.post(`/applicants/${jobId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error applying for job:', error.response.data);
    throw error;
  }
};

export const removeApplication = async (jobId, token) => {
  try {
    const response = await api.delete(`/applicants/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error removing application:', error.response.data);
    throw error;
  }
};

export const getApplicantsForJob = async (jobId, token) => {
  try {
    const response = await api.get(`/applicants/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching applicants for job:', error.response.data);
    throw error;
  }
};

export const getJobsForApplicant = async (token) => {
  try {
    const response = await api.get('/applicants', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs for applicant:', error.response.data);
    throw error;
  }
};
