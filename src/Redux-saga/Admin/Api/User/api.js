import axios from "axios";
import { BASE_URL, USER_DELETE, USER_GET, USER_POST } from "../../../constant";



export async function get_user_api() {
    return axios.get(BASE_URL + USER_GET).then((res) => {
        const data = res.data.Data;
        const status = res.status;
        return {
            data,
            status,
        }

    }).catch((err) => {
        console.log(err);
    })
}

export async function post_user_api(action) {
    return axios.post(BASE_URL + USER_POST, action.payload).then((res) => {
        console.log(res,"user");
        const data = res.data;
        const status = res.status;
        return {
            data,
            status,
        }

    }).catch((err) => {
        console.log(err);
    })
}


export async function delete_user_api(action) {
    return axios.delete(BASE_URL + USER_DELETE + action.payload._id).then((res) => {
        const data = action.payload._id;
        const status = res.status;
        return {
            data,
            status,
        }

    }).catch((err) => {
        console.log(err);
    })
}