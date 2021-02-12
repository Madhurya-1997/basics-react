import React, { Component } from 'react'
import './Getuser.css';

class Getuser extends Component {

    state = {
        loading: true,
        people: []
    };

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            people: data.results,
            loading: false
        })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.people.length ? (
                    <div>loading...</div>
                ) : (
                        <div>
                            {this.state.people.map((person) => {
                                return (
                                    <div className="Getuser">
                                        <h1>{person.name.title} {person.name.first} {person.name.last}</h1>
                                        <img src={person.picture.large} />
                                        <p style={{ color: "teal" }}><b>Location</b>: {person.location.state}, {person.location.country}</p>
                                    </div>
                                )
                            })}

                        </div>
                    )}
            </div>
        )
    }
}

export default Getuser;