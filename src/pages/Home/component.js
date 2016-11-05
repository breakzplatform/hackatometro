import React, {Component} from 'react';
import TeamList from '../../components/TeamList';

import Subheader from 'material-ui/Subheader';

class Home extends Component {

    componentDidMount(){
        this.props.watch();
    }

    componentWillUnmount(){
        this.props.unwatch();
    }

    render(){

        return (
            <div>
                <Subheader> Lista de Times </Subheader>
                <TeamList />
            </div>
        );

    }

}

export default Home;