'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface BookTxState {
  rect: DOMRect
}

interface BookTxContextType {
  tx: BookTxState | null
  startTransition: (rect: DOMRect) => void
  clearTransition: () => void
}

const BookTxContext = createContext<BookTxContextType | null>(null)

export function BookTransitionProvider({ children }: { children: ReactNode }) {
  const [tx, setTx] = useState<BookTxState | null>(null)

  return (
    <BookTxContext.Provider value={{
      tx,
      startTransition: (rect) => setTx({ rect }),
      clearTransition: () => setTx(null),
    }}>
      {children}
    </BookTxContext.Provider>
  )
}

export function useBookTransition() {
  const ctx = useContext(BookTxContext)
  if (!ctx) throw new Error('useBookTransition must be used within BookTransitionProvider')
  return ctx
}
