import Body from "../../atomics/Body/Body";
import Footer from "../../atomics/Footer/Footer";
import Header from "../../molecules/Header/Header";

function App({ children }) {
  return (
    <div className="inline-block min-h-[100vh] bg-gray-800 bg-cover text-white font-mono">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
}

export default App;
