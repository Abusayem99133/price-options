import "./App.css";
// import Daysi from "./Components/Daisy/Daysi";
import Navbars from "./Components/Navbars/Navbars";
import PriceOptions from "./Components/PriceOption/PriceOptions";

function App() {
  return (
    <>
      <Navbars></Navbars>
      {/* <Daysi></Daysi> */}
      <h1 className="text-5xl bg-red-700 text-red-300">Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
