import type { Part } from "../types";

interface Props {
  parts: Part[]; // list of available parts to display
  selectedId: string | null; // currently selected part id (used for visual highlighting)
  onSelect: (id: string) => void; // callback fired when a part is selected
}

/**
 * PartsList
 *
 * Displays a list of parts and allows the user to select one.
 * This is a presentational component with no internal state.
 * It delegates selection handling to the parent component.
 */

export default function PartsList({ parts, selectedId, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Parts</h2>
      <ul className="space-y-2">
        {parts.map((part: Part) => (
          <li
            key={part.id}
            className={`p-2 rounded cursor-pointer border ${
              part.id === selectedId
                ? "bg-blue-50 border-blue-400"
                : "hover:bg-gray-50 border-transparent"
            }`}
            onClick={() => onSelect(part.id)}
          >
            <div className="font-medium">{part.name}</div>
            <div className="text-sm text-gray-600">
              {part.status} · {part.supplier}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
