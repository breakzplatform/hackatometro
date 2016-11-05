import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {Row, Col} from 'reactstrap';

class TeamEdit extends Component {


    componentDidMount(){
        this.props.watch();
    }

    componentWillUnmount(){
        this.props.unwatch();
    }
 

    render(){

        if(!this.props.team) return null;

        const { team: { image } } = this.props;

        return (

            <div style={{ padding: '16px' }}>

                <Row>
                <Col md={2}>
                    <Avatar size={160} src={image} />
                </Col>
                <Col md={8}>
                    <h1> Time </h1>
                </Col>
                </Row>
            </div>
        );

    }

}

export default TeamEdit;