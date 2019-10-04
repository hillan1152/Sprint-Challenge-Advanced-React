import React from "react";
import axios from "axios";

import Card from "./Card";

export default class TopPlayers extends React.Component {
    constructor() {
        super();
        this.state = {
            players:[]
        }
    };

    componentDidMount() {
        axios   
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log("Player Object", [res.data] )
                this.setState({
                    players: res.data
                })  
            })
            .catch(err => {
                console.log("There is an Error",err);
            })
    }

    render() {
        return(
            <div className="top-player-container">
                <h2>Player</h2>
                {this.state.players.map(item => {
                  return <Card key={item.id} players={item}/>
                })}
                
            </div>
        )
    }

}