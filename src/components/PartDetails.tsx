import type { Part, PartStatus } from "../types";

interface Props {
  part: Part; // currently selected part whose details are displayed
  onStatusChange: (status: PartStatus) => void; // callback to notify parent when the part status changes
}

/**
 * PartDetails
 *
 * Displays detailed information about the selected part.
 * Includes a controlled Status dropdown that updates application state
 * via a callback provided by the parent component.
 *
 * This component does not manage state itself and relies entirely on props.
 */

export default function PartDetails({ part, onStatusChange }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Part Details</h2>

      <div className="space-y-2">
        {/* Part name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <p>{part.name}</p>
        </div>

        {/* Status selector */}
        <div className="md:flex md:items-center md:gap-4">
          <label className="block text-sm font-medium">Status</label>
          <select
            value={part.status}
            onChange={(e) => onStatusChange(e.target.value as PartStatus)} // Notify parent component about status change
            className="mt-1 w-full md:max-w-50 border rounded px-2 py-1"
          >
            <option>Draft</option>
            <option>In Review</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Part metadata */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <strong>Supplier:</strong> {part.supplier}
          </div>
          <div>
            <strong>Material:</strong> {part.material}
          </div>
          <div>
            <strong>Weight:</strong> {part.weight} kg
          </div>
          <div>
            <strong>Critical:</strong> {part.critical ? "Yes" : "No"}
          </div>
        </div>

        {/* Last updated timestamp */}
        <div className="text-sm text-gray-500">
          Last updated: {new Date(part.lastUpdated).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
