import component from './component';
import {connect} from 'react-redux';
import {watchTeams, stopWatchTeams} from '../../actions/home';
import {withRouter} from 'react-router';


const mapStateToProps = (state, props) => ({
    team: state.home.teams && state.home.teams[props.params.id]
});


const mapDispatchToProps = (dispatch) => ({
    watch(){
        dispatch(watchTeams());
    },
    unwatch(){
        dispatch(stopWatchTeams());
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(component));