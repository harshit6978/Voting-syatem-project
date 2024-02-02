import axios from 'axios'

import { BASE_URL, ELECTION_DELETE, ELECTION_GET, ELECTION_POST, ELECTION_PUT } from '../../../constant'

export async function get_election_api() {
    return axios.get(BASE_URL + ELECTION_GET).then((res) => {
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

export async function post_election_api(action) {
    console.log(action);
    return axios
        .post(BASE_URL + ELECTION_POST, action.payload)
        .then((res) => {
            const data = res.data;
            const status = res.status;
            return { data, status };
        }).catch((err) => {
            console.log(err, "from api");
        })
}

export async function delete_election_api(action) {
    console.log(action, "Delete Successful")
    return axios
        .delete(BASE_URL + ELECTION_DELETE + action.payload._id).then((res) => {
            console.log(res, "Delete Successful")
            const data = action.payload._id;
            const status = res.status;
            return {
                data,
                status
            }
        })
}

export async function update_election_api(action) {
    return axios
        .put(BASE_URL + ELECTION_PUT + action.payload._id).then((res) => {
            console.log(res, "sdsdsd");
            const data = res.data;
            const status = res.status;
            return { data, status }
        })
}