import { TEAMS_UPDATE_TEAM, TOGGLE_CONFIRMATION_DIALOG } from '../actions/home';

const INITIAL_STATE = {
    teams: {},
    confirmationDialogOpen: false
}

export default function (state = INITIAL_STATE, action) {

    const {type} = action;

    switch (type) {
        case TEAMS_UPDATE_TEAM:
            const {teams} = action;
            return { ...state, teams };
            break;

        case TOGGLE_CONFIRMATION_DIALOG:
            const {value} = action;
            return { ...state, confirmationDialogOpen: value };
    }

    return state;

}
