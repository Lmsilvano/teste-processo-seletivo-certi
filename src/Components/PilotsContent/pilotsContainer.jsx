import React, { useEffect, useState, useMemo } from 'react'
import { StyledDivContainerPilots, StyledDivInputPilots } from './styles'
import PilotsCards from './pilotsCards'
function PilotsContainer() {
  const [PilotsData, setDataPilots] = useState([])
  const [filterPilots, setFilterPilots] = useState('')
  // prettier-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let allPilots = require('../../services/database/pilots.json')
    setDataPilots(allPilots)
  
  }, [])
  // prettier-ignore

  //
  const filteredPilots = useMemo(() => {
    if (filterPilots) {
      const lowerSearch = filterPilots.toLowerCase()
      return PilotsData.filter((Pilots) =>
        Pilots.name.toLowerCase().includes(lowerSearch),
      )
    } else return PilotsData
  }, [filterPilots, PilotsData])

  // If the filter is empty, return all the pilots
  if (PilotsData) {
    return (
      <>
        <StyledDivInputPilots>
          <input
            type="text"
            placeholder="Search for a pilot name"
            value={filterPilots}
            onChange={(e) => setFilterPilots(e.target.value)}
          />
          <h3>{`Results (${filteredPilots.length})`}</h3>
        </StyledDivInputPilots>
        <StyledDivContainerPilots>
          {filteredPilots.map((res, i) => {
            return (
              <PilotsCards
                name={res.name}
                img={res.image}
                key={i + res.id}
                gender={res.gender}
                species={res.species}
                born={res.born}
                homeworld={res.homeworld}
                id={res.id}
              />
            )
          })}
        </StyledDivContainerPilots>
      </>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default PilotsContainer
