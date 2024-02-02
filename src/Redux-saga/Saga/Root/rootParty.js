import { takeLatest } from "redux-saga/effects";
import { handle_delete_Party_api, handle_get_Party_api, handle_post_Party_api } from "../Admin/Party/manageParty";
import { PARTY_DELETE_PROGRESS, PARTY_GET_PROGRESS, PARTY_POST_PROGRESS } from "../../Admin/Action/Party/Action";



export function* get_Party_saga() {
    yield takeLatest(PARTY_GET_PROGRESS, handle_get_Party_api)
}

export function* post_Party_saga() {
    yield takeLatest(PARTY_POST_PROGRESS, handle_post_Party_api)
}

export function* delete_Party_saga() {
    yield takeLatest(PARTY_DELETE_PROGRESS, handle_delete_Party_api)
}