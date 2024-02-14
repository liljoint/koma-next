import Body from '../../atomics/Body/Body'
import Footer from '../../atomics/Footer/Footer'
import Header from '../../molecules/Header/Header'

function App({ children }) {
  return (
    <div className="text-bg inline-block min-h-[100vh]  bg-cover font-mono">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  )
}

export default App
