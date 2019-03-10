import React, { Component } from "react";
import { Link } from "react-router-dom";

class Info extends Component {
    render() {
        return (
            <div><br />
                <h2>Totalfinans: 2,000,000 </h2>
                <h2>Disponibelt: 600,000</h2>
                <hr />
                <Link to={"/active"}><h4>&lt;</h4></Link>
                <div className="boxes">
                    <div>

                        <div className="box">
                            <h3>Nåværende bud</h3>
                            <h3>1,500,000kr</h3>
                        </div>
                        <div className="box">
                            <h3>Ditt bud</h3>
                            <h3>1,400,000kr</h3>
                        </div>
                        <br /><br />
                        <div className="box">
                        <h3>Nytt beløp</h3>
                        <hr/>
                            <h3>Ditt bud</h3>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default Info;