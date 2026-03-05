'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface TxState {
  rect: DOMRect
}

interface TxContextType {
  tx: TxState | null
  startTransition: (rect: DOMRect) => void
  clearTransition: () => void
}

const TxContext = createContext<TxContextType | null>(null)

export function ModeTransitionProvider({ children }: { children: ReactNode }) {
  const [tx, setTx] = useState<TxState | null>(null)

  return (
    <TxContext.Provider value={{
      tx,
      startTransition: (rect) => setTx({ rect }),
      clearTransition: () => setTx(null),
    }}>
      {children}
    </TxContext.Provider>
  )
}

export function useModeTransition() {
  const ctx = useContext(TxContext)
  if (!ctx) throw new Error('useModeTransition must be used within ModeTransitionProvider')
  return ctx
}
