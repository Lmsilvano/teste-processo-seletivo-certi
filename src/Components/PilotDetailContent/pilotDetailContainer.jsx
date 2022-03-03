/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Gallery from '../Gallery/gallery'
import PilotDetailsInfos from '../PilotDetailsInfos/pilotDetailsInfos'
import {
  StyledDivContainerPilotDetail,
  StyledSectionStarShipPilot,
} from './styles'
import StarShipsCards from '../StarShipsContent/starShipsCards'
export default function PilotDetailContainer() {
  const [pilot, setPilot] = useState()

  const id = useParams()
  //
  useEffect(async () => {
    const allpilots = require('../../services/database/pilots.json')
    const pilot = allpilots.find((pilot) => pilot.id === Number(id.id))
    setPilot(pilot)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //
  if (!pilot) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  } else if (pilot) {
    return (
      <>
        <StyledDivContainerPilotDetail>
          <div className="pilotDetailTitle">
            <h1 className="pilotTitle">{pilot.name}</h1>

            <span>{pilot.species}</span>
          </div>
          <div className="maindetailpilot">
            {pilot.image && <Gallery img={[{ url: pilot.image }]} />}
            {!pilot.image && (
              <Gallery
                img={'https://serraazul.sp.gov.br/lib/img/no-image.jpg'}
              />
            )}
            <PilotDetailsInfos
              height={pilot.height}
              mass={pilot.mass}
              gender={pilot.gender}
              homeworld={pilot.homeworld}
              born={pilot.born}
              bornLocation={pilot.bornLocation}
              died={pilot.died}
              diedLocation={pilot.diedLocation}
              masters={pilot.masters}
              apprentices={pilot.apprentices}
            />
          </div>
        </StyledDivContainerPilotDetail>
        <StyledSectionStarShipPilot>
          <h1>Star Ships:</h1>
          <div className="pilotstarshipscards">
            {!pilot.starships ? (
              <p>No Star Ships</p>
            ) : (
              pilot.starships.map((res, i) => {
                console.log(res)
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
              })
            )}
          </div>
        </StyledSectionStarShipPilot>
      </>
    )
  } else return <p>Loading...</p>
}
