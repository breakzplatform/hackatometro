import React, { Component } from 'react';
import {withRouter} from 'react-router';
import Paper from 'material-ui/Paper';
import { Col } from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const containerStyle = {
    padding: '4px'
}

const cardStyle = {
    paddingTop: '8px ',
    paddingBottom: '8px ',
}

class Team extends Component {

    handleTap() {
        const { id } = this.props;
        this.props.router.push(`/team/${id}`)
    }

    render() {
        const { team: { image, name, completed }} = this.props;

        const avatar = <Avatar src={image} />;


        return (
            <Col lg={4} md={6} sm={12} style={containerStyle} >
                <Paper zDepth={1}>
                    <ListItem
                        onTouchTap={() => this.handleTap()}
                        style={cardStyle}
                        leftAvatar={avatar}
                        primaryText={name}
                        secondaryText={`${completed}% completo`}
                        />
                </Paper>
            </Col>

        );

    }

}

export default withRouter(Team);