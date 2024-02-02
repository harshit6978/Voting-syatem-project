import { ELECTION_DELETE_ERROR, ELECTION_DELETE_SUCCESS, ELECTION_GET_ERROR, ELECTION_GET_SUCCESS, ELECTION_POST_ERROR, ELECTION_POST_SUCCESS, ELECTION_UPDATE_ERROR, ELECTION_UPDATE_SUCCESS } from "../../../Admin/Action/Election/Action";
import { delete_election_api, get_election_api, post_election_api, update_election_api } from "../../../Admin/Api/Election/Api";
import { call, put } from "redux-saga/effects";


export function* handle_get_Election_api(action) {
    try {
        const res = yield call(get_election_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: ELECTION_GET_SUCCESS, data })
        } else {
            yield put({ type: ELECTION_GET_ERROR, data })
        }
    } catch (err) {
        yield put({ type: ELECTION_GET_ERROR, err })
    }
}


export function* handle_post_Election_api(action) {
    try {
        const res = yield call(post_election_api, action);
        // console.log(res,"from post ");
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: ELECTION_POST_SUCCESS, data })
        } else {
            yield put({ type: ELECTION_POST_ERROR, data })
        }
    } catch (err) {
        yield put({ type: ELECTION_POST_ERROR, err })
    }
}


export function* handle_delete_Election_api(action) {
    try {
        const res = yield call(delete_election_api, action);
        console.log(res, "from post ");
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: ELECTION_DELETE_SUCCESS, data })
        } else {
            yield put({ type: ELECTION_DELETE_ERROR, data })
        }
    } catch (err) {
        yield put({ type: ELECTION_DELETE_ERROR, err })
    }
}

export function* handle_update_Election_api(action) {
    try {
        const res = yield call(update_election_api, action);
        console.log(res, "from post ");
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: ELECTION_UPDATE_SUCCESS, data })
        } else {
            yield put({ type: ELECTION_UPDATE_ERROR, data })
        }
    } catch (err) {
        yield put({ type: ELECTION_UPDATE_ERROR, err })
    }
}