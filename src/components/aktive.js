import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aktive extends Component {
    render() {
        return (
            <div><br/>
                <h2>Totalfinans: 2,000,000 </h2>
                <h2>Disponibelt: 600,000</h2>
                <hr/>
                    <Link to={"/"}><h4>&lt;</h4></Link>
                    <h2>Aktive budrunder</h2>
                    <div className="boxes">
                        <div>
                                <Link to={"/info"}>
                            <div className="box">
                            <img src="https://i.imgur.com/ccXQzua.png" alt="house" align="right"/>
                                <h3>Varmyrveien 26</h3>
                                <p><b>Pågående</b></p>
                            </div>
                                </Link>
                            <div className="box">
                            <img src="https://i.imgur.com/ccXQzua.png" alt="house" align="right"/>
                                <h3>Skulstadvegen 1</h3>
                                <p>Starter 26.04.19 klokken 13:00</p>
                            </div>
                            <div className="box">
                            <img src="https://i.imgur.com/ccXQzua.png" alt="house" align="right"/>
                                <h3>Skulstadvegen 1</h3>
                                <p>Starter 30.04.19 klokken 13:00</p>
                            </div>
                            <br/>
                            <div className="box">
                            <img src="https://i.imgur.com/1AMymLg.png" alt="add" align="right"/>
                                <h3>Legg til</h3>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Aktive;
