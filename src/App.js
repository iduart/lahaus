import Navbar from "./components/Navbar";
import CollectionsGrid from "./components/CollectionsGrid";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl text-center mt-7 mb-16 md:my-16 font-semibold text-jungle">
        Listas de favoritos
      </h1>
      <CollectionsGrid />
    </>
  );
}

export default App;
