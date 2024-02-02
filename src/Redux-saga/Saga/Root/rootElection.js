import { takeLatest } from "redux-saga/effects";
import { ELECTION_DELETE_PROGRESS, ELECTION_GET_PROGRESS, ELECTION_POST_PROGRESS, ELECTION_UPDATE_PROGRESS } from "../../Admin/Action/Election/Action";
import { handle_delete_Election_api, handle_get_Election_api, handle_post_Election_api, handle_update_Election_api } from "../Admin/Election/manageElection";

export function* get_election_saga() {
    yield takeLatest(ELECTION_GET_PROGRESS, handle_get_Election_api)
}

export function* post_election_saga() {
    yield takeLatest(ELECTION_POST_PROGRESS, handle_post_Election_api)
}

export function* delete_election_saga() {
    yield takeLatest(ELECTION_DELETE_PROGRESS, handle_delete_Election_api)
}

export function* update_election_saga() {
    yield takeLatest(ELECTION_UPDATE_PROGRESS, handle_update_Election_api)
}