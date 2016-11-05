import component from './component';
import {connect} from 'react-redux';
import {watchTeams, stopWatchTeams, toggleConfirmationDialog} from '../../actions/home';
import {withRouter} from 'react-router';


const mapStateToProps = (state, props) => ({
    team: state.home.teams && state.home.teams[props.params.id],
    confirmationDialogOpen: state.home.confirmationDialogOpen
});


const mapDispatchToProps = (dispatch) => ({
    watch(){
        dispatch(watchTeams());
    },
    unwatch(){
        dispatch(stopWatchTeams());
    },
    toggleConfirmationDialog(value) {
      dispatch(toggleConfirmationDialog(!!value));
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(component));
