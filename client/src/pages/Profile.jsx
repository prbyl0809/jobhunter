import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUserInfoQuery } from '../store/authApiSlice';
import { logout } from '../store/authSlice';

const Profile = () => {
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user?.id);
  const { data: userInfo } = useGetUserInfoQuery({ userId, token });


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Profilom</h3>
                <div>
                  <p><strong>Név:</strong> {userInfo?.name}</p>
                  <p><strong>Email:</strong> {userInfo?.email}</p>
                  <p><strong>Státusz:</strong> {userInfo?.role}</p>
                  <p><strong>Tapasztalatok:</strong></p>
                  <ul>
                    {userInfo?.experiences.map((exp) => (
                      <li key={exp.id}>{exp.company}: {exp.position} ({exp.from} - {exp.to})</li>
                    ))}
                  </ul>
                </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
