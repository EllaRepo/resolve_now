import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import useAxios from "../utils/UtilAxios"


function InspLoginPage() {
    const api = useAxios();
    const { loginInspector } = useContext(AuthContext)
    const [regData, setregData] = useState([])
    const [ctypes, setCtypes] = useState([])
    const [region, setRegion] = useState("")
    const [sector, setCompType] = useState("")
    

    useEffect(() => {
        const fetchRegionsData = async () => {
            try {
                const response = await api.get("/region/")
                setregData(response.data.response)
            } catch (error) {
                setregData(['Addis Ababa'])
                console.log("Something went wrong")
            }
        }
        const fetchCompTypesData = async () => {
            try {
                const response = await api.get("/ctypes/")
                setCtypes(response.data.response)
            } catch (error) {
                setCtypes(['Water'])
                console.log("Something went wrong")
            }
        }
        fetchCompTypesData()
        fetchRegionsData()
    }, [])

    
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginInspector(email, password, region, sector)
    }

    return (
        <div>
            <>
                <section className="vh-75" style={{ backgroundImage: 'url("https://i.imgur.com/L13U17Q.png")' }}>
                    <div className="container py-5 h-75">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-8">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img
                                                src="https://i.imgur.com/zUImVAB.png"
                                                alt="login form"
                                                className="img-fluid pt-5"
                                                style={{ borderRadius: "1rem 0 0 1rem" }}
                                            />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <i
                                                            className="fas fa-cubes fa-2x me-3"
                                                            style={{ color: "#ff6219" }}
                                                        />
                                                        <div className="d-flex align-items-center mb-3 pb-1">
                                                            <i
                                                                className="fas fa-cubes fa-2x me-3"
                                                                style={{ color: "#ff6219" }}
                                                            />
                                                            <span className="h2 fw-bold mb-0">Welcome back 👋</span>
                                                        </div>
                                                    </div>
                                                    <h5
                                                        className="fw-normal mb-3 pb-3"
                                                        style={{ letterSpacing: 1 }}
                                                    >
                                                        Sign into your account
                                                    </h5>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="email"
                                                            id="form2Example17"
                                                            className="form-control form-control-lg"
                                                            name='email'
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="form2Example17">
                                                            Email address
                                                        </label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="password"
                                                            id="form2Example27"
                                                            className="form-control form-control-lg"
                                                            name='password'
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="form2Example27">
                                                            Password
                                                        </label>
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
                                                    <div className="pt-1 mb-4">
                                                        <button
                                                            className="btn btn-dark btn-lg btn-block"
                                                            type="submit"
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                    <a className="small text-muted" href="#!">
                                                        Forgot password?
                                                    </a>
                                                    <a href="#!" className="small text-muted">
                                                        Terms of use.
                                                    </a>
                                                    <a href="#!" className="small text-muted">
                                                        Privacy policy
                                                    </a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-light text-center text-lg-start">
                    <div
                        className="text-right pr-5 bg-dark text-white"
                    >
                        Copyright © 2023 Ellabex
                    </div>
                </footer>
            </>

        </div>
    )
}

export default InspLoginPage