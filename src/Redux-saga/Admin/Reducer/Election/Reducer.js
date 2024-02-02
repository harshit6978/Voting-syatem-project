import { ELECTION_DELETE_ERROR, ELECTION_DELETE_PROGRESS, ELECTION_DELETE_SUCCESS, ELECTION_GET_ERROR, ELECTION_GET_PROGRESS, ELECTION_GET_SUCCESS, ELECTION_POST_ERROR, ELECTION_POST_PROGRESS, ELECTION_POST_SUCCESS, ELECTION_UPDATE_ERROR, ELECTION_UPDATE_PROGRESS, ELECTION_UPDATE_SUCCESS } from "../../Action/Election/Action";



const initialState = {
    election: [],
    isLoding: false,
    isError: null,
};

const Ereducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ELECTION_GET_PROGRESS: {
            return {
                ...state,
                isLoding: true,
                isError: null,
            }
        }
        case ELECTION_GET_SUCCESS: {
            return {
                ...state,
                election: action.data,
                isLoding: false,
                isError: null,
            }
        }
        case ELECTION_GET_ERROR: {
            return {
                ...state,
                isLoding: false,
                election: action.data,
                isError: true,
            }
        }

        // POST reducer
        case ELECTION_POST_PROGRESS: {
            return {
                ...state,
                isLoding: true,
                isError: null,
            }
        }

        case ELECTION_POST_SUCCESS: {
            return {
                ...state,
                isLoding: false,
                isError: null,
                election: state.election.concat(action.data.Data),
            }
        }

        case ELECTION_POST_ERROR: {
            return {
                ...state,
                isLoding: false,
                isError: action.data,
            }
        }


        // delete reduceer 

        case ELECTION_DELETE_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null
            }
        }

        case ELECTION_DELETE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: state.election.filter((ele) => ele._id !== action.data),
                isError: null,
            }
        }

        case ELECTION_DELETE_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data,
            }
        }
        default: return state;


        // update reducer 
        case ELECTION_UPDATE_PROGRESS: {
            return {
                ...state,
                isLoding: true,
                isError: null,
            }
        }

        case ELECTION_UPDATE_SUCCESS: {
            return {
                ...state,
                isLoding: false,
                election: state.election.map((ele) =>
                    ele.id === action.data.id ? action.data : ele
                ),
            };
        }

        case ELECTION_UPDATE_ERROR: {
            return {
                ...state,
                isLoding: false,
                isError: action.data
            }
        }
    }
}

export default Ereducer;