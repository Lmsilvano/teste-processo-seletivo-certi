import React from 'react'
import { StyledNav } from './styles'
import { GiPlanePilot } from 'react-icons/gi'
import { GiSpaceship } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <StyledNav>
      <ul className="Nav__Ul">
        <li className="Nav__Li">
          <NavLink
            className={(data) =>
              data.isActive ? 'Nav__Link active' : 'Nav__Link'
            }
            to="/starships"
          >
            Starships <GiSpaceship />
          </NavLink>
        </li>
        <li className="Nav__Li">
          <NavLink
            className={(data) =>
              data.isActive ? 'Nav__Link active' : 'Nav__Link'
            }
            to="/pilots"
          >
            Pilots <GiPlanePilot />
          </NavLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default NavBar
