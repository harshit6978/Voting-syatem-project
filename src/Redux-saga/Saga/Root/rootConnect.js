import { takeLatest } from "redux-saga/effects";
import { DELETE_CONNECT_PROGRESS, GET_CONNECT_PROGRESS, POST_CONNECT_PROGRESS } from "../../Admin/Connection/action";
import { handle_delete_connect_api, handle_get_connect_api, handle_post_connect_api } from "../Admin/manageConnect";

export function* get_connect_saga() {
    yield takeLatest(GET_CONNECT_PROGRESS, handle_get_connect_api)
}

export function* post_connect_saga() {
    yield takeLatest(POST_CONNECT_PROGRESS, handle_post_connect_api)
}

export function* delete_connect_saga() {
    yield takeLatest(DELETE_CONNECT_PROGRESS, handle_delete_connect_api)
}
