import React from 'react'
import { StyledDivCardsStarShips } from './styles'
import { Link } from 'react-router-dom'
function StarShipsCards({
  img,
  name,
  model,
  manufacturer,
  cost_in_credits,
  crew,
  length,
  passengers,
  consumables,
}) {
  return (
    <StyledDivCardsStarShips>
      <div className="starShipsIMGdiv">
        <img
          src={img}
          alt={`Pilot ${name} thumbnail`}
          className="cardIMGStarShips"
        />
      </div>
      <div className="cardContentStarShips">
        <h3>{name}</h3>
        <div className="cardContentInfo">
          <p>
            Manufacturer:
            <br />{' '}
            <strong>
              {manufacturer !== undefined ? manufacturer : 'Unknown'}
            </strong>
          </p>
          <p>
            Model: <br />
            <strong>{model !== undefined ? model : 'Unknown'}</strong>
          </p>
          <p>
            Cost: <br />
            <strong>
              {cost_in_credits !== undefined ? cost_in_credits : 'Unknown'}
            </strong>
          </p>
          <p>
            Crew:
            <br /> <strong>{crew !== undefined ? crew : 'Unknown'}</strong>
          </p>
          <p>
            Passengers:
            <br />{' '}
            <strong>{passengers !== undefined ? passengers : 'Unknown'}</strong>
          </p>
          <p>
            Length:
            <br />{' '}
            <strong>{length !== undefined ? `${length}m` : 'Unknown'}</strong>
          </p>
          <p>
            Consumables:
            <br />{' '}
            <strong>
              {consumables !== undefined ? `${consumables}` : 'Unknown'}
            </strong>
          </p>
        </div>
      </div>
      <Link to={`/starships`}>More details</Link>
    </StyledDivCardsStarShips>
  )
}

export default StarShipsCards
