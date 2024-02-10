import { PARTY_DELETE_ERROR, PARTY_DELETE_PROGRESS, PARTY_DELETE_SUCCESS, PARTY_GET_ERROR, PARTY_GET_PROGRESS, PARTY_GET_SUCCESS, PARTY_POST_ERROR, PARTY_POST_PROGRESS, PARTY_POST_SUCCESS } from "../../Action/Party/Action";


const initialState = {
    election: [],
    isLoading: false,
    isError: null,
};

const PReducer = (state = { ...initialState }, action) => {
    console.log(action);
    switch (action.type) {

        //PARTY
        case PARTY_GET_PROGRESS:
            return {
                ...state,
                isLoding: true,
                isError: null,
            };
        case PARTY_GET_SUCCESS:
            return {
                ...state,
                isLoding: false,
                election: action.data,
                isError: null,
            };
        case PARTY_GET_ERROR:
            return {
                ...state,
                isLoding: false,
                isError: action.data,
            };

        case PARTY_POST_PROGRESS:
            return {
                ...state,
                isLoding: true,
                isError: null,
            };
        case PARTY_POST_SUCCESS:
            return {
                ...state,
                isLoding: false,
                election: state.election.concat(action.data.Data),
                isError: null,
            };
        case PARTY_POST_ERROR:
            return {
                ...state,
                isLoding: false,
                isError: action.data,
            };

        case PARTY_DELETE_PROGRESS:
            return {
                ...state,
                isLoding: true,
                isError: null,
            };
        case PARTY_DELETE_SUCCESS:
            return {
                ...state,
                election: state.election.filter((item) => item._id !== action.data),
                isLoding: true,
                isError: null,
            }
        case PARTY_DELETE_ERROR:
            return {
                ...state,
                isLoding: false,
                isError: action.data,
            };

        //   case UPDATE_PARTY_PROGRESS:
        //     return {
        //       ...state,
        //       isLoding: true,
        //       isError: null,
        //     };
        //   case UPDATE_PARTY_SUCCESS:
        //     return {
        //       ...state,
        //       isLoding: false,
        //       data: state.data.map((state) =>
        //         state.id === action.data.id ? action.data : state
        //       ),
        //       isError: null,
        //     };
        //   case UPDATE_PARTY_ERROR:
        //     return {
        //       ...state,
        //       isLoding: false,
        //       isError: action.data,
        //     };

        default: {
            return { ...state };
        }
    }
};
export default PReducer;
