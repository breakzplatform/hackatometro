import {connect} from 'react-redux';
import component from './component';


const mapStateToProps = state => ({
    teams: state.home.teams
});

const mapDispatchToProps = dispatch => ({



});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(component);