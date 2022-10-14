import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <>
      <Navbar />
      <News pageSize = {3} />
    </>
  );
}

export default App;
