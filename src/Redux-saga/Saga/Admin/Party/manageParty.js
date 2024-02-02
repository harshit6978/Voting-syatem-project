import { call, put } from "redux-saga/effects";
import { delete_party_api, get_party_api, post_party_api } from "../../../Admin/Api/Party/Api";
import { PARTY_DELETE_ERROR, PARTY_DELETE_SUCCESS, PARTY_GET_ERROR, PARTY_GET_SUCCESS, PARTY_POST_ERROR, PARTY_POST_SUCCESS } from "../../../Admin/Action/Party/Action";

export function* handle_get_Party_api(action) {
    try {
        const res = yield call(get_party_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: PARTY_GET_SUCCESS, data })
        } else {
            yield put({ type: PARTY_GET_ERROR, data })
        }
    } catch (err) {
        yield put({ type: PARTY_GET_ERROR, err })
    }
}


export function* handle_post_Party_api(action) {
    try {
        const res = yield call(post_party_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: PARTY_POST_SUCCESS, data })
        } else {
            yield put({ type: PARTY_POST_ERROR, data })
        }
    } catch (err) {
        yield put({ type: PARTY_POST_ERROR, err })
    }
}


export function* handle_delete_Party_api(action) {
    try {
        const res = yield call(delete_party_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: PARTY_DELETE_SUCCESS, data })
        } else {
            yield put({ type: PARTY_DELETE_ERROR, data })
        }
    } catch (err) {
        yield put({ type: PARTY_DELETE_ERROR, err })
    }
}

