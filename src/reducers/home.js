import { TEAMS_UPDATE_TEAM } from '../actions/home';

const INITIAL_STATE = {
    teams: {}
}

export default function (state = INITIAL_STATE, action) {

    const {type, teams} = action;

    switch (type) {
        case TEAMS_UPDATE_TEAM:
            return { ...state, teams };
    }

    return state;

}