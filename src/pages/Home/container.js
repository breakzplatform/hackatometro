import component from './component';
import {connect} from 'react-redux';
import {watchTeams, stopWatchTeams} from '../../actions/home';


const mapStateToProps = (state) => ({
    teams: []
});


const mapDispatchToProps = (dispatch) => ({
    watch(){
        dispatch(watchTeams());
    },
    unwatch(){
        dispatch(stopWatchTeams());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(component);