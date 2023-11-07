import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'


const navigateToAdmin = () => {
    window.location.replace('http://127.0.0.1:8000/admin');
};

function Navbar() {

    const { logoutUser } = useContext(AuthContext)
    const token = localStorage.getItem("authTokens")

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark py-0">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img style={{ width: "120px", padding: "6px" }} src="https://i.imgur.com/Sjp5Whx.png" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            {token === null &&
                                <>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">User</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/insp_login">Inspector</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="#" onClick={navigateToAdmin}>Admin</Link>
                                    </li>
                                </>
                            }

                            {token !== null &&
                                <>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/dashboard">Dashboard</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" onClick={logoutUser} style={{ cursor: "pointer" }}>Logout</a>
                                    </li>
                                </>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar