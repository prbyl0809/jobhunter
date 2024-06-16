import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.role);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Jobhunter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Főoldal</a>
            </li>
            {!token && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Bejelentkezés</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Regisztráció</a>
                </li>
              </>
            )}
            {token && userRole === 'jobseeker' && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profilom</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => dispatch(logout())} className="nav-link" href="/">Kijelentkezés</a>
                </li>
              </>
            )}
            {token && userRole === 'company' && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profilom</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/add-job">Álláshirdetés hozzáadása</a>
                </li>
                <li className="nav-item">
                  <a onClick={() => dispatch(logout())} className="nav-link" href="/">Kijelentkezés</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
