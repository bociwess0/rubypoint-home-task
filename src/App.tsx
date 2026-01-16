import "./App.css";
import PartsList from "./components/PartsList";
import { initialParts } from "./data/parts";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:pt-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-4">
        {/* Left column: parts list */}
        <div className="md:w-1/3 bg-white rounded-lg shadow p-4">
          <PartsList
            parts={initialParts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
