import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {Row, Col} from 'reactstrap';

const headerStyle = {
    fontSize: '3em',
    lineHeight: '3em',
    color: '#888',
    fontWeight: 'lighter',
    textAlign: 'center'
}

class TeamEdit extends Component {


    componentDidMount(){
        this.props.watch();
    }

    componentWillUnmount(){
        this.props.unwatch();
    }
 

    render(){

        if(!this.props.team) return null;

        const { team: { image, name } } = this.props;

        return (

            <div style={{ padding: '16px' }}>

                <Row>
                <Col md={2} style={{ textAlign: "center" }}>
                    <Avatar size={160} src={image} />
                </Col>
                <Col md={8}>
                    <h1 style={headerStyle}> {name} </h1>
                </Col>
                </Row>
            </div>
        );

    }

}

export default TeamEdit;