import { takeLatest } from "redux-saga/effects";
import { USER_DELETE_PROGRESS, USER_GET_PROGRESS, USER_POST_PROGRESS } from "../../Admin/Action/User/Action";
import { handle_delete_user_api, handle_get_user_api, handle_post_user_api } from "../Admin/User/manageUser";



export function* get_user_saga() {
    yield takeLatest(USER_GET_PROGRESS, handle_get_user_api)
}

export function* post_user_saga() {
    yield takeLatest(USER_POST_PROGRESS, handle_post_user_api)
}

export function* delete_user_saga() {
    yield takeLatest(USER_DELETE_PROGRESS, handle_delete_user_api)
}