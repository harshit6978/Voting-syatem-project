import { call, put } from "redux-saga/effects";
import { USER_DELETE_ERROR, USER_DELETE_SUCCESS, USER_GET_ERROR, USER_GET_SUCCESS, USER_POST_ERROR, USER_POST_SUCCESS } from "../../../Admin/Action/User/Action";
import { delete_user_api, get_user_api, post_user_api } from "../../../Admin/Api/User/api";




export function* handle_get_user_api(action) {
    try {
        const res = yield call(get_user_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: USER_GET_SUCCESS, data })
        } else {
            yield put({ type: USER_GET_ERROR, data })
        }
    } catch (err) {
        yield put({ type: USER_GET_ERROR, err })
    }
}

export function* handle_post_user_api(action) {
    try {
        const res = yield call(post_user_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: USER_POST_SUCCESS, data })
        } else {
            yield put({ type: USER_POST_ERROR, data })
        }
    } catch (err) {
        yield put({ type: USER_POST_ERROR, err })
    }
}

export function* handle_delete_user_api(action) {
    try {
        const res = yield call(delete_user_api, action);
        const data = res.data;
        const status = res.status;
        if (status === 200 || status === 201) {
            yield put({ type: USER_DELETE_SUCCESS, data })
        } else {
            yield put({ type: USER_DELETE_ERROR, data })
        }
    } catch (err) {
        yield put({ type: USER_DELETE_ERROR, err })
    }
}