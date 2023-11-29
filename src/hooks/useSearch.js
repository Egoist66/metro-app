import {useTransition, useEffect, useReducer} from "react";
import {reducer, initialState} from "../reducer/reducer";
import {InputAction, AppendAction} from "../actions/actions";


const url = "https://gist.githubusercontent.com/VasilyMur/43ef6df83bba694f871f11a16ed7556d/raw/b6edff674e35452d6c57ec64177a558f7adb432e/moscowSubway.json"


const useSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [isPending, startTransition] = useTransition()

    const fetchStations = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network or Server error!')
            }

            const lines = await response.json()
            const station = []
            lines.forEach(line => {
                station.push(line.stations)
            })

            dispatch(AppendAction(
                {
                    lines: await lines,
                    stations: station.flat()
                }
            ))

        } catch (e) {

            console.log(e)
        }
    }

    const handleInput = (e) => {
        startTransition(() => {
            dispatch(InputAction(e.target.value))
        })
    }

    const findStationByValue = (word, stations) => {
        return stations.filter(station => {
            const regexp = new RegExp(word, 'gi')

            return station.name.match(regexp)


        })
    }

    useEffect(() => {
        fetchStations()

    }, [])



    return {
        state,
        handleInput,
        isPending,
        findStationByValue
    }

}

export default useSearch