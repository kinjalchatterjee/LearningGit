import '../styles/globals.css'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <h1>Portfolio</h1>
      </header>
      <main>{children}</main>
    </div>
  )
}
