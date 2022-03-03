import React, { useState, useEffect } from 'react'
import { OpAnimation, StyledMain } from './styles'
import { TiArrowBack } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

function Main({ title, container }) {
  const [opValue, setOpValue] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      setOpValue(1)
    }, 100)
  }, [])
  if (title) {
    return (
      <StyledMain>
        <section className="mainSection">
          <h1 className="title">{title}</h1>
          <OpAnimation opacity={opValue}>{container}</OpAnimation>
        </section>
      </StyledMain>
    )
  } else {
    return (
      <StyledMain>
        <section className="mainSection">
          <OpAnimation opacity={opValue}>
            <div onClick={() => navigate(-1)} className="backLink">
              <TiArrowBack />
            </div>
            {container}
          </OpAnimation>
        </section>
      </StyledMain>
    )
  }
}

export default Main
