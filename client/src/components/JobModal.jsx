import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JobModal.css';

const JobModal = ({ show, onClose, job }) => {
    const navigate = useNavigate();

    if (!show) {
        return null;
    }

    const handleDetailNavigation = () => {
        navigate(`/job/${job.id}`);
        onClose(); 
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{job.title}</h5>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    <p>Fizetési sáv: {job.salaryRange}</p>
                    <p>Foglalkoztatottság típusa: {job.type === "full-time" ? "Teljes munkaidő" : job.type === "part-time" ? "Részmunkaidő" : "Gyakornok"}</p>
                    <p>Település: {job.location}</p>
                    <p>Home-office lehetőség: {job.homeOffice ? 'Igen' : 'Nem'}</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleDetailNavigation}>
                        Részletek megtekintése
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobModal;
