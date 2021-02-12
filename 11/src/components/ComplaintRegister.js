import React, { Component } from 'react';
import './ComplaintRegister.css'

class ComplaintRegister extends Component {

    state = {
        id: Math.floor(Math.random() * 100 + 1),
        name: "",
        complain: ""
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleComplain = (event) => {
        this.setState({
            complain: event.target.value
        })
    }


    handleSubmit = (event) => {
        const message = "Thanks " + this.state.name
            + "\nYour Complain was submitted\nTransaction ID : " + this.state.id;
        alert(message);
        event.preventDefault();
    }


    render() {

        const style = {
            margin: "20px"
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div style={style} >
                        <label style={{ paddingRight: "20px" }} htmlFor="name">Name: </label>
                        <input id="name" onChange={this.handleName} value={this.state.name} />
                    </div>

                    <div style={style} className="alignComplain">
                        <label style={{ paddingRight: "20px" }} htmlFor="complain">Complain: </label>
                        <textarea
                            rows="5"
                            cols="30"
                            onChange={this.handleComplain}
                            value={this.state.complain} />
                    </div>

                    <button style={{
                        padding: "10px 20px",
                        font: "inherit",
                        color: "white",
                        backgroundColor: "teal",
                        border: "thick solid teal",
                        boxShadow: "0 2px 3px grey",
                        borderRadius: "10%",
                        cursor: "pointer"
                    }} type="submit">Submit Complain</button>
                </form>
            </div>
        );
    }
}


export default ComplaintRegister;