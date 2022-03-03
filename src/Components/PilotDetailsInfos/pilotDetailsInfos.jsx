import React from 'react'
import { StyledDivPilotDetails } from './styles'

function PilotDetailsInfos({
  height,
  mass,
  gender,
  homeworld,
  born,
  bornLocation,
  died,
  diedLocation,
  masters,
  apprentices,
}) {
  return (
    <StyledDivPilotDetails>
      <h1>Pilot Details</h1>
      <div className="reqContainer">
        <div className="specs">
          <p>
            <strong>Height: </strong>
            <br />
            {height !== undefined ? `${height}m` : 'Sorry...No data'}
          </p>
          <p>
            <strong>Mass: </strong>
            <br />
            {mass !== undefined ? `${mass}kg` : 'Sorry...No data'}
          </p>
          <p>
            <strong>Gender: </strong>
            <br />
            {gender !== undefined ? gender : 'Sorry...No data'}
          </p>
          <p>
            <strong>Homeworld: </strong>
            <br />
            {homeworld !== undefined ? homeworld : 'Sorry...No data'}
          </p>
          <p>
            <strong>Birth Day: </strong>
            <br />
            {born !== undefined ? born : 'Sorry...No data'}
          </p>
          <p>
            <strong>Born Location: </strong>
            <br />
            {bornLocation !== undefined ? bornLocation : 'Sorry...No data'}
          </p>
          <p>
            <strong>Died: </strong>
            <br />
            {died !== undefined ? `${died}ABY` : 'Sorry...No data'}
          </p>
          <p>
            <strong>Died Location: </strong>
            <br />
            {diedLocation !== undefined ? diedLocation : 'Sorry...No data'}
          </p>
          <p>
            <strong>Masters: </strong>
            <br />
            {masters !== undefined
              ? `${
                  typeof masters !== 'string'
                    ? masters.map((item) => `  ${item} `)
                    : masters
                }`
              : 'Sorry...No data'}
          </p>
          <p>
            <strong>Apprentices: </strong>
            <br />
            {apprentices !== undefined
              ? `${
                  typeof apprentices !== 'string'
                    ? apprentices.map((item) => `  ${item} `)
                    : apprentices
                }`
              : 'Sorry...No data'}
          </p>
        </div>
      </div>
    </StyledDivPilotDetails>
  )
}

export default PilotDetailsInfos
