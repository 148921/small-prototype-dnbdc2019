import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            url: "https://demo2480495.mockable.io/events"
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <div className="boxes">
                    <div className="smallBox">
                        <Link to={"/active"}>
                        <img src="https://i.imgur.com/fiJPMAA.png" alt="bid"/>
                        </Link>
                    <h3>Budgiving</h3>
                    </div>
                    <div className="smallBox">
                    <img src="https://i.imgur.com/ccXQzua.png" alt="house"/>
                    <h3>Visninger</h3>
                    </div>
                </div>
                <div className="boxes">
                    <div className="smallBox">
                    <img src="https://i.imgur.com/7cmg8VH.png" alt="value"/>
                    <h3>Verdivurdering</h3>
                    </div>
                    <div className="smallBox">
                    <img src="https://i.imgur.com/nWq1XzI.png" alt="finance"/>
                    <h3>Finansieringsbevis</h3>
                    </div>
                </div>
                <div className="boxes">
                    <div className="smallBox">
                    <img src="https://i.imgur.com/W20KVMz.png" alt="feedback"/>
                    <h3>Gi tilbakemelding</h3>
                    
                    </div>
                    <div className="smallBox">
                        <img src="https://i.imgur.com/AZP3k4p.png" alt="info"/>
                    <h3>Tips og vilkår</h3> 
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;