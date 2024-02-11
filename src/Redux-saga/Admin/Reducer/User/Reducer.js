
import { USER_DELETE_ERROR, USER_DELETE_PROGRESS, USER_DELETE_SUCCESS, USER_GET_ERROR, USER_GET_PROGRESS, USER_GET_SUCCESS, USER_POST_ERROR, USER_POST_PROGRESS, USER_POST_SUCCESS } from "../../Action/User/Action";

const initialState = {
    election: [],
    isLoading: false,
    isError: null,
}

const userReducer = (state = { ...initialState }, action) => {
    // console.log(action, 'action from reducer');

    switch (action.type) {
        case USER_GET_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }
        case USER_GET_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: action.data,
                isError: null,
            }
        }
        case USER_GET_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }
        case USER_POST_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }

        case USER_POST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                election: state.election.concat(action.data.Data),
                isError: null,
            }
        }

        case USER_POST_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.payload,
            }
        }

        case USER_DELETE_PROGRESS: {
            return {
                ...state,
                isLoading: true,
                isError: null,
            }
        }

        case USER_DELETE_SUCCESS: {
            return {
                ...state,
                election: state.election.filter((val) => val._id !== action.data),
                isLoading: false,
                isError: null,
            }
        }

        case USER_DELETE_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: action.data
            }
        }



        default:
            return state;
    }
}

export default userReducer;