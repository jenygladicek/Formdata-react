import React, { Component } from 'react';

class SingleItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pictures : []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=75').then(results=>{
            return results.json();
        }).then(data =>{
            let pictures = data.results.map(pic =>{
                return(
                    <span key={pic.login.username}><img src={pic.picture.medium} /></span>
                )
            })
            this.setState({pictures : pictures});
            
        })
        
    }

    render() {
        return(
        <div className="container">
            {this.state.pictures}
        </div>
        )
    }
}

export default SingleItem;
