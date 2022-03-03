import React from 'react'
import { StyledDivCardsPilots } from './styles'
import { Link } from 'react-router-dom'
function PilotsCards({ img, name, gender, species, born, homeworld, id }) {
  return (
    <StyledDivCardsPilots>
      <div className="pilotsIMGdiv">
        <img
          src={img}
          alt={`Pilot ${name} thumbnail`}
          className="cardIMGPilots"
        />
      </div>
      <div className="cardContentPilots">
        <h3>{name}</h3>
        <div className="cardContentInfo">
          <p>
            Specie:
            <br />{' '}
            <strong>{species !== undefined ? species : 'Unknown'}</strong>
          </p>
          <p>
            Gender: <br />
            <strong>{gender !== undefined ? gender : 'Unknown'}</strong>
          </p>
          <p>
            Birth date: <br />
            <strong>{born !== undefined ? born : 'Unknown'}</strong>
          </p>
          <p>
            Homeworld:
            <br />{' '}
            <strong>{homeworld !== undefined ? homeworld : 'Unknown'}</strong>
          </p>
        </div>
      </div>
      <Link to={`/pilot/${id}`}>More details</Link>
    </StyledDivCardsPilots>
  )
}

export default PilotsCards
