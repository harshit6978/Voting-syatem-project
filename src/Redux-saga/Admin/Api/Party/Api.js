import axios from "axios";
import { BASE_URL, PARTY_DELETE, PARTY_GET, PARTY_POST } from "../../../constant";





export async function get_party_api() {
    return axios.get(BASE_URL + PARTY_GET).then((res) => {
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

export async function post_party_api(action) {
    return axios.post(BASE_URL + PARTY_POST, action.payload).then((res) => {
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


export async function delete_party_api(action) {
    return axios.delete(BASE_URL + PARTY_DELETE + action.payload._id).then((res) => {
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