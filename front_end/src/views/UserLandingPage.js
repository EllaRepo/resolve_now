
import { useState, useEffect, useContext } from 'react'
import useAxios from "../utils/UtilAxios"
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'
const swal = require('sweetalert2')

function UserLandingPage() {

    const [res, setRes] = useState("")
    const [regData, setregData] = useState([])
    const [ctypes, setCtypes] = useState([])
    const [usrComplaints, setUsrComplaints] = useState({})
    const [usrCmptFetched, setusrCmptFetched] = useState(0)
    const [showTab, setShowTab] = useState(0)
    const api = useAxios();
    const token = localStorage.getItem("authTokens")
    const { registerComplaint } = useContext(AuthContext)

    const [compTitle, setCompTitle] = useState("")
    const [city, setCity] = useState("")
    const [subCity, setSubCity] = useState("")
    const [landmark, setLandmark] = useState("")
    const [region, setRegion] = useState("")
    const [compType, setCompType] = useState("")
    const [compSev, setCompSev] = useState("")
    const [desc, setDesc] = useState("")


    if (token) {
        const decode = jwtDecode(token)
        var email = decode.email
        var user_id = decode.user_id
        var username = decode.username
        var full_name = decode.full_name
        var phone_no = decode.phone
    }
    const alerUser = data => {
        swal.fire({
            title: "Please select " + data,
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        if (region === "default")
            alerUser("region")
        else if (compType === "default")
            alerUser("complaint type")
        else if (compSev === "default")
            alerUser("region")
        else
            registerComplaint(email, username, compTitle, city, subCity, landmark, region, compType, compSev, desc)
    }

    const fetchUserComplaints = async () => {
        try {
            const response = await api.get(`/complaints/${email}`)
            setUsrComplaints(response.data.response)
            setusrCmptFetched(1)
        } catch (error) {
            setRes("Something went wrong")
        }
    }

    const handleTab = (e) => {
        setShowTab(e)
        if (e === 1)
            setRes("Post a complaint")
        else if (e === 2) {
            fetchUserComplaints()
            setRes("My Complaints")
        }
        else if (e === 3)
            setRes("My Profile")
    }
    useEffect(() => {

        const fetchRegionsData = async () => {
            try {
                const response = await api.get("/region/")
                setregData(response.data.response)
            } catch (error) {
                setRes("Something went wrong")
            }
        }
        const fetchCompTypesData = async () => {
            try {
                const response = await api.get("/ctypes/")
                setCtypes(response.data.response)
            } catch (error) {
                setRes("Something went wrong")
            }
        }
        fetchCompTypesData()
        fetchRegionsData()

    }, [])


    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const response = await api.post("/test/")
            } catch (error) {
                console.log(error);
                setRes("Something went wrong")
            }
        }
        fetchPostData()
    }, [])


    return (
        <div>
            <>
                <div className="container-fluid" style={{ paddingTop: "100px" }}>
                    <div className="row">
                        <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-4">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column ">
                                    <li className="nav-item mb-2 mt-2">
                                        <button className={showTab === 1 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={() => handleTab(1)}>
                                            Report Complaint
                                        </button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <button className={showTab === 2 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={() => handleTab(2)}>
                                            Check Status
                                        </button>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <button className={showTab === 3 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={() => handleTab(3)}>
                                            My Profile
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                                <h1 className="h2">User Dashboard</h1>
                                <span>Hello {username}!</span>
                            </div>
                            <div className='alert alert-success'>
                                <strong>{res}</strong>
                            </div>
                            <div className='tab-content container'>
                                <div className={showTab === 1 ? "tab-pane fade show ml-5 active" : "tab-pane fade show"}>
                                    <div className="col-md-6 col-lg-7 d-flex justify-center">
                                        <div className="card-body p-4 p-lg-5 text-black usr_art ">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Complaint Tile"
                                                        onChange={e => setCompTitle(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="City"
                                                        onChange={e => setCity(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Sub City"
                                                        onChange={e => setSubCity(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Landmark"
                                                        onChange={e => setLandmark(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <select
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        onChange={e => setRegion(e.target.value)}
                                                        required
                                                    >
                                                        <option value="default" selected>
                                                            <p className="text-bg-dark">Select Region</p>
                                                        </option>
                                                        {
                                                            regData.map((reg) => (
                                                                <option value="{reg}">{reg}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <select
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        onChange={e => setCompType(e.target.value)}
                                                        required
                                                    >
                                                        <option value="default" selected>Select Complaint type</option>
                                                        {
                                                            ctypes.map((ctype) => (
                                                                <option value="{ctype}">{ctype}</option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <select
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        onChange={e => setCompSev(e.target.value)}
                                                        required
                                                    >
                                                        <option value="default" selected>Select Complaint severity</option>
                                                        <option value="Critical" >Critical</option>
                                                        <option value="High">High</option>
                                                        <option value="Medium">Medium</option>
                                                        <option value="Low">Low</option>
                                                        <option value="Informational">Informational</option>
                                                    </select>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <textarea
                                                        type="text"
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        placeholder="Description"
                                                        onChange={e => setDesc(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button
                                                        className="btn btn-dark btn-lg btn-block"
                                                        type="submit"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className={showTab === 2 ? "tab-pane fade show active" : "tab-pane fade show"}>
                                    {
                                        usrCmptFetched && (
                                            <section className="usr_comps">

                                                {
                                                    usrComplaints.map((object) =>
                                                        <article className="usr_art">
                                                            <div className="headline">
                                                                <h2>Complaint id: {object['id']} </h2>
                                                                <div className="comp_status">{object['status']}</div>
                                                            </div>
                                                            <div className="comp_detail">
                                                                <p>Complaint Title: {object['compTitle']}</p>
                                                                <p>City: {object['city']}</p>
                                                                <p>Sub-city: {object['subCity']}</p>
                                                                <p>Region: {object['region']} </p>
                                                                <p>Complaint Type: {object['compType']} </p>
                                                                <p>Complaint Severity: {object['compSev']}</p>
                                                            </div>
                                                            <hr />
                                                        </article>
                                                    )
                                                }
                                            </section>)
                                    }
                                </div>
                                <div className={showTab === 3 ? "tab-pane fade show active" : "tab-pane fade show"}>
                                    <section className="usr_comps">
                                        <article className="usr_art">
                                            <div className="headline">
                                                <h2>User Profile</h2>
                                            </div>
                                            <div className="comp_detail">
                                                <p>Full name: {full_name}</p>
                                                <p>Username: {username}</p>
                                                <p>email: {email}</p>
                                                <p>Phone no: {phone_no} </p>
                                            </div>
                                            <hr />
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                {/* Bootstrap core JavaScript
    ================================================== */}
                {/* Placed at the end of the document so the pages load faster */}
                {/* Icons */}
                {/* Graphs */}
            </>

        </div>
    )
}

export default UserLandingPage