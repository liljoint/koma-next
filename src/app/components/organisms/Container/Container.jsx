'use client'
import Body from '@/app/components/atomics/Body/Body'
import Footer from '@/app/components/atomics/Footer/Footer'
import Header from '@/app/components/atomics/Header/Header'
import SideBar from '../SideBar/SideBar'

function Container({ children }) {
  return (
    <div className="font-mono h-screen w-full bg-cover text-text">
      <Header Menu={SideBar} />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default Container
