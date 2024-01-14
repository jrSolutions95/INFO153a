import { createContext } from "react";
import { useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = "https://api.github.com/users";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children}) => {
    const initState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initState)
    //Get search results
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`)
        const {items} = await res.json()
        dispatch({
            type: "GET_USERS",
            payload: items
        })
    }
    //Clear users from state
    const clearUsers = () => dispatch({type: "CLEAR_USERS"})
    //SET_LOADING
    const setLoading = () => dispatch({type: "SET_LOADING"})

    return <GithubContext.Provider value={{users: state.users, loading: state.loading, searchUsers,clearUsers}}>
        {children}  
    </GithubContext.Provider>


}

export default GithubContext;