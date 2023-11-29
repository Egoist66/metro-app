import {useAppContext} from "../../context/app-context";
import React, {useEffect, useState} from "react";
import Stations from "../Stations/Stations";

const Search = () => {

    const {
        handleInput,
        search,
        isPending,
        findStationByValue,
        stations
    } = useAppContext()

    const [state, setState] = useState({matchedStation: []})


    useEffect(() => {
        const matchedArr = findStationByValue(search, stations)
        setState({matchedStation: matchedArr})

    }, [search])

    const {matchedStation} = state

    return (

        <>
            <input onChange={handleInput}
                name="search"
                type="text"
                className="search"
                autoComplete={false}
                value={search}
                placeholder="Название станции..."/> {
            isPending ? <h2 style={
                {color: 'black'}
            }>Загрузка...</h2> : <Stations matchedStations={matchedStation}
                value={search}/>
        } </>
    )
}

export default Search
