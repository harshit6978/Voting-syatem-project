import { call, put } from "redux-saga/effects";
import { DELETE_CONNECT_ERROR, DELETE_CONNECT_SUCCESS, GET_CONNECT_ERROR, GET_CONNECT_SUCCESS, POST_CONNECT_ERROR, POST_CONNECT_SUCCESS } from "../../Admin/Connection/action";
import { delete_connect_api, get_connect_api, post_connect_api } from "../../Admin/Connection/api";

export function* handle_get_connect_api(action) {
    try {
        const res = yield call(get_connect_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: GET_CONNECT_SUCCESS, data })
        } else {
            yield put({ type: GET_CONNECT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: GET_CONNECT_ERROR, err })
    }
}


export function* handle_post_connect_api(action) {
    try {
        const res = yield call(post_connect_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: POST_CONNECT_SUCCESS, data })
        } else {
            yield put({ type: POST_CONNECT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: POST_CONNECT_ERROR, err })
    }
}


export function* handle_delete_connect_api(action) {
    try {
        const res = yield call(delete_connect_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: DELETE_CONNECT_SUCCESS, data })
        } else {
            yield put({ type: DELETE_CONNECT_ERROR, data })
        }
    } catch (err) {
        yield put({ type: DELETE_CONNECT_ERROR, err })
    }
}