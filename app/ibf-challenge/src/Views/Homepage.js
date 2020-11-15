import logo from '../logo.png';
import '../App.css';
import {Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";

function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <p><b>Welcome to my Kanban Board for the ibf-dev-challenge!</b></p>
                <img src={logo} className="App-logo" alt="logo" />
                <br/>
                <br/>
                <br/>
                <p><b>Project: </b>Kanban Board</p>
                <p><b>Description: </b>To create a useful kanban board which demonstrates my abilities :)</p>
                <Link to="/kanban">
                    <Button>
                        Access Board
                    </Button>
                </Link>
            </header>
        </div>
    );
}

export default Homepage;
