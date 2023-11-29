
const Stations = ({matchedStations, value}) => {

    const highLightMatch = (val, station) => {
        const regexp = new RegExp(val, 'gi')
        const stationName = station.name.replace(regexp, `<mark>${val}</mark>`)
        return stationName
    }


    return (

        <>

            <ul className="options">
                {value !== '' ? matchedStations.map(item => {

                    return (
                        <li key={item.id}>
                            <span dangerouslySetInnerHTML={{__html: highLightMatch(value, item) }}></span>
                            <span><strong>, ID: {item.id}</strong></span>
                        </li>
                    )
                }) : null}
            </ul>


        </>

    )
}

export default  Stations