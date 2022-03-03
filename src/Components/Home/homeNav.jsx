import React from 'react'
import { StyledNavHome } from './styles'
import { GiPlanePilot } from 'react-icons/gi'
import { GiSpaceship } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function HomeNav() {
  return (
    <StyledNavHome>
      <ul className="Nav__UlHome">
        <li className="Nav__LiHome">
          <NavLink className="Nav__LinkHome" to="/starships">
            StarShips <GiSpaceship />
          </NavLink>
        </li>
        <li className="Nav__LiHome">
          <NavLink className="Nav__LinkHome" to="/pilots">
            Pilots <GiPlanePilot />
          </NavLink>
        </li>
      </ul>
    </StyledNavHome>
  )
}

export default HomeNav
