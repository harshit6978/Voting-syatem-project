
import { USER_DELETE_ERROR, USER_DELETE_PROGRESS, USER_DELETE_SUCCESS, USER_GET_ERROR, USER_GET_PROGRESS, USER_GET_SUCCESS } from "../../Action/User/Action";

const initialState = {
    election: [],
    isLoading: false,
    isError: null,
}

const userReducer = (state = {...initialState}, action) => {
    console.log(action , 'action from reducer');

    switch(action.type){
        case USER_GET_PROGRESS:{
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
        // case POST_USER_PROGRESS:{
        //     return{
        //         ...state,
        //         isLoading: true,
        //         isError: null,
        //     }
        // }

        // case POST_USER_SUCCESS:{
        //     return{
        //         ...state,
        //         isLoading: false,
        //         user: state.data.concat(action.data.Data),
        //         isError: null,
        //     }
        // }

        // case POST_USER_ERROR:{
        //     return{
        //         ...state,
        //         isLoading: false,
        //         isError: action.payload,
        //     }
        // }

        case USER_DELETE_PROGRESS: {
            return{
                ...state,
                isLoading: true,
                isError: null,
            }
        }

        case USER_DELETE_SUCCESS:{
            return{
                ...state,
                election: state.election.filter((val) => val._id !== action.data ),
                isLoading: false,
                isError: null,
            }
        }

        case USER_DELETE_ERROR: {
            return{
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