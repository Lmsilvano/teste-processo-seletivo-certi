import React, { createContext, useContext } from 'react'

const PilotsContext = createContext()

function PilotsProvider({ children }) {
  async function PilotsListReq() {
    const allPilots = require('../services/database/pilots.json')
    return allPilots
  }

  return (
    <PilotsContext.Provider value={{ PilotsListReq }}>
      {children}
    </PilotsContext.Provider>
  )
}

function PilotsShowList() {
  const context = useContext(PilotsContext)

  return context
}
export { PilotsProvider, PilotsShowList }
