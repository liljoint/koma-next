import Body from '@/app/components/atomics/Body/Body'
import Footer from '@/app/components/atomics/Footer/Footer'
import Header from '@/app/components/molecules/Header/Header'

function App({ children }) {
  return (
    <div className="font-mono inline-block min-h-[100vh] w-full bg-cover text-text">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default App
