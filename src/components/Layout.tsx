import type { ReactNode } from 'react'
import Header from './Header'
import Profile from './Profile'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Profile />
      </main>
    </>
  )
}
