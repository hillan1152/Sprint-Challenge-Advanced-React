import React from 'react';
import axios from 'axios';


export default class Players extends React.Component {
    state = {
        players: []
    }

    componentDidMount(){
        console.log('CDM');
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    players: res.data
                })
            })
            .catch(err => console.log('axios call not working', err))
    }

    render(){
        console.log('rendering...')
        return(
            <div className='main-div'>
                <h1>Women's World Cup Popular Players!</h1>
                <div>{this.state.players.map(name => {
                    return <p key={name.id}>{name.name}</p>
                })}</div>
            </div>
        )
    }
}