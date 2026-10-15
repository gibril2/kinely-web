'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

// The visitor's answer in the home page demo. Lives only in memory on this
// page; it is never sent anywhere.
type DemoAnswer = { answer: string | null; setAnswer: (a: string | null) => void }

const Ctx = createContext<DemoAnswer>({ answer: null, setAnswer: () => {} })

export function DemoAnswerProvider({ children }: { children: ReactNode }) {
  const [answer, setAnswer] = useState<string | null>(null)
  return <Ctx.Provider value={{ answer, setAnswer }}>{children}</Ctx.Provider>
}

export const useDemoAnswer = () => useContext(Ctx)
