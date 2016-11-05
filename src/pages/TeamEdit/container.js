import component from './component';
import {connect} from 'react-redux';
import {watchTeams, stopWatchTeams, setCompleted} from '../../actions/home';
import {withRouter} from 'react-router';


const mapStateToProps = (state, props) => ({
    team: state.home.teams && state.home.teams[props.params.id]
});


const mapDispatchToProps = (dispatch, props) => ({
    watch(){
        dispatch(watchTeams());
    },
    unwatch(){
        dispatch(stopWatchTeams());
    },
    setCompleted(number){
        dispatch(setCompleted(props.params.id, number));
    }
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(component));