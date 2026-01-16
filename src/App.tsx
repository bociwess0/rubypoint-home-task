import { useState } from "react";
import "./App.css";
import PartDetails from "./components/PartDetails";
import PartsList from "./components/PartsList";
import { initialParts } from "./data/parts";
import type { Part } from "./types";

function App() {
  /**
   * Central source of truth for all parts.
   * In a larger app, this could later be replaced by server state or a store.
   */

  const [parts, setParts] = useState(initialParts);

  /**
   * Tracks the currently selected part.
   * Initialized to the first part for a better initial UX.
   */
  const [selectedId, setSelectedId] = useState<string | null>(
    initialParts[0].id
  );

  const selectedPart = parts.find((p: Part) => p.id === selectedId);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:pt-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-4">
        {/* Left column: parts list */}
        <div className="md:w-1/3 bg-white rounded-lg shadow p-4">
          <PartsList
            parts={parts}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </div>
        {selectedPart && (
          <div className="md:w-2/3 flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <PartDetails part={selectedPart} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
