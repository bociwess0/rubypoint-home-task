import type { Part, PartStatus } from "../types";

interface Props {
  part: Part;
  updateStatus: (status: PartStatus) => void;
}

export default function PartDetails({ part, updateStatus }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Part Details</h2>

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
          // Notify parent component about status change
          onChange={(e) => updateStatus(e.target.value as PartStatus)}
          className="mt-1 w-full md:max-w-50 border rounded px-2 py-1"
        >
          <option selected>Draft</option>
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
    </div>
  );
}
