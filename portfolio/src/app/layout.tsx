import './/styles/globals.css'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1></h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
