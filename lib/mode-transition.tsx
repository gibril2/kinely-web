'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface TxState {
  rect: DOMRect
  color: string
}

interface TxContextType {
  tx: TxState | null
  startTransition: (rect: DOMRect, color: string) => void
  clearTransition: () => void
}

const TxContext = createContext<TxContextType | null>(null)

export function ModeTransitionProvider({ children }: { children: ReactNode }) {
  const [tx, setTx] = useState<TxState | null>(null)

  return (
    <TxContext.Provider value={{
      tx,
      startTransition: (rect, color) => setTx({ rect, color }),
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
