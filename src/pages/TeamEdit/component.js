import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Slider from 'material-ui/Slider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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

    onSliderChange() {
      console.log('ok')
    }

    renderConfirmationDialog() {
      const actions = [
        <FlatButton
          label="Cancelar"
          primary={true}
          onTouchTap={() => this.props.toggleConfirmationDialog(false)}
        />,
        <FlatButton
          label="Confirmar"
          primary={true}
          keyboardFocused={true}
          onTouchTap={() => this.props.toggleConfirmationDialog(true)}
        />,
      ];

      return (
        <div>
          <Dialog
            title="Opaaaaaa"
            actions={actions}
            modal={false}
            open={this.props.confirmationDialogOpen}
            onRequestClose={() => this.props.toggleConfirmationDialog(false)}
          >
            Você tem certeza de quer aplicar estas mudanças?
          </Dialog>
        </div>
      );
    }

    render(){

        if(!this.props.team) return null;
 
        const { team: { image, name, completed } } = this.props;
 
        return (

            <div style={{ padding: '16px' }}>

                <Row>
                <Col md={2} style={{ textAlign: "center" }}>
                    <Avatar size={160} src={image} />
                </Col>
                <Col md={8}>
                    <h1 style={headerStyle}> {name} </h1>

                    <Slider
                      defaultValue={completed}
                      min={0}
                      max={100}
                      step={1}
                      onChange={this.onSliderChange.bind(this)}
                      />
                      {this.renderConfirmationDialog()}
                </Col>
                </Row>
            </div>
        );

    }

}

export default TeamEdit;
