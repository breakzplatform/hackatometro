import React, {Component} from 'react';

class TeamEdit extends Component {


    componentDidMount(){
        this.props.watch();
    }

    componentWillUnmount(){
        this.props.unwatch();
    }
 

    render(){

        return (

            <h1> hallo </h1>

        );

    }

}

export default TeamEdit;