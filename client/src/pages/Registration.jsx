import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/authSlice';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [experiences, setExperiences] = useState('');
    
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.status);

    const handleToggle = (r) => {
        setRole(r);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataToDispatch = {};
        if (password !== confirmPassword) {
            alert('A jelszó nem egyezik!');
            return;
        }
        if (role === '') {
            alert('Válassz típust!');
            return;
        }
        if (experiences === 'company' || experiences === '') {
            dataToDispatch = { email, password, role };
        }
        else {
            dataToDispatch = {email, password, role, experiences};
        }
        console.log(dataToDispatch);
        dispatch(register(dataToDispatch));
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Regisztráció</h3>
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
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Jelszó megerősítése</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                                {role === "jobseeker" && (
                                    <div className='form-group'>
                                        <label htmlFor='experiences'>Korábbi tapasztalatok</label>
                                        <div className='toggle-container'>
                                            <textarea
                                                className='form-control'
                                                id='experiences'
                                                rows={5}
                                                placeholder='Add meg korábbi munkatapasztalataidat soronként tördelve! (Példa: Dunder Mifflin;Full-stack fejlesztő;2022-)'
                                                value={experiences}
                                                onChange={(e) => setExperiences(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                )}
                                <button type="submit" className="btn btn-custom btn-block mt-3">
                                    Regisztráció
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
