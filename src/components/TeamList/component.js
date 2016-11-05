import React, {Component} from 'react';
import {withRouter} from 'react-router';
import Team from '../Team';

class TeamList extends Component {

    render(){
        const {teams} = this.props;

        return (
            <div>
                {Object.keys(teams).map( key => <Team key={key} id={key} team={teams[key]} />)}
            </div>
        );

    }

}

export default withRouter(TeamList);