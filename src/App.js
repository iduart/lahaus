import Navbar from "./components/Navbar";
import CollectionsGrid from "./components/CollectionsGrid";
import "./App.css";

function App() {
  return (
    <div className="text-jungle">
      <Navbar />
      <h1 className="text-2xl text-center mt-7 mb-16 md:my-16 font-semibold">
        Listas de favoritos
      </h1>
      <CollectionsGrid />
    </div>
  );
}

export default App;
