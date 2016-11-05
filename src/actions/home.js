import firebase from '../firebase';

export const TEAMS_UPDATE_TEAM = "TEAMS_UPDATE_TEAM";
export const TEAMS_SET_COMPLETED = "TEAMS_SET_COMPLETED";


var firebaseTeams = firebase.database().ref("teams");

export function stopWatchTeams() {
    return function () {
        firebaseTeams.off("value");
    }
}

export function setCompleted(team, number){
    return {
        type: TEAMS_SET_COMPLETED,
        team,
        number
    };
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
