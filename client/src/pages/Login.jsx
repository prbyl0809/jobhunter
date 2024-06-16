import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/authSlice';
import { useLoginUserMutation } from '../store/authApiSlice';

const Login = (handleLogin) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleToggle = (r) => {
    setRole(r);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password, role };
    console.log('Submitting login data:', userData);
    try {
      const result = await loginUser(userData).unwrap();
      console.log('Login successful:', result);
      dispatch(login(result));
    } catch (err) {
      console.error('Failed to login:', err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Bejelentkezés</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email cím</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Jelszó</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor="selectRole">Profil típusa</label>
                  <div className="toggle-container">
                    <div className={`toggle-div ${role === "jobseeker" ? 'active' : ''}`} onClick={() => handleToggle("jobseeker")}>
                      Munkavállaló
                    </div>
                    <div className={`toggle-div ${role === "company" ? 'active' : ''}`} onClick={() => handleToggle("company")}>
                      Munkáltató
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom btn-block mt-3">
                  Bejelentkezés
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
