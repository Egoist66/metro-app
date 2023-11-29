import {createContext, useContext} from "react";
import useSearch from "../hooks/useSearch";

const Context = createContext(null)


export const useAppContext = () => {
    return useContext(Context)
}

export const AppContext = ({children}) => {

   const {state, handleInput, findStationByValue, isPending} = useSearch()
   const {stations, lines, search} = state

    return (
        <Context.Provider value={{
            stations,
            lines,
            handleInput,
            isPending,
            findStationByValue,
            search
        }}>
            {children}

        </Context.Provider>
    )
}