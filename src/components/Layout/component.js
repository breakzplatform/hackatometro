import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {


    render(){

        return (
            <Container>
                <Paper style={{height: `100%`}} zDepth={1}>
                    <AppBar 
                        iconElementLeft={<span />}
                        title="Hackatomêtro" />
                        {this.props.children}

                </Paper>
            </Container>
        );

    }

}

export default Layout;