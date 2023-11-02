
import {useState, useEffect, useContext} from 'react'
import useAxios from "../utils/UtilAxios"
import { jwtDecode } from 'jwt-decode'
import AuthContext from '../context/AuthContext'

function UserLandingPage() {

    const [res, setRes] = useState("")
    const [regRadioData, setregRadioData] = useState("")
    const [showTab, setShowTab] = useState(0)
    const api = useAxios();
    const token = localStorage.getItem("authTokens")
    const {registerUser} = useContext(AuthContext)

    const [compTitle, setCompTitle] = useState("")
    const [city, setCity] = useState("")
    const [subCity, setSubCity] = useState("")
    const [landmark, setLandmark] = useState("")
    const [region, setRegion] = useState("")
    const [compType, setCompType] = useState("")
    const [compSev, setCompSev] = useState("")
    const [desc, setDesc] = useState("")

    const handleTab = (e) => {
        setShowTab(e)
    }
    
    const handleSubmit = async e => {
        e.preventDefault()
        registerUser(compTitle, city, subCity, landmark, region, compType, compSev, desc)
    }

    if (token){
      const decode = jwtDecode(token)
      var email = decode.email
      var user_id = decode.user_id
      var username = decode.username
      var full_name = decode.full_name
      var image = decode.image

    }


    useEffect(() => {
        const fetchUserComplaints = async () => {
            try{
                const response = await api.get(`/complaints/${email}`)
                setregRadioData(response.data.response)
                setRes(response.data.response)
            } catch (error) {
                console.log(error);
                setRes("Something went wrong")
            }  
        }
        const fetchRegionsData = async () => {
            try{
            const response = await api.get("/region/")
            setregRadioData(response.data.response)
            setRes(response.data.response)
            } catch (error) {
            console.log(error);
            setRes("Something went wrong")
            }
        }
        const fetchCompTypesData = async () => {
            try{
            const response = await api.get("/ctypes/")
            setregRadioData(response.data.response)
            setRes(response.data.response)
            } catch (error) {
            console.log(error);
            setRes("Something went wrong")
            }
        }
        fetchCompTypesData()
        fetchRegionsData()
        fetchUserComplaints()
    }, [])

    
    useEffect(() => {
      const fetchPostData = async () => {
        try{
          const response = await api.post("/test/")
          setRes(response.data.response)
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
                <button className= { showTab===1 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={()=>handleTab(1) }>
                    Report Complaint
                </button>
            </li>
            <li className="nav-item mb-2">
                <button className= { showTab===2 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={()=>handleTab(2) }>
                    Check Status
                </button>
            </li>
            <li className="nav-item mb-2">
                <button className= { showTab===3 ? "nav-link btn-success btn-lg active" : "nav-link btn-primary btn-lg"} onClick={()=>handleTab(3) }>
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
        <div className='tab-content '>
            <div className={ showTab===1 ? "tab-pane fade show ml-5 active" : "tab-pane fade show"}>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                                className="fas fa-cubes fa-2x me-3"
                                style={{ color: "#ff6219" }}
                            />
                            <span className="h2 fw-bold mb-0">
                                Register <b>Complaint</b>
                            </span>
                            </div>
                            <div className="form-outline mb-4">
                            <input
                                type="email"
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
                            <input
                                type="dro"
                                id="form2Example27"
                                className="form-control form-control-lg"
                                placeholder="Region"
                                onChange={e => setDesc(e.target.value)}
                                required
                            />
                            </div>
                            <div className="form-outline mb-4">
                            <input
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
            <div className={ showTab===2 ? "tab-pane fade show active" : "tab-pane fade show"}>
                Status
            </div>
            <div className={ showTab===3 ? "tab-pane fade show active" : "tab-pane fade show"}>
               Profile
            </div>
        </div>
        <div className="table-responsive ">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>dapibus</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>Nulla</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>nibh</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>sagittis</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>Fusce</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>augue</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>massa</td>
                <td>Vestibulum</td>
                <td>lacinia</td>
                <td>arcu</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>eget</td>
                <td>nulla</td>
                <td>Class</td>
                <td>aptent</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>taciti</td>
                <td>sociosqu</td>
                <td>ad</td>
                <td>litora</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>torquent</td>
                <td>per</td>
                <td>conubia</td>
                <td>nostra</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>per</td>
                <td>inceptos</td>
                <td>himenaeos</td>
                <td>Curabitur</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>sodales</td>
                <td>ligula</td>
                <td>in</td>
                <td>libero</td>
              </tr>
            </tbody>
          </table>
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