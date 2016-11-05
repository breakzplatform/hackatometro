import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';


class TeamEdit extends Component {


    componentDidMount(){
        this.props.watch();
    }

    componentWillUnmount(){
        this.props.unwatch();
    }
 

    render(){

        const { team: { image } } = this.props;

        return (

            <div>

                <Avatar size={160} src={image} />

            </div>
        );

    }

}

export default TeamEdit;