import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Covi.css'

function Covid() {

    const [country, setCountry] = useState("");
    const [show, setShow] = useState([])


    useEffect(() => {

        async function getData() {
            const response = await axios.get(`https://api.covid19api.com/live/country/${country}`)
            console.log(response)
            setShow(response.data)
        }
        getData();

    }, [country])


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a style={{ fontSize: '33px', color: 'white' }} className="navbar-brand ml-3 fas fa-hand-holding-medical" href="#" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto mr-5">
                        <a className="nav-item nav-link ml-2" href="#coronahelp-section" style={{ color: '#FBF85E', fontFamily: '"Poppins", sans-serif' }}>KNOW ABOUT COVID-19 Cases</a>
                    </div>
                </div>
            </nav>
            {/* Home Section */}
            <section id="home-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h2 className="rohan">Hey User,</h2><br />
                            <input type="text"
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            <h6>(Enter Your Country)</h6>
                        </div>
                        <div className="col-sm spac">
                            <table className="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">City</th>
                                        <th scope="col" style={{ color: 'yellow' }}>Confirmed</th>
                                        <th scope="col" style={{ color: 'limegreen' }}>Recovered</th>
                                        <th scope="col" style={{ color: 'red' }}>Deaths</th>
                                    </tr>
                                </thead>
                                {
                                    show.map((elem) => {
                                        return (
                                            <tbody>
                                                <tr>
                                                    <td>{elem.Province} <span style={{ color: 'limegreen' }}></span></td>
                                                    <td>{elem.Confirmed} <span ></span></td>
                                                    <td>{elem.Recovered} </td>
                                                    <td>{elem.Deaths} <span style={{ color: 'red' }}></span></td>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }

                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row spac">
                        <div className="col-sm imgal">
                        </div>
                        <div className="col-sm">
                            <div className="col-sm measures"> Stay safe at home<br />
                  Take proper hygeine &amp; let's defeat this virus
                  <br />
                            </div>
                            <div className="helpline spac">
                                <p>
                                    Helpline number: +91-11-23978046</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <section id="footer-section">
                    <div className="container">
                        <center>
                            <div className="row">
                                <div className="col-sm">
                                    <a href="#" />
                                </div>
                                <div className="col-sm mt-3">
                                    Made with ♥ Dhairya Ostwal
                  </div>
                                <div className="col-sm">
                                    <a style={{ fontSize: '30px', color: '#F10999' }} className="fab fa-github icon-size mr-3" href="https://github.com/dhairyaostwal/" height="20px" width="20px" />
                                    <a style={{ fontSize: '30px', color: '#F10999' }} className="fab fa-linkedin icon-size mr-3" href="https://www.linkedin.com/in/dhairyaostwal/" height="20px" width="20px">
                                    </a><a style={{ fontSize: '30px', color: '#F10999' }} className="fab fa-instagram icon-size mr-3" href="https://instagram.com/dhairyaostwal/" height="20px" width="20px" />
                                </div>
                            </div>
                        </center>
                    </div>
                </section>
            </footer>

        </div>
    )
}

export default Covid;