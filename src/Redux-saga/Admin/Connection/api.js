import axios from "axios";
import { BASE_URL, CONNECT_DELETE, CONNECT_GET, CONNECT_POST } from "../../constant";
import { act } from "react-dom/test-utils";

export async function get_connect_api() {
    return axios
        .get(BASE_URL + CONNECT_GET)
        .then((res) => {
            const data = res.data.Data;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}


export async function post_connect_api(action) {
    return axios
        .post(BASE_URL + CONNECT_POST, action.payload)
        .then((res) => {
            const data = res.data;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}


export async function delete_connect_api(action) {
    return axios
        .delete(BASE_URL + CONNECT_DELETE + action.payload._id)
        .then((res) => {
            console.log(action.payload._id,"hgfdfghjkhgfddddddddddddddddddddddddddddddddddddddddddd");
            const data = action.payload;
            const status = res.status;
            return { data, status };
        })
        .catch((error) => {
            console.log(error);
        });
}