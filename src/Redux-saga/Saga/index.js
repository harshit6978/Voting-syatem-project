import { all } from "redux-saga/effects";
import { delete_election_saga, get_election_saga, post_election_saga, update_election_saga } from "./Root/rootElection";
import { delete_Party_saga, get_Party_saga, post_Party_saga } from "./Root/rootParty";
import { delete_user_saga, get_user_saga, post_user_saga } from "./Root/rootUser";
import { delete_connect_saga, get_connect_saga, post_connect_saga } from "./Root/rootConnect";

export function* rootSaga() {
    yield all([get_election_saga(),
    post_election_saga(),
    delete_election_saga(),
    update_election_saga(),
    get_Party_saga(),
    post_Party_saga(),
    delete_Party_saga(),
    get_user_saga(),
    post_user_saga(),
    delete_user_saga(),
    get_connect_saga(),
    post_connect_saga(),
    delete_connect_saga()])
}
