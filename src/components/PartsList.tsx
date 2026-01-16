import type { Part } from "../types";

interface Props {
  parts: Part[];
}

export default function PartsList({ parts }: Props) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Parts</h2>
      <ul className="space-y-2">
        {parts.map((part: Part) => (
          <li key={part.id} className="p-2 rounded cursor-pointer border">
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
