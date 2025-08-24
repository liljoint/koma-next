'use client'
import Body from '@/app/components/atomics/Body/Body'
import Header from '@/app/components/atomics/Header/Header'
import SideBar from '../SideBar/SideBar'

function Container({ children }) {
  return (
    <div className="font-mono mb-20 w-full bg-contain text-text">
      <Header Menu={SideBar} />
      <Body>{children}</Body>
    </div>
  )
}

export default Container
