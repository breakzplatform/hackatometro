import firebase from '../firebase';

export const TEAMS_UPDATE_TEAM = "TEAMS_UPDATE_TEAM";
export const TOGGLE_CONFIRMATION_DIALOG = "TOGGLE_CONFIRMATION_DIALOG";


var firebaseTeams = firebase.database().ref("teams");

export function stopWatchTeams() {
    return function () {
        firebaseTeams.off("value");
    }
}

export function watchTeams() {

    return function (dispatch) {

        firebaseTeams.on("value", function (snapshot) {

            var teams = snapshot.val();


            dispatch({
                type: TEAMS_UPDATE_TEAM,
                teams
            });

        });

    }

}


export function toggleConfirmationDialog(value) {
    return {
      type: TOGGLE_CONFIRMATION_DIALOG,
      value
    }
}
