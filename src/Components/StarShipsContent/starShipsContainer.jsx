import React, { useEffect, useState, useMemo } from 'react'
import { StyledDivContainerStarShips, StyledDivInputStarShips } from './styles'
import StarShipsCards from './starShipsCards'
import { getDataSwapi } from '../../services/Swapi/request'
function StarShipsContainer() {
  const [StarShipsData, setDataStarShips] = useState([])
  const [filterStarShips, setFilterStarShips] = useState('')
  // prettier-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    let allStarShips = await getDataSwapi()
    setDataStarShips(allStarShips)
    console.log(allStarShips)
  
  }, [])
  // prettier-ignore

  //
  const filteredStarShips = useMemo(() => {
    if (filterStarShips) {
      const lowerSearch = filterStarShips.toLowerCase()
      return StarShipsData.filter((StarShips) =>
        StarShips.name.toLowerCase().includes(lowerSearch),
      )
    } else return StarShipsData
  }, [filterStarShips, StarShipsData])

  // If the filter is empty, return all the StarShips
  if (StarShipsData || typeof StarShipsData !== 'object') {
    return (
      <>
        <StyledDivInputStarShips>
          <input
            type="text"
            placeholder="Search for a StarShip name"
            value={filterStarShips}
            onChange={(e) => setFilterStarShips(e.target.value)}
          />
          <h3>{`Results (${filteredStarShips.length})`}</h3>
        </StyledDivInputStarShips>
        <StyledDivContainerStarShips>
          {filteredStarShips.map((res, i) => {
            return (
              <StarShipsCards
                name={res.name}
                img={
                  'https://www.denofgeek.com/wp-content/uploads/2016/01/star-destroyer_0-scaled.jpg'
                }
                key={i + res.name}
                model={res.model}
                manufacturer={res.manufacturer}
                cost_in_credits={res.cost_in_credits}
                crew={res.crew}
                length={res.length}
                passengers={res.passengers}
                consumables={res.consumables}
              />
            )
          })}
        </StyledDivContainerStarShips>
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default StarShipsContainer
