import { all } from "redux-saga/effects";
import { delete_election_saga, get_election_saga, post_election_saga, update_election_saga } from "./Root/rootElection";
import { delete_Party_saga, get_Party_saga, post_Party_saga } from "./Root/rootParty";

export function* rootSaga() {
    yield all([get_election_saga(), post_election_saga(), delete_election_saga(), update_election_saga(),
    get_Party_saga(), post_Party_saga(), delete_Party_saga()])
}